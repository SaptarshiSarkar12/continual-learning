import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 bg-clip-text text-lg font-bold text-transparent">
              CL Landscape
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              An interactive guide to continual learning strategies for neural
              networks.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2">
              {[
                { href: "/landscape", label: "Landscape" },
                { href: "/resources", label: "Resources" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Community
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://continualai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  ContinualAI
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-xs text-gray-400 dark:text-gray-500">
            Inspired by the{" "}
            <a
              href="https://landscape.cncf.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            >
              CNCF Landscape
            </a>{" "}
            &bull; Built with Next.js &amp; Tailwind &bull; &copy;{" "}
            {new Date().getFullYear()} CL Landscape
          </p>
        </div>
      </div>
    </footer>
  );
}
