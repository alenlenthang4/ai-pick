"use client";

import { useMemo, useState } from "react";

const categories = [
  ["🎬", "Video", "AI video generators, editors and creators"],
  ["✍️", "Writing", "Writing, rewriting and content tools"],
  ["🖼️", "Image", "Image generation, editing and design"],
  ["🎙️", "Audio", "Voice, music and audio tools"],
  ["💻", "Coding", "Coding assistants and developer tools"],
  ["🔎", "Research", "Research, search and knowledge tools"],
];

const tools = [
  { name: "Fliki", type: "AI Video", desc: "Turn ideas, scripts and blog posts into videos with AI voices.", tag: "Video", href: "/tools/fliki", task: "video", free: true, uses: ["youtube", "shorts", "social"] },
  { name: "InVideo", type: "AI Video", desc: "Create videos from text prompts, scripts and ideas.", tag: "Video", href: "https://invideo.io/", task: "video", free: false, uses: ["youtube", "shorts", "social"] },
  { name: "ElevenLabs", type: "AI Voice", desc: "Generate natural-sounding AI speech and voice content.", tag: "Audio", href: "/tools/elevenlabs", task: "voice", free: true, uses: ["youtube", "shorts", "audio"] },
  { name: "Pictory", type: "AI Video", desc: "Create and edit videos from scripts, text and existing content.", tag: "Video", href: "https://pictory.ai/", task: "video", free: false, uses: ["youtube", "social"] },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [finderTask, setFinderTask] = useState("video");
  const [finderBudget, setFinderBudget] = useState("free");
  const [finderUse, setFinderUse] = useState("youtube");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tools;
    return tools.filter((tool) => `${tool.name} ${tool.type} ${tool.desc} ${tool.tag}`.toLowerCase().includes(q));
  }, [query]);

  const recommendations = tools.filter((tool) =>
    (finderTask === "any" || tool.task === finderTask) &&
    (finderBudget === "any" || tool.free) &&
    tool.uses.includes(finderUse)
  );

  return (
    <main>
      <nav className="nav"><div className="wrap navInner"><a className="brand" href="/">AI <span>Pick</span></a><div className="navLinks"><a href="#tools">Tools</a><a href="#categories">Categories</a><a href="#how">How it works</a></div></div></nav>
      <section className="hero"><div className="wrap heroInner"><div className="eyebrow">AI TOOL DISCOVERY, MADE SIMPLE</div><h1>Find the right <span>AI tool</span> for the job.</h1><p className="heroText">Search, compare and discover useful AI tools without digging through endless lists.</p><div className="search"><span>⌕</span><input aria-label="Search AI tools" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="What do you want to do? Try “make a YouTube video”" /><button type="button" onClick={() => document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" })}>Search</button></div><div className="popular">Popular: <a href="#tools">AI video</a><a href="#tools">AI writing</a><a href="#tools">AI image</a><a href="#tools">AI voice</a></div></div></section>
      <section className="section" id="categories"><div className="wrap"><div className="sectionHead"><div><div className="kicker">EXPLORE</div><h2>Find tools by what you need.</h2></div><a className="textLink" href="#tools">View all tools →</a></div><div className="categoryGrid">{categories.map(([icon,name,desc]) => <a className="category" href="#tools" key={name}><div className="icon">{icon}</div><h3>{name}</h3><p>{desc}</p></a>)}</div></div></section>
      <section className="section soft" id="tools"><div className="wrap"><div className="sectionHead"><div><div className="kicker">POPULAR TOOLS</div><h2>Useful tools, clearly explained.</h2></div><a className="textLink" href="#tools">Browse more →</a></div><div className="toolGrid">{filteredTools.map((tool) => <article className="toolCard" key={tool.name}><div className="toolTop"><div className="toolLogo">{tool.name[0]}</div><span className="pill">{tool.tag}</span></div><h3>{tool.name}</h3><div className="toolType">{tool.type}</div><p>{tool.desc}</p><a className="cardLink" href={tool.href} target={tool.href.startsWith("http") ? "_blank" : undefined} rel={tool.href.startsWith("http") ? "noopener noreferrer" : undefined}>Explore tool →</a></article>)}</div>{query && filteredTools.length === 0 && <p className="emptySearch">No matching tools yet. Try a broader search.</p>}</div></section>
      <section className="section" id="how"><div className="wrap"><div className="finder"><div><div className="kicker">AI PICK FINDER</div><h2>Find a tool for your next project.</h2><p>Choose your task, budget and content type. We’ll match your answers to tools currently listed on AI Pick.</p></div></div>
        <div className="finderControls">
          <label className="finderField">What do you need?<select value={finderTask} onChange={(e) => { setFinderTask(e.target.value); setShowRecommendations(false); }}><option value="video">Create a video</option><option value="voice">Generate a voiceover</option><option value="any">Show me any tool</option></select></label>
          <label className="finderField">What’s your budget?<select value={finderBudget} onChange={(e) => { setFinderBudget(e.target.value); setShowRecommendations(false); }}><option value="free">Free plan available</option><option value="any">Any budget</option></select></label>
          <label className="finderField">What are you making?<select value={finderUse} onChange={(e) => { setFinderUse(e.target.value); setShowRecommendations(false); }}><option value="youtube">YouTube videos</option><option value="shorts">YouTube Shorts / Reels</option><option value="social">Social media videos</option><option value="audio">Audio or narration</option></select></label>
          <button className="button finderSubmit" type="button" onClick={() => setShowRecommendations(true)}>Find my tools →</button>
        </div>
        {showRecommendations && <div className="finderResults" aria-live="polite"><h3>Your matches</h3>{recommendations.length ? <div className="toolGrid">{recommendations.map((tool) => <article className="toolCard" key={tool.name}><div className="toolTop"><div className="toolLogo">{tool.name[0]}</div><span className="pill">{tool.free ? "Free plan" : "Check pricing"}</span></div><h3>{tool.name}</h3><p>{tool.desc}</p><a className="cardLink" href={tool.href} target={tool.href.startsWith("http") ? "_blank" : undefined} rel={tool.href.startsWith("http") ? "noopener noreferrer" : undefined}>{tool.href.startsWith("/") ? "Read AI Pick guide →" : "Visit official website →"}</a></article>)}</div> : <p>No listed tools match all those choices yet. Try “Any budget” or another content type.</p>}<p className="smallNote">Recommendations use the current AI Pick directory, not live pricing data. Check each provider’s latest plan details before choosing.</p></div>}
        <div className="steps"><div><b>01</b><h3>Describe your task</h3><p>Start with what you actually want to accomplish.</p></div><div><b>02</b><h3>Compare your options</h3><p>Review features, plan limits and alternatives.</p></div><div><b>03</b><h3>Pick with confidence</h3><p>Choose based on your needs, not hype.</p></div></div></div></section>
      <section className="india"><div className="wrap"><div className="indiaBox"><div><div className="kicker">BUILT FOR REAL-WORLD USE</div><h2>Looking for affordable AI tools in India?</h2><p>We’re building practical guides for creators, freelancers and small businesses, including free plans, pricing and tools that work well for Indian users.</p></div><a className="button light" href="#tools">Explore AI tools →</a></div></div></section>
      <footer><div className="wrap footerInner"><div><div className="brand">AI <span>Pick</span></div><p>Find the right AI tool for the job.</p></div><div className="footerNote">Independent AI tool discovery and comparison.</div></div></footer>
    </main>
  );
}