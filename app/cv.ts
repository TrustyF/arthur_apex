// Condensed from https://arthur-sirjacobs.art/cv (source: the Personal_portfolio
// repo's src/components/cv/* and src/project_pages/index.json). That site
// renders client-side, so repeating the essentials here as static HTML is what
// lets search engines read them. Credit slugs match the portfolio's project URLs.

export const portfolioUrl = "https://arthur-sirjacobs.art/";

function credit(title: string, type: string, slug: string) {
    return {title, type, href: `${portfolioUrl}portfolio/${slug}`};
}

export const experience = [
    {
        role: "Senior FX Artist",
        company: "Atomic Cartoons",
        logo: "/logos/atomic.webp",
        companyUrl: "https://www.linkedin.com/company/atomiccartoons/",
        period: "2024 – Now",
        credits: [
            credit("LEGO Star Wars: Pieces of the Past", "TV show", "pieces_of_the_past"),
            credit("LEGO Avengers Strange Tails", "TV show", "strange_tails"),
            credit("LEGO Marvel Avengers Shorts", "Short", "lego_marvel_avengers_shorts"),
            credit("LEGO Star Wars Shorts", "Short", "lego_star_wars_shorts"),
        ],
    },
    {
        role: "3D Generalist",
        company: "Dgenz",
        logo: "/logos/dgenz.webp",
        companyUrl: "https://www.linkedin.com/company/dgenz/",
        period: "2024",
        credits: [credit("Hilfiger", "Commercial", "tommy_clothes"), credit("Clarins", "Commercial", "clarins_masc")],
    },
    {
        role: "FX Artist",
        company: "UFX Studios",
        logo: "/logos/ufx.webp",
        companyUrl: "https://www.linkedin.com/company/umedia-vfx",
        period: "2022 – 2024",
        credits: [
            credit("The Abyss", "Film", "abyss"),
            credit("Die Zweite Welle", "TV show", "zweite_welle"),
            credit("Novembre", "Film", "novembre"),
            credit("Theodosia", "TV show", "theodosia"),
        ],
    },
];

export const education = {
    school: "Digital Arts & Entertainment",
    logo: "/logos/dae.webp",
    url: "https://www.digitalartsandentertainment.be/",
    degree: "Bachelor's degree, 3D & VFX",
    period: "2018 – 2022",
};

// Icons copied from the portfolio's public/assets/software_icons.
function skill(name: string, icon: string) {
    return {name, icon: `/software/${icon}.webp`};
}

export const skills = {
    specialized: [
        skill("Houdini", "houdini"),
        skill("Python", "python"),
        skill("After Effects", "after_effects"),
        skill("Photoshop", "photoshop"),
    ],
    other: [
        skill("Blender", "blender"),
        skill("Maya", "maya"),
        skill("Nuke", "nuke"),
        skill("ZBrush", "zbrush"),
        skill("SynthEyes", "syntheyes"),
        skill("Marvelous Designer", "marvelous"),
        skill("Gaffer", "gaffer"),
        skill("Cinema 4D", "cinema_4D"),
        skill("Git", "git"),
    ],
};

export const languages = "French and Dutch (native), English";

export const recommendation = {
    name: "Damien Fransolet",
    title: "Houdini FX Artist – FX TD",
    quote:
        "Arthur was one of the best junior VFX artists I have had the opportunity to work with. His Houdini skills and autonomy proved to be as useful as they were appreciated.",
};
