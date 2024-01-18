import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen text-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link
        href="/week-2"
        className="border border-blue-600 bg-blue-600 rounded-md"
      >
        Week 2
      </Link>
    </div>
  );
}
