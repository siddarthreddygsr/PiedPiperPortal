import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient">
            <div className="p-8 rounded-lg">
                <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
                <p className="text-2xl mb-8">Oops! The page you are looking for does not exist.</p>
                <Link href="/" className="bg-accent text-accent-foreground px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors">
                Go back home
                </Link>
            </div>
        </div>
    );
}