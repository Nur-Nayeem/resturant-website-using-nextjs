import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to Auth</h1>
        <p className="text-gray-600">Choose an option to continue:</p>
        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
