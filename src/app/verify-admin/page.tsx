"use client";

import { useState } from "react";
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { Lock, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VerifyAdminPage() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Will integrate with backend later
    setTimeout(() => {
      setIsLoading(false);
      if (password.length < 8) {
        setError("Invalid admin credentials");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950 p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <Card className="w-full max-w-md relative">
        <CardHeader className="text-center pb-2">
          {/* Icon */}
          <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
            <ShieldCheck className="text-white" size={28} />
          </div>
          <CardTitle className="text-2xl">Verify Admin Access</CardTitle>
          <CardDescription>
            Enter your admin password to access sensitive operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Admin Password"
              type="password"
              placeholder="••••••••"
              icon={<Lock size={18} />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error}
              required
            />

            <p className="text-xs text-gray-500">
              This is your admin-specific password, not your account password.
            </p>

            <Button type="submit" className="w-full" isLoading={isLoading}>
              Verify & Continue
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-dark-700">
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
