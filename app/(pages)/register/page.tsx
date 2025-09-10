// app/(pages)/register/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';

import apiClient from '@/lib/api';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Placeholder for future use

export default function RegisterPage() {
  const router = useRouter();

  // --- State ---
  const [fullName, setFullName] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // --- Handlers ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== rePassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      setIsLoading(true);

      await apiClient.post('/api/auth/users/', {
        full_name: fullName,
        email,
        password,
        password2: rePassword, // matches serializer
      });

      toast.success('Registration successful! Please sign in.');
      router.push('/login');
    } catch (err: any) {
      if (err.response?.data) {
        const errorData = err.response.data;

        // Flatten error messages into a single string
        const errorMessages = Object.entries(errorData).map(([key, value]) => {
          const message = Array.isArray(value)
            ? (value as string[]).join(' ')
            : String(value);

          return key === 'non_field_errors'
            ? message
            : `${key}: ${message}`;
        });

        setError(errorMessages.join(' ') || 'Registration failed. Please try again.');
      } else {
        setError('An unexpected error occurred.');
      }
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // --- UI ---
  return (
    <>
      <Toaster position="top-center" />
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground p-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-secondary rounded-lg shadow-lg">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Logo />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-foreground">
            Create Your Account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-muted-foreground"
              >
                Full Name
              </label>
              <Input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-muted-foreground"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="rePassword"
                className="block text-sm font-medium text-muted-foreground"
              >
                Confirm Password
              </label>
              <Input
                id="rePassword"
                type="password"
                required
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-sm text-accent text-center">{error}</p>
            )}

            {/* Submit Button */}
            <div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
