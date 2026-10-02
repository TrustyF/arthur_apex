import Image from "next/image";
import {BriefcaseBusiness, GraduationCap, Languages, MapPin} from "lucide-react";
import identity from "../public/identity.json";

const links = [
    {
        label: "Portfolio",
        description: "My art & work",
        href: "https://arthur-sirjacobs.art/",
        icon: "/site_icons/portfolio_favicon.ico",
        color: "#22c55e",
    },
    {
        label: "Arthur's Corner",
        description: "Movie opinions",
        href: "https://review.arthursirjacobs.com/",
        icon: "/site_icons/review_icon.webp",
        color: "#fa4816",
    },
    {
        label: "Houdini Icons",
        description: "Find icons easily",
        href: "https://houdini-icons.dev/",
        icon: "/site_icons/houdini_favicon.ico",
        color: "#ff860d",
    },
];

const socials = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/arthur-sirjacobs/",
        icon: (
            <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com/TrustyF",
        icon: (
            <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        ),
    },
];

// identity.json (public/, also served at /identity.json for other sites to
// fetch) is the single source of truth for this Person entity — see
// review.arthursirjacobs.com's layout.tsx, which fetches it instead of
// duplicating these fields. Wrapped in ProfilePage because Google only treats
// Person as a rich result when it's the mainEntity of a ProfilePage.
const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://arthursirjacobs.com/#profilepage",
    url: identity.url,
    mainEntity: {
        "@type": "Person",
        ...identity,
    },
};

const languageNames = new Intl.DisplayNames(["en"], {type: "language"});

// Pulled from identity.json so the visible bio and the JSON-LD can't drift.
const facts = [
    {label: "Employed at", value: identity.worksFor.name, detail: identity.jobTitle, Icon: BriefcaseBusiness},
    {label: "Education", value: identity.alumniOf.name, detail: "Belgium", Icon: GraduationCap},
    {
        label: "Based in",
        value: `${identity.address.addressLocality}, ${identity.address.addressRegion}`,
        detail: "Canada",
        Icon: MapPin,
    },
    {
        label: "Languages",
        value: identity.knowsLanguage.map((code) => languageNames.of(code)).join(", "),
        Icon: Languages,
    },
];

export default function Home() {
    return (
        <div className="relative flex flex-1 flex-col overflow-hidden bg-black font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <div
                className="pointer-events-none absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl motion-safe:animate-glow-in"/>

            <main className="relative mx-auto flex min-h-svh w-full max-w-sm flex-col items-center gap-9 px-6 py-16">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Image
                        src="/avatar3.webp"
                        alt="Arthur Sirjacobs"
                        width={132}
                        height={132}
                        quality={90}
                        priority
                        className="h-33 w-33 rounded-full object-cover motion-safe:animate-fade-in"
                    />
                    <div className="flex flex-col gap-1.5 motion-safe:animate-fade-in [animation-delay:60ms]">
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
                                <circle cx="10" cy="8" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Vancouver BC, Canada
                        </p>
                    </div>
                </div>

                <div className="flex w-full flex-col gap-3">
                    {links.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            style={
                                {
                                    "--link-color": link.color,
                                    animationDelay: `${120 + i * 40}ms`,
                                } as React.CSSProperties
                            }
                            className="group flex w-full items-center justify-between rounded-2xl motion-safe:animate-fade-in border border-white/[.145] px-5 py-4 transition-colors hover:border-[color:var(--link-color)]/40 hover:bg-[color:var(--link-color)]/[.08]"
                        >
              <span className="flex items-center gap-5 text-left">
                <img
                    src={link.icon}
                    alt=""
                    className="h-8 w-8 shrink-0 object-cover"
                />
                <span className="flex flex-col">
                  <span className="text-base font-medium text-zinc-50">
                    {link.label}
                  </span>
                  <span className="text-sm text-zinc-400">
                    {link.description}
                  </span>
                </span>
              </span>
                            <svg
                                className="h-4 w-4 shrink-0 -translate-x-1 text-[color:var(--link-color)] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M7 4l6 6-6 6"/>
                            </svg>
                        </a>
                    ))}
                </div>

                <footer
                    className="mt-auto flex flex-col items-center gap-5 text-center motion-safe:animate-fade-in [animation-delay:280ms]">
                    <div className="flex items-center gap-3">
                        {socials.map((social) => (
                            <a
                                key={social.href}
                                href={social.href}
                                aria-label={social.label}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[.145] text-zinc-400 transition-colors hover:border-accent/40 hover:text-accent"
                            >
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </footer>
            </main>

            <section
                id="about"
                aria-labelledby="about-heading"
                className="relative mx-auto flex w-full max-w-xl flex-col gap-10 px-6 pt-8 pb-[25svh]"
            >
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h2 id="about-heading"
                            className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                            About
                        </h2>
                        <span className="h-px flex-1 bg-linear-to-r from-white/[.145] to-transparent"/>
                    </div>
                    <p className="text-base leading-relaxed text-zinc-300">
                        I&apos;m Arthur Sirjacobs, a Houdini FX artist at Atomic Cartoons specializing in
                        simulations and procedural setups. I enjoy creating Python tooling and developing pipelines. I
                        studied at Digital Arts &amp; Entertainment in Belgium.
                    </p>
                </div>

                <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {facts.map(({label, value, detail, Icon}) => (
                        <div
                            key={label}
                            className="flex items-start gap-4 py-2"
                        >
                            <span
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[.06] text-accent">
                                <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden/>
                            </span>
                            <div className="flex min-w-0 flex-col gap-0.5">
                                <dt className="text-xs text-zinc-500">{label}</dt>
                                <dd className="text-sm font-medium text-zinc-50">{value}</dd>
                                {detail && <dd className="text-sm text-zinc-400">{detail}</dd>}
                            </div>
                        </div>
                    ))}
                </dl>

                <div className="flex flex-col gap-3">
                    <h3 className="text-xs text-zinc-500">Skills</h3>
                    <ul className="flex flex-wrap gap-2">
                        {identity.knowsAbout.map((skill) => (
                            <li
                                key={skill}
                                className="rounded-full border border-white/[.145] px-3 py-1 text-sm text-zinc-300"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
