'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/landscape', label: 'Landscape' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
] as const;

/* ── inline SVG icons ─────────────────────────────────────── */

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* left hemisphere */}
      <path d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4.5 4.5 0 0 0 1 8.9A5 5 0 0 0 12 22" />
      {/* right hemisphere */}
      <path d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4.5 4.5 0 0 1-1 8.9A5 5 0 0 1 12 22" />
      {/* inner connections */}
      <path d="M12 2v20" />
      <path d="M8 6c2 1 4 1 4 1" />
      <path d="M16 6c-2 1-4 1-4 1" />
      <path d="M7.5 13c1.5-.5 4.5-.5 4.5-.5" />
      <path d="M16.5 13c-1.5-.5-4.5-.5-4.5-.5" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/* ── Navbar ────────────────────────────────────────────────── */

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-gray-950/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ── Brand ──────────────────────────────────────── */}
          <Link href="/" className="group flex items-center gap-2">
            <BrainIcon className="h-7 w-7 text-violet-500 transition-transform duration-300 group-hover:scale-110" />
            <span className="bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              CL Landscape
            </span>
          </Link>

          {/* ── Desktop links ──────────────────────────────── */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-violet-600 dark:text-violet-400'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute inset-x-1 -bottom-[calc(0.5rem+1px)] h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-sky-500" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right actions ──────────────────────────────── */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-100"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-white/10"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer overlay ──────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile drawer ──────────────────────────────────── */}
      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden dark:bg-gray-900 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="mb-8 self-end rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Spacer so page content is not hidden behind the fixed navbar */}
      <div className="h-16" />
    </>
  );
}
