import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Pick",
  description: "A simple privacy notice for AI Pick.",
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
        <h1>Privacy Policy</h1>
        <p>AI Pick is an early-stage website. We aim to collect as little personal information as practical.

If you contact us directly, we may receive the information you choose to provide. Third-party services, hosting providers, analytics tools or affiliate platforms may process technical or referral information according to their own policies.

Affiliate links may use tracking cookies or similar technology to attribute referrals. You can manage cookies through your browser settings.

This page is general information, not legal advice. The policy should be expanded if AI Pick later adds analytics, accounts, forms, newsletters or other data-collecting features.</p>
      </div></section>
      <footer><div className="wrap footerInner"><div><div className="brand">AI <span>Pick</span></div><p>Find the right AI tool for the job.</p></div><div className="footerNote"><a href="/affiliate-disclosure">Affiliate Disclosure</a> · <a href="/privacy">Privacy</a></div></div></footer>
    </main>
  );
}
