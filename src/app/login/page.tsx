"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import GoogleIcon from "@/components/icons/google";
import LockIcon from "@/components/icons/lock";
import LogInIcon from "@/components/icons/login";
import UserIcon from "@/components/icons/user";

const Login: React.FC = () => {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      email: username,
      password: password
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/token", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      login(data.access_token);
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* <div className="mx-auto w-full max-w-md space-y-5 shadow-lg px-4 py-10 bg-[var(--accent-foreground-color)] rounded-[15px]"> */}
      <div className="mx-auto w-full max-w-md space-y-5">
        <div>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground">
            Welcome back
          </h2>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username" className="sr-only">Username</Label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-[#a0a0a0]" />
              </div>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full h-11 rounded-md border-[#555] bg-[#ffffff00] pl-10 pr-3 py-2 text-foreground placeholder-[#a0a0a0] focus:border-[var(--accent-color)] focus:ring-[var(--accent-color)]"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">Password</Label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <LockIcon className="h-5 w-5 text-[#a0a0a0]" />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full h-11 rounded-md border-[#555] bg-[#ffffff00] pl-10 pr-3 py-2 text-foreground placeholder-[#a0a0a0] focus:border-[var(--accent-color)] focus:ring-[var(--accent-color)]"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div>
            <Button
              type="submit"
              className="group relative flex w-full h-11 justify-center rounded-md border border-transparent bg-[var(--accent-color)] py-2 px-4 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-color)]"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LogInIcon className="h-5 w-5 text-accent-foreground" />
              </span>
              Sign in
            </Button>
          </div>
          <div>
            <Button
              variant="outline"
              className="group relative flex w-full h-12 bg-white justify-center rounded-md border-none py-2 px-4 text-sm font-medium text-[#000] hover:text-[#000] hover:bg-[#e8e8e8] shadow-lg"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <GoogleIcon className="h-5 w-5 fill-black" />
              </span>
              Sign in with Google
            </Button>
          </div>
        </form>
        <p className="mt-1 text-center text-sm text-[#a0a0a0]">
          <Link href="/signup" className="font-medium text-[var(--accent-color)]">sign up for a new account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;