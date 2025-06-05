"use client";

import { useState } from "react";
import { AuthForm } from "@/components/ui/auth-form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: { email: string; password: string }) => {
    setIsLoading(true);

    try {
      // Here you would typically call your authentication API
      console.log("Login attempt with:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll just redirect to home
      // In a real app, you would verify credentials and set auth state
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground">
            Sign in to your LifeCore Biointegrative account
          </p>
        </div>

        <AuthForm type="login" onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
