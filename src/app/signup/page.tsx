"use client";

import { useState } from "react";
import { AuthForm } from "@/components/ui/auth-form";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    setIsLoading(true);

    try {
      // Here you would typically call your authentication API
      console.log("Signup attempt with:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll just redirect to login
      // In a real app, you would create the account and possibly log them in
      router.push("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">
            Join LifeCore Biointegrative to access our services
          </p>
        </div>

        <AuthForm type="signup" onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
