"use client";

import Link from "next/link";

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 z-50 p-2 bg-white border border-zinc-200 rounded-md shadow-sm hover:bg-zinc-50 focus:outline-none dark:bg-zinc-900 dark:border-zinc-800 transition-all duration-300 ease-in-out ${
          isOpen ? "left-[240px]" : "left-4"
        }`}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-zinc-200 transition-transform duration-300 ease-in-out dark:bg-zinc-950 dark:border-zinc-800 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <h2 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-zinc-50">Tutorials</h2>
          <nav className="space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Introduction
            </Link>
            <Link
              href="/beginner"
              className="block px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
            >
              3x3 Beginner Method
            </Link>
            <Link
              href="/cfop"
              className="block px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
            >
              CFOP Method
            </Link>
            <Link
              href="/2x2"
              className="block px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
            >
              2x2 Tutorial
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
