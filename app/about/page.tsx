import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AI Pick | AI Pick",
  description: "Learn what AI Pick does, who it is for, and how tools are evaluated.",
};

export default function Page() {
  return (
    <main>
      <nav className="nav"><div className="wrap navInner">
        <a className="brand" href="/">AI <span>Pick</span></a>
        <div className="navLinks"><a href="/#tools">Tools</a><a href="/#categories">Categories</a><a href="/about">About</a></div>
      </div></nav>
      <section className="section"><div className="wrap legalPage">
        <div className="kicker">AI PICK</div>
        <h1>About AI Pick</h1>
        <p>AI Pick is an independent AI tool discovery website for creators, freelancers and small businesses.

We focus on practical information: what a tool does, who it is for, free-plan limits, important limitations, alternatives and useful comparisons.

Our goal is simple: help you choose an AI tool based on your actual job, budget and workflow—not hype.

AI Pick is currently an early-stage project and the site will grow as more tools are researched and reviewed.</p>
      </div></section>
      <footer><div className="wrap footerInner"><div><div className="brand">AI <span>Pick</span></div><p>Find the right AI tool for the job.</p></div><div className="footerNote"><a href="/affiliate-disclosure">Affiliate Disclosure</a> · <a href="/privacy">Privacy</a></div></div></footer>
    </main>
  );
}
