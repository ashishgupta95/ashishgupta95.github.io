import { ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";

const work = [
  { org: "Tricentis", area: "Test intelligence", title: "A shared view of nightly regression health", body: "Built a GitHub Actions reporting pipeline and GitHub Pages dashboard that turns large regression runs into useful failure reports for developers and testers.", metric: "1,396+ runs", note: "Daily triage platform adopted by 19 engineering teams.", tags: ["GitHub Actions", "TypeScript", "GitHub Pages"] },
  { org: "Tricentis", area: "Data quality", title: "Reliable comparisons at 100+ GB scale", body: "Maintained and improved Tosca DI's row-by-row comparison engine across SQL databases, Apache Hive, CSV, Excel, Parquet, and Avro.", metric: "100+ GB", note: "Production work across .NET 8, Rust, and heterogeneous data.", tags: [".NET 8", "Rust", "SQL", "Parquet", "Avro"] },
  { org: "IAEA via e-Zest", area: "Mission-critical software", title: "Better reporting for nuclear safeguards inspectors", body: "Delivered core features for SAFIRE, strengthening quality-control workflows in a reporting application used by international inspectors.", metric: "25% fewer errors", note: "Delivered 10+ core features using .NET Core, Angular, and SQL Server.", tags: [".NET Core", "Angular", "SQL Server"] },
  { org: "Tricentis", area: "AI product integration", title: "Connecting AI workflows to enterprise test environments", body: "Engineered MCP integrations for schema discovery, natural-language-to-SQL, and automated test-case generation across hybrid-cloud and on-premise environments.", metric: "MCP workflows", note: "Connected product workflows with Azure Service Bus, SignalR, and .NET.", tags: ["MCP", ".NET", "Azure Service Bus", "SignalR"] },
];

const roles = [
  { company: "Tricentis", title: "Senior Software Engineer", dates: "Jun 2024 - Present", place: "Vienna, Austria", note: "Promoted in January 2026", bullets: ["Build enterprise AI integrations, event-driven services, data-quality tooling, and developer workflows for a multi-tenant cloud product.", "Work across .NET 8, TypeScript, Rust, Azure, Kubernetes, and OpenTelemetry."] },
  { company: "International Atomic Energy Agency (via e-Zest)", title: "Senior Software Engineer", dates: "Apr 2023 - May 2024", place: "Vienna, Austria", bullets: ["Enhanced SAFIRE, a mission-critical reporting application for international nuclear inspectors.", "Delivered 10+ core features and helped reduce data-validation errors by 25%."] },
  { company: "LTIMindtree", title: "Module Lead", dates: "Apr 2021 - Apr 2023", place: "Mumbai, India", bullets: ["Built a .NET and Angular remote-worker assessment platform for Deloitte, supporting regulatory workflows across 15+ jurisdictions.", "Led full-stack delivery focused on application security, performance, and service boundaries."] },
  { company: "GEP Worldwide", title: "Senior Software Engineer", dates: "Sep 2019 - Apr 2021", place: "Mumbai, India", note: "Promoted within 12 months", bullets: ["Integrated Azure Maps into a global logistics control tower, reducing shipment-status queries by 25%.", "Created reusable dashboard components for Control Tower and Demand Planning products."] },
  { company: "TSS Consultancy", title: "Junior Software Engineer", dates: "Apr 2018 - Sep 2019", place: "Mumbai, India", bullets: ["Built banking security modules using digital certificates and public-key cryptography across Java and .NET.", "Developed a CRM application to consolidate customer data."] },
  { company: "AUM Insurance Brokers", title: "Software Engineer", dates: "Jun 2017 - Apr 2018", place: "Mumbai, India", bullets: ["Developed TakeAPolicy.com, a public insurance portal for policy comparison and online transactions, integrating vendor APIs."] },
];

const skills = [
  ["Backend & distributed systems", "C# / .NET", "Microservices", "REST APIs", "gRPC", "Azure Service Bus", "SignalR"],
  ["Data & performance", "SQL Server", "MongoDB", "Parquet", "Apache Hive", "Rust", "OpenTelemetry"],
  ["Product engineering", "TypeScript", "React", "Angular", "Monaco Editor", "Electron", "MUI"],
  ["Cloud & delivery", "Azure", "Kubernetes", "Helm", "Azure DevOps", "GitHub Actions", "Docker"],
  ["AI integrations", "Model Context Protocol", "LLM workflows", "Schema discovery", "Natural-language-to-SQL"],
];

export default function PortfolioPage() {
  return <main id="top" className="portfolio">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><div className="shell header-inner">
      <a className="brand" href="#top" aria-label="Ashish Gupta, home"><span className="brand-mark">AG</span><span className="brand-copy"><strong>Ashish Gupta</strong><small>Senior Software Engineer</small></span></a>
      <nav className="primary-nav" aria-label="Main navigation"><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#expertise">Expertise</a></nav>
      <a className="header-link" href="/AshishGupta_CV.pdf" download>Résumé <ArrowUpRight size={16} aria-hidden="true" /></a>
    </div></header>
    <div id="main-content">
      <section className="shell hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> SENIOR SOFTWARE ENGINEER <span className="slash">/</span> VIENNA, AUSTRIA</p>
          <h1>Building reliable software for <em>complex work.</em></h1>
          <p className="hero-intro">I&apos;m Ashish. For 9+ years, I&apos;ve built data-intensive products, developer tools, and distributed systems across enterprise software, supply chain, and energy.</p>
          <p className="current-role"><span>Currently</span> Senior Software Engineer at Tricentis</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore selected work <ArrowRight size={17} aria-hidden="true" /></a><a className="button button-quiet" href="/AshishGupta_CV.pdf" download><Download size={16} aria-hidden="true" /> Download résumé</a></div>
          <div className="social-links"><a href="https://www.linkedin.com/in/ashish-gupta-6aa499117/" target="_blank" rel="noreferrer"><span className="social-mark">in</span> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a><a href="https://github.com/ashishgupta95" target="_blank" rel="noreferrer"><span className="social-mark">GH</span> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a></div>
        </div>
        <aside className="profile-card" aria-label="Professional focus">
          <div className="profile-top"><span>AT A GLANCE</span><span className="profile-monogram">AG</span></div>
          <p className="profile-title">From difficult data to dependable products.</p>
          <p className="profile-copy">I work at the intersection of backend systems, data quality, and the tools people use every day.</p>
          <div className="focus-list"><div><span>01</span>Distributed systems</div><div><span>02</span>Data-intensive products</div><div><span>03</span>Enterprise AI workflows</div></div>
          <p className="profile-location"><MapPin size={15} aria-hidden="true" /> Vienna, Austria <i>·</i> Europe &amp; India</p>
        </aside>
      </section>
      <section className="proof-band" aria-label="Selected career impact"><div className="shell proof-grid">
        <div><strong>100+ <small>GB</small></strong><span>reconciled per data run</span></div><div><strong>19</strong><span>teams on a shared test dashboard</span></div><div><strong>25<small>%</small></strong><span>fewer validation errors</span></div><div><strong>9<small>+</small></strong><span>years in production engineering</span></div>
      </div></section>
      <section className="section shell" id="work">
        <div className="section-heading"><div><p className="section-kicker">SELECTED WORK</p><h2>Useful outcomes, built with care.</h2></div><p className="section-summary">A few examples of systems and product work I&apos;ve contributed to over the years.</p></div>
        <div className="work-grid">{work.map((item, index) => <article className="work-card" key={item.title}>
          <div className="work-meta"><span>{String(index + 1).padStart(2, "0")} <i>/</i> {item.org}</span><span>{item.area}</span></div><h3>{item.title}</h3><p className="work-body">{item.body}</p>
          <div className="work-result"><strong>{item.metric}</strong><span>{item.note}</span></div><ul className="tags">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </article>)}</div>
      </section>
      <section className="experience-section" id="experience"><div className="shell section">
        <div className="section-heading light-heading"><div><p className="section-kicker">EXPERIENCE</p><h2>A career across teams and domains.</h2></div><p className="section-summary">From insurance and banking to supply chain, nuclear safeguards, and enterprise software.</p></div>
        <div className="timeline">{roles.map((role, index) => <article className="timeline-item" key={role.company}>
          <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div><div className="timeline-content">
            <div className="timeline-head"><div><h3>{role.title}</h3><p>{role.company}</p></div><div className="timeline-meta"><span>{role.dates}</span><span>{role.place}</span></div></div>
            {role.note && <span className="promotion-note">{role.note}</span>}<ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        </article>)}</div>
      </div></section>
      <section className="section shell expertise-section" id="expertise">
        <div className="section-heading"><div><p className="section-kicker">EXPERTISE</p><h2>The tools behind the work.</h2></div><p className="section-summary">A practical mix of backend, frontend, data, cloud, and AI experience from production teams.</p></div>
        <div className="skills-grid">{skills.map(([title, ...items]) => <article className="skill-card" key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        <div className="education"><div><p className="section-kicker">EDUCATION</p><h3>Bachelor of Computer Science</h3></div><p>University of Mumbai <span>2012 - 2016</span></p></div>
      </section>
      <section className="contact-section" id="contact"><div className="shell contact-inner"><div><p className="section-kicker">GET IN TOUCH</p><h2>Let&apos;s talk about the work ahead.</h2><p>For engineering roles, collaboration, or a thoughtful conversation about product engineering.</p></div><div className="contact-actions"><a className="button button-contact" href="mailto:gupta.s.ashish95@gmail.com"><Mail size={17} aria-hidden="true" /> gupta.s.ashish95@gmail.com <ArrowUpRight size={15} aria-hidden="true" /></a><a href="tel:+436608285746">+43 660 828 5746</a></div></div></section>
    </div>
    <footer className="site-footer"><div className="shell footer-inner"><p>© 2026 Ashish Gupta <span>·</span> Vienna, Austria</p><div><a href="/AshishGupta_CV.pdf" download>Résumé <Download size={14} aria-hidden="true" /></a><a href="https://github.com/ashishgupta95" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/ashish-gupta-6aa499117/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a></div></div></footer>
  </main>;
}
