import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — CL Landscape",
  description:
    "Curated surveys, frameworks, benchmarks, and tutorials for continual learning research.",
};

const SECTIONS = [
  {
    title: "Surveys & Overviews",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    items: [
      {
        name: "Continual Lifelong Learning with Neural Networks: A Review",
        year: "2019",
        url: "https://arxiv.org/abs/1802.07569",
        desc: "Comprehensive survey covering the main CL paradigms, evaluation protocols, and open challenges.",
      },
      {
        name: "A Comprehensive Study of Class Incremental Learning",
        year: "2020",
        url: "https://arxiv.org/abs/2006.06958",
        desc: "In-depth study of class-incremental learning methods with a unified experimental framework.",
      },
      {
        name: "Online Continual Learning in Image Classification",
        year: "2021",
        url: "https://arxiv.org/abs/2101.10423",
        desc: "Survey focused on online CL settings, including single-pass and data-stream scenarios.",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    color: "from-sky-500 to-blue-600",
    items: [
      {
        name: "Avalanche",
        year: "",
        url: "https://avalanche.continualai.org",
        desc: "End-to-end library for continual learning research built on PyTorch, featuring benchmarks, strategies, and evaluation tools.",
      },
      {
        name: "Sequoia",
        year: "",
        url: "https://github.com/lebrice/Sequoia",
        desc: "A research framework for continual, transfer, and multi-task learning with a tree of settings.",
      },
      {
        name: "ContinualAI",
        year: "",
        url: "https://continualai.org",
        desc: "The largest research community and organization dedicated to continual learning in AI.",
      },
    ],
  },
  {
    title: "Benchmarks",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    items: [
      {
        name: "Split CIFAR-100",
        year: "",
        url: "https://www.cs.toronto.edu/~kriz/cifar.html",
        desc: "CIFAR-100 split into sequential tasks — the most widely used benchmark for class-incremental learning.",
      },
      {
        name: "Split MNIST / Permuted MNIST",
        year: "",
        url: "https://yann.lecun.com/exdb/mnist/",
        desc: "Classic continual learning benchmarks for task-incremental and domain-incremental settings.",
      },
      {
        name: "Split TinyImageNet",
        year: "",
        url: "https://www.image-net.org/",
        desc: "A more challenging benchmark derived from ImageNet with 200 classes and higher resolution images.",
      },
    ],
  },
  {
    title: "Tutorials & Courses",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    color: "from-amber-500 to-orange-600",
    items: [
      {
        name: "ContinualAI Wiki",
        year: "",
        url: "https://wiki.continualai.org",
        desc: "Community-maintained wiki with in-depth explanations of continual learning concepts and methods.",
      },
      {
        name: "CVPR Continual Learning Workshops",
        year: "",
        url: "https://sites.google.com/view/clvision",
        desc: "Annual workshops at CVPR featuring the latest advances in continual learning for computer vision.",
      },
      {
        name: "Continual Learning Course (ContinualAI)",
        year: "",
        url: "https://course.continualai.org",
        desc: "Free online course covering fundamentals of continual learning, from theory to practical implementations.",
      },
    ],
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Resources
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Curated surveys, frameworks, benchmarks, and learning materials for
            continual learning research.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-br ${section.color} p-2.5 text-white shadow-md`}
                >
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {section.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-violet-600 dark:text-gray-100 dark:group-hover:text-violet-400">
                        {item.name}
                      </h3>
                      {item.year && (
                        <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                          {item.year}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {item.desc}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-violet-600 dark:text-violet-400">
                      Visit
                      <svg
                        className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
