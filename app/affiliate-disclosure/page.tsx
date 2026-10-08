import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | AI Pick",
  description: "How AI Pick handles affiliate links and compensation.",
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
        <h1>Affiliate Disclosure</h1>
        <p>Some links on AI Pick are affiliate links. If you sign up or make a qualifying purchase through one of these links, AI Pick may receive compensation at no additional cost to you.

Affiliate relationships do not determine whether a tool is included or how it is described. We aim to explain useful strengths, limitations, pricing considerations and alternatives so readers can make informed decisions.

Affiliate availability can change. Always check the linked provider's current pricing, terms and commercial-use rules before purchasing.</p>
      </div></section>
      <footer><div className="wrap footerInner"><div><div className="brand">AI <span>Pick</span></div><p>Find the right AI tool for the job.</p></div><div className="footerNote"><a href="/affiliate-disclosure">Affiliate Disclosure</a> · <a href="/privacy">Privacy</a></div></div></footer>
    </main>
  );
}
