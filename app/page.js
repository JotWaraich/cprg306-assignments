import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        <button className="border border-blue-600 bg-blue-600 rounded-md">
          Week 2
        </button>
      </Link>
    </div>
  );
}
