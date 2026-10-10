import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Directory: Compare Video and Voice Tools | AI Pick",
  description:
    "Compare AI video and voice tools by workflow, strengths, limitations and free-plan considerations. Read practical guides before choosing an AI tool.",
};

const tools = [
  {
    name: "Fliki",
    category: "AI video generator",
    description:
      "Turn scripts and ideas into narrated videos with AI voices, visuals and captions. Worth exploring if you want several video-making steps in one workflow.",
    bestFor: "Starting with a script or idea and building a narrated video.",
    href: "/tools/fliki",
    label: "Read the Fliki guide →",
  },
  {
    name: "ElevenLabs",
    category: "AI voice and audio",
    description:
      "Explore expressive AI voiceovers and speech tools. Worth exploring when narration is a key part of your video or audio project.",
    bestFor: "Creating narration or voice audio for a project.",
    href: "/tools/elevenlabs",
    label: "Read the ElevenLabs guide →",
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
          <h1>Find an AI tool that fits your workflow.</h1>
          <p className="heroText">
            The best tool depends on what you need to make, how much work you want
            the tool to do, and what you can spend. Use these practical guides to
            compare workflows, check limitations and make a more informed choice.
          </p>
          <a className="button" href="/#finder">Find a tool for my task →</a>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">START WITH YOUR TASK</div>
          <h2>Video and voice tools</h2>
          <p className="wideText">
            We are building this directory carefully, starting with tools for
            creators. Features, pricing and usage rights can change; check each
            provider’s official information before paying or publishing commercial work.
          </p>
          <div className="infoGrid">
            {tools.map((tool) => (
              <article className="infoCard" key={tool.name}>
                <div className="kicker">{tool.category}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <p><strong>Consider it for:</strong> {tool.bestFor}</p>
                <a href={tool.href}>{tool.label}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <div className="kicker">QUICK COMPARISON</div>
          <h2>Fliki or ElevenLabs?</h2>
          <p className="wideText">
            These tools serve different primary needs, so the right starting point
            depends on which part of your workflow is slowing you down.
          </p>
          <div className="infoGrid">
            <article className="infoCard">
              <h3>Choose Fliki when…</h3>
              <p>You want to turn an idea or script into a narrated video and prefer a workflow that brings multiple video-making steps together.</p>
              <a href="/tools/fliki">Check Fliki’s plan limits and alternatives →</a>
            </article>
            <article className="infoCard">
              <h3>Choose ElevenLabs when…</h3>
              <p>Your main need is voice narration or audio, and you may use a separate editor or video generator for the visuals.</p>
              <a href="/tools/elevenlabs">Check ElevenLabs’ plan limits and alternatives →</a>
            </article>
          </div>
          <p className="smallNote">
            This is a workflow comparison, not a claim that one tool is best for everyone.
            Review current free-plan allowances, commercial-use terms and export restrictions
            on the official provider websites before deciding.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">BEFORE YOU SIGN UP</div>
          <h2>Five things to check before choosing an AI tool</h2>
          <div className="infoGrid">
            <article className="infoCard">
              <h3>1. Free-plan limits</h3>
              <p>Check monthly credits, minutes, export resolution, watermarks and whether unused credits roll over.</p>
            </article>
            <article className="infoCard">
              <h3>2. Commercial rights</h3>
              <p>Confirm whether your plan allows monetized videos, client work and commercial publishing.</p>
            </article>
            <article className="infoCard">
              <h3>3. Real workflow fit</h3>
              <p>Check whether you need script-to-video, voice generation, editing or only one specific feature.</p>
            </article>
            <article className="infoCard">
              <h3>4. Total cost</h3>
              <p>Look beyond the starting price: estimate the credits or minutes you will actually use each month.</p>
            </article>
            <article className="infoCard">
              <h3>5. Your export needs</h3>
              <p>Verify resolution, aspect ratio, download options, captions and any restrictions that matter to your platform.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <div className="kicker">CHOOSE BY WORKFLOW</div>
          <h2>Still unsure where to start?</h2>
          <p className="wideText">
            If you need help making a complete video from a script, start by comparing
            video tools. If you already have visuals and mainly need narration, start
            with voice tools. AI Pick Finder can narrow the options by task and
            free-plan availability.
          </p>
          <a className="button" href="/#finder">Use AI Pick Finder →</a>
          <p className="smallNote">
            AI Pick may earn a commission from qualifying referrals. This does not
            determine our editorial assessments. Read our <a href="/affiliate-disclosure">affiliate disclosure</a>.
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
