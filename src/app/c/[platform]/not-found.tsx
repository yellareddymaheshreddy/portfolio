import Link from "next/link"
export default function ContactNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-500 dark:text-red-400">
          🚫 Link Not Found
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          The contact link you’re looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

