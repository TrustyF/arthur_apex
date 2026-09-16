import Image from "next/image";

const links = [
  {
    label: "Arthur's Corner",
    description: "Movie opinions",
    href: "https://review.arthursirjacobs.com/",
  },
  {
    label: "Portfolio",
    description: "My art & work",
    href: "https://arthur-sirjacobs.art/",
  },
  {
    label: "Houdini Icons",
    description: "Tools for Houdini",
    href: "https://houdini-icons.dev/",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center overflow-hidden bg-black font-sans">
      <div className="pointer-events-none absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />

      <main className="relative flex w-full max-w-sm flex-col items-center gap-9 px-6 py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/avatar.jpg"
            alt="Arthur Sirjacobs"
            width={132}
            height={132}
            quality={90}
            priority
            className="h-33 w-33 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-xl font-semibold tracking-tight text-zinc-50">
                Arthur Sirjacobs
              </h1>
              <p className="text-sm text-zinc-400">
                Houdini FX Artist
              </p>
            </div>
            <p className="flex items-center justify-center gap-1 text-sm text-zinc-500">
              <svg
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 18s6-5.686 6-10a6 6 0 1 0-12 0c0 4.314 6 10 6 10Z"
                />
                <circle cx="10" cy="8" r="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Vancouver BC, Canada
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex w-full items-center justify-between rounded-2xl border border-white/[.145] px-5 py-4 transition-colors hover:border-accent/40 hover:bg-accent/[.08]"
            >
              <span className="flex flex-col text-left">
                <span className="text-base font-medium text-zinc-50">
                  {link.label}
                </span>
                <span className="text-sm text-zinc-400">
                  {link.description}
                </span>
              </span>
              <svg
                className="h-4 w-4 shrink-0 -translate-x-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 4l6 6-6 6" />
              </svg>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
