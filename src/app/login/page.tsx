import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login: React.FC = () => {
  return (
    // <div className="flex min-h-[100vh] items-center justify-center bg-[#0c0c0c] px-4 py-12 sm:px-6 lg:px-8">
    <div className="flex min-h-[100vh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-5">
        <div>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground">
            Welcome back
          </h2>
          <h1 className="mt-2 text-center text-4xl font-bold tracking-tight text-foreground">
            Sign in to Project
          </h1>
        </div>
        <form className="space-y-3" action="#" method="POST">
          <div>
            <Label htmlFor="username" className="sr-only">
              Username
            </Label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-[#a0a0a0]" />
              </div>
              <Input
                id="username"
                type="text"
                placeholder="Username"
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
                className="block w-full h-11 rounded-md border-[#555] bg-[#ffffff00] pl-10 pr-3 py-2 text-foreground placeholder-[#a0a0a0] focus:border-[var(--accent-color)] focus:ring-[var(--accent-color]"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full h-11 justify-center rounded-md border border-transparent bg-accent py-2 px-4 text-sm font-medium text-accent-foreground"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LogInIcon className="h-5 w-5 text-accent-foreground group-hover:text-accent-foreground" />
              </span>
              Sign in
            </Button>
          </div>
          <div>
            <Button
              variant="outline"
              className="group relative flex w-full h-12 bg-white justify-center rounded-md border py-2 px-4 text-sm font-medium text-[#000] hover:text-[#000] hover:bg-[#e8e8e8]"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <GoogleIcon className="h-5 w-5 fill-black" />
              </span>
              Sign in with Google
            </Button>
          </div>
        </form>
        <p className="mt-1 text-center text-sm text-[#a0a0a0]">
          <Link
            href="/signup"
            className="font-medium text-[var(--accent-color)]"
          >
            sign up for a new account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LogInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
