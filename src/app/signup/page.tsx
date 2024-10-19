"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/components/icons/google";
import LockIcon from "@/components/icons/lock";
import LogInIcon from "@/components/icons/login";
import UserIcon from "@/components/icons/user";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      "name": username,
      "password": password,
      "email": email,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      // Optionally handle successful signup here (e.g., redirect to login)
      console.log("Signup successful!");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-5">
        <div>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground">
            Welcome to Thaara AI
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
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Image
                  src="/mail.svg"
                  alt="Email Icon"
                  className="dark:invert"
                  width={20}
                  height={20}
                  priority
                />
              </div>
              <Input
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full h-11 rounded-md border-[#555] bg-[#ffffff00] pl-10 pr-3 py-2 text-foreground placeholder-[#a0a0a0] focus:border-[var(--accent-color)] focus:ring-[var(--accent-color]"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
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
              Sign up
            </Button>
          </div>
          <div>
            <Button
              variant="outline"
              className="group relative flex w-full h-12 bg-white justify-center rounded-md border-none py-2 px-4 text-sm font-medium text-black hover:text-black hover:bg-[#e8e8e8]"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <GoogleIcon className="h-5 w-5 fill-black" />
              </span>
              Sign up with Google
            </Button>
          </div>
        </form>
        <p className="mt-1 text-center text-sm text-[#a0a0a0]">
          <Link href="/login" className="font-medium text-[var(--accent-color)]">
            Login to an existing account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;