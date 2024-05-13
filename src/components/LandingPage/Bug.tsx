import Link from "next/link";

export default function Bug() {
  return (
    <section className="w-full bg-[#151519] py-8 md:py-20 lg:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl">
            Report a Bug!
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <BugIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-50">
                  Raise an issue on the repository
                </h3>
                <p className="text-gray-400">
                  If you encounter any bugs or issues while using SnipSavvy,
                  please raise an issue on the repository so our team can
                  investigate and address the problem.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <GitPullRequestIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-50">
                  Contribute to the repository
                </h3>
                <p className="text-gray-400">
                  If you have the skills and expertise to fix the bug or improve
                  SnipSavvy, we welcome your contributions. Please submit a pull
                  request with your changes, and our team will review and merge
                  it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#016ACC] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#016accb0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-400 dark:text-gray-950 dark:hover:bg-gray-400/90 dark:focus-visible:ring-gray-300"
              href="https://github.com/SnipSavvy?tab=repositories"
            >
              Raise an Issue
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-400 bg-transparent px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://github.com/SnipSavvy?tab=repositories"
            >
              Contribute
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BugIcon(props: any) {
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
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  );
}

function GitPullRequestIcon(props: any) {
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
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  );
}
