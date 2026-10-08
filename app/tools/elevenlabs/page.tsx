export const metadata = {
  title: "ElevenLabs AI Voice Generator: Features, Voices & Review | AI Pick",
  description:
    "A practical guide to ElevenLabs for AI voiceovers, voice cloning, speech-to-text and conversational voice applications.",
};

const elevenLabsUrl = "https://try.elevenlabs.io/o4n1tq0cjr1b";

export default function ElevenLabsPage() {
  return (
    <main>
      <nav className="nav"><div className="wrap navInner">
        <a className="brand" href="/">AI <span>Pick</span></a>
        <div className="navLinks"><a href="/">Home</a><a href="/#categories">Categories</a><a href="/#tools">Tools</a></div>
      </div></nav>

      <section className="hero toolHero"><div className="wrap heroInner">
        <div className="eyebrow">AI VOICE TOOL</div>
        <h1>ElevenLabs: lifelike AI voices for creators and developers.</h1>
        <p className="heroText">
          ElevenLabs provides AI voice infrastructure for text-to-speech, voice creation and cloning,
          speech-to-text, conversational agents and generative audio.
        </p>
        <a className="button" href={elevenLabsUrl} target="_blank" rel="noreferrer">Try ElevenLabs →</a>
        <p className="smallNote">
          Affiliate disclosure: AI Pick is an independent affiliate of ElevenLabs and may receive compensation
          for qualifying referrals.
        </p>
      </div></section>

      <section className="section"><div className="wrap">
        <div className="kicker">AT A GLANCE</div><h2>What ElevenLabs does</h2>
        <div className="infoGrid">
          <div className="infoCard"><b>Text to speech</b><p>Turn written scripts into natural-sounding spoken audio with control over voice and delivery.</p></div>
          <div className="infoCard"><b>Voice creation</b><p>Choose from a large voice library, create voices from prompts, or use voice cloning tools.</p></div>
          <div className="infoCard"><b>Speech to text</b><p>Transcribe audio with speaker labels, timestamps and multilingual support.</p></div>
          <div className="infoCard"><b>Voice AI</b><p>Build conversational voice experiences with ElevenAgents and integrate capabilities through APIs.</p></div>
        </div>
      </div></section>

      <section className="section soft"><div className="wrap twoCol">
        <div>
          <div className="kicker">WHY CREATORS USE IT</div>
          <h2>Strong fit for voice-heavy content.</h2>
          <p>
            ElevenLabs is especially useful when the voice itself matters: YouTube narration, Shorts,
            audiobooks, dubbing, localization, character voices and other audio-first projects.
          </p>
          <p>
            Its current text-to-speech lineup includes expressive models for high-quality speech as well as
            lower-latency models for realtime applications.
          </p>
        </div>
        <div className="factList">
          <div><span>Voice library</span><strong>10,000+ voices</strong></div>
          <div><span>Voice creation</span><strong>Cloning + Voice Design</strong></div>
          <div><span>Languages</span><strong>90+ on Eleven v4</strong></div>
          <div><span>Free tier</span><strong>Available</strong></div>
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <div className="kicker">BEST USE CASES</div>
        <h2>Where ElevenLabs makes the most sense</h2>
        <div className="prosGrid">
          <div><h3>Great for</h3><ul>
            <li>YouTube narration and Shorts</li>
            <li>Voiceovers for videos and ads</li>
            <li>Audiobooks and long-form narration</li>
            <li>Dubbing and localization</li>
            <li>Voice characters and interactive experiences</li>
            <li>Developers building voice features with APIs</li>
          </ul></div>
          <div><h3>Keep in mind</h3><ul>
            <li>Commercial usage depends on the plan and applicable terms</li>
            <li>Usage limits and pricing vary by plan and model</li>
            <li>Voice cloning should only be used with appropriate rights and permission</li>
            <li>API and advanced voice features are designed for different workflows</li>
          </ul></div>
        </div>
      </div></section>

      <section className="section soft"><div className="wrap">
        <div className="kicker">AI PICK VERDICT</div>
        <h2>A strong choice when natural voice quality is the priority.</h2>
        <p className="wideText">
          For creators, ElevenLabs stands out when you need convincing narration, expressive voices or
          repeatable voice workflows. It is also much broader than a simple text-to-speech website, with
          speech-to-text, Studio, conversational agents and developer APIs.
        </p>
        <a className="button" href={elevenLabsUrl} target="_blank" rel="noreferrer">Try ElevenLabs →</a>
        <p className="smallNote">Affiliate disclosure: AI Pick may receive compensation from qualifying referrals.</p>
      </div></section>

      <section className="section"><div className="wrap">
        <div className="kicker">FAQ</div><h2>Common questions</h2>
        <div className="faq">
          <details><summary>Is ElevenLabs free?</summary><p>Yes. ElevenLabs automatically assigns new users to a free tier. Paid plans add higher usage and additional capabilities.</p></details>
          <details><summary>Can ElevenLabs clone a voice?</summary><p>Yes. ElevenLabs supports Instant Voice Cloning and Professional Voice Cloning, as well as generated voices through Voice Design.</p></details>
          <details><summary>Can I use ElevenLabs for YouTube?</summary><p>Yes. Its text-to-speech tools can be used to create narration and other audio for video workflows. Check the applicable plan terms for commercial use.</p></details>
          <details><summary>Does ElevenLabs support speech-to-text?</summary><p>Yes. ElevenLabs offers Speech to Text, including Scribe models and features such as speaker labels and word-level timestamps.</p></details>
        </div>
      </div></section>

      <section className="section sourceSection"><div className="wrap">
        <div className="kicker">SOURCES</div>
        <p>Facts on this page are based primarily on ElevenLabs' official documentation, product pages and affiliate terms.</p>
        <div className="sourceLinks">
          <a href="https://elevenlabs.io/text-to-speech" target="_blank" rel="noreferrer">Text to Speech</a>
          <a href="https://elevenlabs.io/docs/overview/capabilities/voices" target="_blank" rel="noreferrer">Voice documentation</a>
          <a href="https://elevenlabs.io/speech-to-text" target="_blank" rel="noreferrer">Speech to Text</a>
          <a href="https://elevenlabs.io/affiliates-terms" target="_blank" rel="noreferrer">Affiliate terms</a>
        </div>
      </div></section>

      <footer><div className="wrap footerInner">
        <div><div className="brand">AI <span>Pick</span></div><p>Find the right AI tool for the job.</p></div>
        <div className="footerNote">Independent AI tool discovery and comparison.</div>
      </div></footer>
    </main>
  );
}