// In: app/(pages)/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import apiClient from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/components/Logo';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // ✨ ADDED: Loading state
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true); // ✨ Set loading to true

    try {
      // Endpoint for Djoser JWT token creation
      const response = await apiClient.post('/api/auth/jwt/create/', { email, password });
      
      if (response.data.access) {
        const { access, refresh } = response.data;
        
        // Store tokens in localStorage
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        
        // ✅ IMPORTANT: Set the Authorization header for all future requests
        // Djoser + SimpleJWT use the 'Bearer' prefix
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${access}`;
        
        router.push('/dashboard'); // Redirect on success
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.detail || "Login failed. Please check your credentials.";
      setError(errorMessage);
    } finally {
      setIsLoading(false); // ✨ Set loading to false when request is done
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-secondary rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-center text-foreground">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-muted-foreground">Password</label>
            <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
          </div>
          {error && <p className="text-sm text-destructive text-center">{error}</p>}
          <div>
            {/* ✨ Disable button and show loading text when submitting */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </div>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}