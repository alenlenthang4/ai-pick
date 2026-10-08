const categories = [
  ["🎬", "Video", "AI video generators, editors and creators"],
  ["✍️", "Writing", "Writing, rewriting and content tools"],
  ["🖼️", "Image", "Image generation, editing and design"],
  ["🎙️", "Audio", "Voice, music and audio tools"],
  ["💻", "Coding", "Coding assistants and developer tools"],
  ["🔎", "Research", "Research, search and knowledge tools"],
];

const tools = [
  { name: "Fliki", type: "AI Video", desc: "Turn ideas, scripts and blog posts into videos with AI voices.", tag: "Video", href: "/tools/fliki" },
  { name: "InVideo", type: "AI Video", desc: "Create videos from text prompts, scripts and ideas.", tag: "Video", href: "#how" },
  { name: "ElevenLabs", type: "AI Voice", desc: "Generate natural-sounding AI speech and voice content.", tag: "Audio", href: "#how" },
  { name: "Pictory", type: "AI Video", desc: "Create and edit videos from scripts, text and existing content.", tag: "Video", href: "#how" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav"><div className="wrap navInner"><a className="brand" href="/">AI <span>Pick</span></a><div className="navLinks"><a href="#tools">Tools</a><a href="#categories">Categories</a><a href="#how">How it works</a></div></div></nav>
      <section className="hero"><div className="wrap heroInner"><div className="eyebrow">AI TOOL DISCOVERY, MADE SIMPLE</div><h1>Find the right <span>AI tool</span> for the job.</h1><p className="heroText">Search, compare and discover useful AI tools without digging through endless lists.</p><div className="search"><span>⌕</span><input aria-label="Search AI tools" placeholder="What do you want to do? Try “make a YouTube video”" /><button>Search</button></div><div className="popular">Popular: <a href="#tools">AI video</a><a href="#tools">AI writing</a><a href="#tools">AI image</a><a href="#tools">AI voice</a></div></div></section>
      <section className="section" id="categories"><div className="wrap"><div className="sectionHead"><div><div className="kicker">EXPLORE</div><h2>Find tools by what you need.</h2></div><a className="textLink" href="#tools">View all tools →</a></div><div className="categoryGrid">{categories.map(([icon,name,desc]) => <a className="category" href="#tools" key={name}><div className="icon">{icon}</div><h3>{name}</h3><p>{desc}</p></a>)}</div></div></section>
      <section className="section soft" id="tools"><div className="wrap"><div className="sectionHead"><div><div className="kicker">POPULAR TOOLS</div><h2>Useful tools, clearly explained.</h2></div><a className="textLink" href="#tools">Browse more →</a></div><div className="toolGrid">{tools.map((tool) => <article className="toolCard" key={tool.name}><div className="toolTop"><div className="toolLogo">{tool.name[0]}</div><span className="pill">{tool.tag}</span></div><h3>{tool.name}</h3><div className="toolType">{tool.type}</div><p>{tool.desc}</p><a className="cardLink" href={tool.href}>Explore tool →</a></article>)}</div></div></section>
      <section className="section" id="how"><div className="wrap"><div className="finder"><div><div className="kicker">AI PICK FINDER</div><h2>Tell us what you want to make.</h2><p>Describe your task, budget and preferred output. AI Pick will help narrow the choices down to tools that fit.</p></div><a className="button" href="#categories">Explore categories →</a></div><div className="steps"><div><b>01</b><h3>Describe your task</h3><p>Start with what you actually want to accomplish.</p></div><div><b>02</b><h3>Compare your options</h3><p>See features, free plans, limitations and alternatives.</p></div><div><b>03</b><h3>Pick with confidence</h3><p>Make a decision based on your needs, not hype.</p></div></div></div></section>
      <section className="india"><div className="wrap"><div className="indiaBox"><div><div className="kicker">BUILT FOR REAL-WORLD USE</div><h2>Looking for affordable AI tools in India?</h2><p>We’re building practical guides for creators, freelancers and small businesses, including free plans, pricing and tools that work well for Indian users.</p></div><a className="button light" href="#tools">Explore AI tools →</a></div></div></section>
      <footer><div className="wrap footerInner"><div><div className="brand">AI <span>Pick</span></div><p>Find the right AI tool for the job.</p></div><div className="footerNote">Independent AI tool discovery and comparison.</div></div></footer>
    </main>
  );
}