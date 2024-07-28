"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const HomePage: React.FC = () => {
  const { isAuthenticated, initializing } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!initializing && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, initializing, router]);

  if (initializing) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      THIS IS A PROTECTED PAGE
    </div>
  );
};

export default HomePage;
