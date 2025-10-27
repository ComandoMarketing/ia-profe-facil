'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';

interface SavedPrompt {
  id: number;
  title: string;
  text: string;
}

interface ToolboxContextType {
  savedPrompts: SavedPrompt[];
  addPrompt: (prompt: { title: string; text: string }) => Promise<void>;
  loading: boolean;
  completedLessons: string[];
  markLessonAsCompleted: (lessonSlug: string) => Promise<void>;
}

const ToolboxContext = createContext<ToolboxContextType | undefined>(undefined);

export const ToolboxProvider = ({ children }: { children: ReactNode }) => {
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const userId = 'user-placeholder-123';

      const { data: promptsData, error: promptsError } = await supabase
        .from('prompts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (promptsError) console.error('Error fetching prompts:', promptsError);
      else setSavedPrompts(promptsData || []);

      const { data: progressData, error: progressError } = await supabase
        .from('user_progress')
        .select('lesson_slug')
        .eq('user_id', userId);
      
      if (progressError) console.error('Error fetching progress:', progressError);
      else {
        const slugs = progressData?.map(p => p.lesson_slug) || [];
        setCompletedLessons(slugs);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const addPrompt = async (prompt: { title: string; text: string }) => {
    const { data, error } = await supabase
      .from('prompts')
      .insert([prompt])
      .select();
    if (error) {
      console.error('Error adding prompt:', error);
      alert('Error al guardar el prompt.');
    } else if (data) {
      setSavedPrompts(prevPrompts => [data[0], ...prevPrompts]);
    }
  };

  const markLessonAsCompleted = async (lessonSlug: string) => {
    const userId = 'user-placeholder-123';
    if (completedLessons.includes(lessonSlug)) {
      return;
    }

    // LÍNEA CORREGIDA: 'await' va seguido de 'supabase'
    const { error } = await supabase
      .from('user_progress')
      .insert({ user_id: userId, lesson_slug: lessonSlug });

    if (error) {
      console.error('Error marking lesson as completed:', error);
      alert('Error al guardar el progreso.');
    } else {
      setCompletedLessons(prev => [...prev, lessonSlug]);
    }
  };

  return (
    <ToolboxContext.Provider value={{ savedPrompts, addPrompt, loading, completedLessons, markLessonAsCompleted }}>
      {children}
    </ToolboxContext.Provider>
  );
};

export const useToolbox = () => {
  const context = useContext(ToolboxContext);
  if (context === undefined) {
    throw new Error('useToolbox must be used within a ToolboxProvider');
  }
  return context;
};