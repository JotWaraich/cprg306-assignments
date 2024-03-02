import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen text-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 flex flex-col gap-4">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col gap-5">
        <div>
          <Link
            href="/week-2"
            className="w-44 border border-blue-600 bg-blue-600 rounded-md p-2"
          >
            Week 2
          </Link>
        </div>
        <div>
          <Link
            href="/week-3"
            className="w-44 border border-blue-600 bg-blue-600 rounded-md p-2"
          >
            Week 3
          </Link>
        </div>
        <div>
          <Link
            href="/week-4"
            className="w-44 border border-blue-600 bg-blue-600 rounded-md p-2"
          >
            Week 4
          </Link>
        </div>
        <div>
          <Link
            href="/week-5"
            className="w-44 border border-blue-600 bg-blue-600 rounded-md p-2"
          >
            Week 5
          </Link>
        </div>
        <div>
          <Link
            href="/week-6"
            className="w-44 border border-blue-600 bg-blue-600 rounded-md p-2"
          >
            Week 6
          </Link>
        </div>
      </div>
    </div>
  );
}
