import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Cloud, Code2, Command, Cpu, Github, Globe2, Layers3, Menu, Network, Radio, Server, Shield, X } from 'lucide-react'

const projects = [
  { number: '01', icon: Network, type: 'NETWORK ENGINEERING', title: 'Enterprise Network Infrastructure', description: 'A segmented enterprise network designed for secure connectivity, reliable operations, and room to grow.', tags: ['Network design', 'Segmentation', 'Security'], tone: 'blue', mark: '01 / TOPOLOGY' },
  { number: '02', icon: Cloud, type: 'PRIVATE CLOUD · OBSERVABILITY', title: 'Enterprise Private Cloud & Observability Platform', description: 'A self-hosted cloud platform with isolated service tiers, object storage, and a monitoring stack.', tags: ['Docker', 'Nextcloud', 'Prometheus'], tone: 'violet', mark: '02 / PLATFORM' },
  { number: '03', icon: Shield, type: 'AI · NETWORK SECURITY', title: 'AI Network Security Monitoring System', description: 'A security monitoring concept bringing network signals and intelligent analysis together for clearer visibility.', tags: ['Network security', 'Monitoring', 'AI'], tone: 'green', mark: '03 / DETECTION' },
]
const skillGroups = [
  { icon: Network, title: 'Networking', items: ['Enterprise architecture', 'Network segmentation', 'Secure connectivity'] },
  { icon: Cloud, title: 'Cloud & Infrastructure', items: ['Private cloud', 'Linux systems', 'Docker'] },
  { icon: Radio, title: 'Observability', items: ['Prometheus', 'Grafana', 'Service monitoring'] },
  { icon: Shield, title: 'Security & Automation', items: ['Network security', 'AI monitoring concepts', 'DevOps workflows'] },
]
const fade = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: .5 } } }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const copyName = async () => { await navigator.clipboard?.writeText('Vũ Trần'); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
  return <div className="app-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="grid-wash"/>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Vũ Trần home"><span className="brand-mark"><Command size={17}/></span><span>VT<span className="brand-period">.</span></span></a>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {[['About','#about'],['Projects','#projects'],['Capabilities','#capabilities'],['Architecture','#architecture']].map(([label,href])=><a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={14}/></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero page-width">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fade}>
          <div className="eyebrow"><span className="live-dot"/> SYSTEMS THINKING · SECURE BY DESIGN</div>
          <p className="hero-kicker">Infrastructure / Network / Cloud</p>
          <h1>Building the systems<br/>that <span>keep us moving.</span></h1>
          <p className="hero-description">I’m Vũ Trần, an aspiring Infrastructure Engineer focused on secure networks, private cloud, and observable systems.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">Explore projects <ArrowRight size={16}/></a><a className="button-quiet" href="#about">A little about me <ArrowDown size={15}/></a></div>
          <div className="hero-footnote"><span className="mini-line"/> Thoughtful infrastructure. Clear signals. Reliable by design.</div>
        </motion.div>
        <motion.div className="terminal-card glass-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .6 }}>
          <div className="terminal-head"><div className="window-dots"><i/><i/><i/></div><span>system_overview.sh</span><span className="terminal-live"><span/> LIVE</span></div>
          <div className="terminal-body"><div className="terminal-greeting"><span className="prompt">~</span> systemctl status vu-tran</div><div className="terminal-rule"/>
            <div className="terminal-state"><div className="state-label">●&nbsp; INFRASTRUCTURE</div><strong><span/> Building</strong><small>secure foundations</small></div>
            <div className="terminal-state"><div className="state-label">●&nbsp; NETWORK</div><strong><span/> Connected</strong><small>designed with intent</small></div>
            <div className="terminal-state"><div className="state-label">●&nbsp; OBSERVABILITY</div><strong><span/> Monitoring</strong><small>signals over noise</small></div>
            <div className="terminal-rule"/><div className="terminal-bottom"><span>FOCUS</span><span className="focus-tags">CLOUD <b>·</b> DEVOPS <b>·</b> SECURITY</span></div>
          </div>
          <div className="terminal-glow"/>
        </motion.div>
        <div className="hero-index"><span>01</span><i/> PORTFOLIO / 2026</div>
      </section>

      <section className="signal-strip"><div className="page-width signal-inner"><div><span className="signal-icon"><Globe2 size={17}/></span><span>DESIGNING FOR <b>RESILIENCE</b></span></div><div className="signal-separator"/><div><span className="signal-icon"><Layers3 size={17}/></span><span>BUILT AROUND <b>REAL SYSTEMS</b></span></div><div className="signal-separator"/><div><span className="signal-icon"><Cpu size={17}/></span><span>ALWAYS <b>LEARNING</b></span></div><span className="signal-id">VT—SYS.001</span></div></section>

      <section className="section page-width about-section" id="about"><div className="section-label"><span>01</span> / THE APPROACH</div><div className="about-grid"><div><h2>Good infrastructure<br/>should feel <em>invisible.</em></h2></div><div className="about-copy"><p>I’m interested in the foundations behind dependable digital services: how networks connect, how platforms scale, and how teams know when something needs attention.</p><p>My work brings together network design, private cloud, monitoring, and security—always with a focus on clear architecture and practical operations.</p><a className="text-link" href="#capabilities">Explore my capabilities <ArrowRight size={15}/></a></div></div></section>

      <section className="section page-width projects-section" id="projects"><div className="section-heading"><div><div className="section-label"><span>02</span> / SELECTED WORK</div><h2>Systems in focus<span className="cyan-dot">.</span></h2></div><p>Three connected areas of exploration.<br/>Built with purpose, shaped by systems thinking.</p></div>
        <div className="projects-grid">{projects.map((project,i)=>{const Icon=project.icon;return <motion.article className={`project-card glass-card ${project.tone}`} key={project.number} initial="hidden" whileInView="visible" viewport={{once:true,amount:.15}} variants={fade} transition={{delay:i*.08}}><div className="project-top"><span className="project-icon"><Icon size={19}/></span><span className="project-number">{project.number} <ArrowUpRight size={14}/></span></div><div className="project-visual"><div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><div className="visual-core"><Icon size={26}/></div><span className="visual-node node-one"/><span className="visual-node node-two"/><span className="visual-node node-three"/><span className="visual-caption">{project.mark}</span></div><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="project-link" href="#architecture">Architecture overview <ArrowRight size={15}/></a></motion.article>})}</div>
        <p className="project-note"><span className="live-dot"/> Concept and portfolio descriptions reflect the available project scope.</p>
      </section>

      <section className="section page-width capabilities-section" id="capabilities"><div className="section-heading"><div><div className="section-label"><span>03</span> / CAPABILITIES</div><h2>My working toolkit<span className="cyan-dot">.</span></h2></div><p>A broad foundation across the layers<br/>that make services dependable.</p></div><div className="skills-grid">{skillGroups.map((group,i)=>{const Icon=group.icon;return <motion.div className="skill-card glass-card" key={group.title} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fade} transition={{delay:i*.06}}><div className="skill-head"><span><Icon size={18}/></span><b>0{i+1}</b></div><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}><Check size={13}/>{item}</li>)}</ul></motion.div>})}</div></section>

      <section className="section architecture-section" id="architecture"><div className="page-width"><div className="section-heading"><div><div className="section-label"><span>04</span> / PLATFORM MAP</div><h2>Connected by design<span className="cyan-dot">.</span></h2></div><p>A layered view of the private cloud platform,<br/>from the edge to observability.</p></div>
        <div className="architecture-panel glass-card"><div className="arch-label"><span>REFERENCE ARCHITECTURE</span><span><span className="live-dot"/> SERVICE FLOW</span></div><div className="arch-flow"><div className="arch-node user-node"><Globe2/><b>Users</b><small>ACCESS</small></div><div className="flow-line"><span/></div><div className="arch-node proxy-node"><Server/><b>Nginx</b><small>REVERSE PROXY</small></div><div className="flow-line"><span/></div><div className="arch-zone"><div className="zone-title">APPLICATION LAYER <small>172.20.10.0/24</small></div><div className="zone-nodes"><div className="arch-node"><Layers3/><b>Nextcloud</b><small>FRONTEND</small></div><div className="arch-node"><Code2/><b>Services</b><small>BACKEND</small></div></div></div><div className="flow-line"><span/></div><div className="arch-zone data-zone"><div className="zone-title">DATA & OBSERVABILITY <small>ISOLATED SERVICES</small></div><div className="zone-nodes"><div className="arch-node"><Server/><b>MariaDB · Redis</b><small>DATA SERVICES</small></div><div className="arch-node"><Cloud/><b>MinIO</b><small>OBJECT STORAGE</small></div><div className="arch-node"><Radio/><b>Prometheus · Grafana</b><small>MONITORING</small></div></div></div></div><div className="arch-legend"><span><i className="legend-blue"/> TRAFFIC FLOW</span><span><i className="legend-violet"/> APPLICATION</span><span><i className="legend-green"/> DATA & SIGNALS</span></div></div></div></section>

      <section className="contact-section page-width" id="contact"><div className="contact-card glass-card"><div className="contact-orb"/><div className="contact-content"><div className="section-label"><span>05</span> / OPEN CHANNEL</div><h2>Let’s build something<br/><em>reliable.</em></h2><p>Interested in infrastructure, cloud, or network engineering? I’d be glad to connect.</p><button className="button-primary copy-button" onClick={copyName}>{copied ? <><Check size={16}/> Name copied</> : <>Copy my name <ArrowRight size={16}/></>}</button><span className="contact-hint">Use “Vũ Trần” to find me on your preferred channel.</span></div><div className="contact-decoration"><div className="contact-ring ring-one"/><div className="contact-ring ring-two"/><div className="contact-ring ring-three"/><span>VT<span>.</span></span></div></div></section>
    </main>
    <footer className="footer page-width"><a className="brand" href="#top"><span className="brand-mark"><Command size={16}/></span><span>VT<span className="brand-period">.</span></span></a><span>Thoughtfully built. Continuously learning.</span><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={13}/></a><small>© 2026 VŨ TRẦN</small></footer>
  </div>
}

export default App
