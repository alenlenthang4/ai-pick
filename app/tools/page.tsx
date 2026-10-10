import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Directory: Compare Video and Voice Tools | AI Pick",
  description:
    "Browse AI Pick's practical guides to AI video generators and voice tools. Compare use cases, free-plan limits, strengths and alternatives before choosing.",
};

const tools = [
  {
    name: "Fliki",
    category: "AI video generator",
    description:
      "Turn scripts and ideas into narrated videos with AI voices, visuals and captions. Useful for creators who want a more all-in-one workflow.",
    href: "/tools/fliki",
    label: "Read Fliki guide →",
  },
  {
    name: "ElevenLabs",
    category: "AI voice and audio",
    description:
      "Explore expressive AI voiceovers, speech tools and audio workflows. Useful when narration quality matters most.",
    href: "/tools/elevenlabs",
    label: "Read ElevenLabs guide →",
  },
];

export default function ToolsDirectoryPage() {
  return (
    <main>
      <nav className="nav">
        <div className="wrap navInner">
          <a className="brand" href="/">AI <span>Pick</span></a>
          <div className="navLinks">
            <a href="/">Home</a>
            <a href="/tools">Tools</a>
            <a href="/#categories">Categories</a>
            <a href="/#finder">Finder</a>
          </div>
        </div>
      </nav>

      <section className="hero toolHero">
        <div className="wrap heroInner">
          <div className="eyebrow">AI PICK DIRECTORY</div>
          <h1>Explore AI tools for your next project.</h1>
          <p className="heroText">
            Start with what you want to make. Our practical guides explain what each
            tool does, who it may suit, what to check on free plans and which
            alternatives are worth comparing.
          </p>
          <a className="button" href="/#finder">Find a tool for my task →</a>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">CURRENTLY LISTED</div>
          <h2>Video and voice tools</h2>
          <p className="wideText">
            We are building this directory carefully, starting with tools for
            creators. Availability, features and plan limits can change, so check
            each provider's official information before paying.
          </p>
          <div className="infoGrid">
            {tools.map((tool) => (
              <article className="infoCard" key={tool.name}>
                <div className="kicker">{tool.category}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <a href={tool.href}>{tool.label}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <div className="kicker">CHOOSE BY WORKFLOW</div>
          <h2>Not sure where to start?</h2>
          <p className="wideText">
            If you need a complete video from a script, compare an AI video tool.
            If you already have visuals and mainly need narration, start with an
            AI voice tool. The AI Pick Finder can narrow the options by task and
            free-plan availability.
          </p>
          <a className="button" href="/#finder">Use AI Pick Finder →</a>
          <p className="smallNote">
            AI Pick may earn a commission from qualifying referrals. This does not
            determine our editorial assessments.
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap footerInner">
          <div>
            <a className="brand" href="/">AI <span>Pick</span></a>
            <p>Find the right AI tool for the job.</p>
          </div>
          <div className="footerNote">
            <a href="/about">About</a> ·{" "}
            <a href="/affiliate-disclosure">Affiliate disclosure</a> ·{" "}
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
