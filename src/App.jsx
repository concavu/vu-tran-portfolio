import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Cloud, Code2, Command, Cpu, Github, Globe2, GraduationCap, Layers3, MapPin, Menu, Network, Radio, Server, Shield, X } from 'lucide-react'
import profilePhoto from './profilePhoto'

const projects = [
  { number: '01', icon: Network, type: 'CISCO PACKET TRACER · NETWORK', title: 'Enterprise Network Infrastructure', description: 'A hierarchical enterprise topology connecting HQ, a DMZ server farm, and a branch office over a simulated WAN.', tags: ['VLAN · 802.1Q', 'OSPF Area 0', 'LACP · DMZ'], tone: 'blue', mark: '01 / TOPOLOGY' },
  { number: '02', icon: Cloud, type: 'DOCKER · PRIVATE CLOUD', title: 'Enterprise Private Cloud & Observability Platform', description: 'A microsegmented private cloud with a reverse-proxy edge, isolated app and data services, S3 storage, and monitoring.', tags: ['Docker · Nextcloud', 'MariaDB · Redis', 'MinIO · Grafana'], tone: 'violet', mark: '02 / PLATFORM' },
  { number: '03', icon: Shield, type: 'THỊ GIÁC MÁY TÍNH & MÔ HÌNH AI', title: 'AI Camera Intrusion Monitoring', description: 'A student team project combining LAN video transport with AI-assisted person detection and asynchronous email alerts.', tags: ['UDP · TCP', 'YOLOv8 · ONNX', 'OpenCV · SMTP'], tone: 'green', mark: '03 / DETECTION' },
]
const skillGroups = [
  { icon: Network, title: 'Networking', items: ['Cisco Packet Tracer', 'VLAN · OSPF · LACP', 'Routing & switching'] },
  { icon: Cloud, title: 'Cloud & Systems', items: ['Docker · private cloud', 'Linux administration', 'Nginx · MinIO'] },
  { icon: Radio, title: 'Development', items: ['C++ · Python · Java', 'PHP · JavaScript', 'HTML · CSS'] },
  { icon: Shield, title: 'Security & Tools', items: ['YOLOv8 · ONNX', 'Git · GitHub · VS Code', 'Prometheus · Grafana'] },
]
const fade = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: .5 } } }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
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
          <p className="hero-description">I’m Trần Hoàng Anh Vũ, a Computer Networks and Communications student interested in secure infrastructure, cloud platforms, and software development.</p>
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
      </section>

      <section className="signal-strip"><div className="page-width signal-inner"><div><span className="signal-icon"><Globe2 size={17}/></span><span>DESIGNING FOR <b>RESILIENCE</b></span></div><div className="signal-separator"/><div><span className="signal-icon"><Layers3 size={17}/></span><span>BUILT AROUND <b>REAL SYSTEMS</b></span></div><div className="signal-separator"/><div><span className="signal-icon"><Cpu size={17}/></span><span>ALWAYS <b>LEARNING</b></span></div><span className="signal-id">VT—SYS.001</span></div></section>

      <section className="section page-width about-section" id="about"><div className="section-label"><span>01</span> / ABOUT ME</div><div className="about-grid"><div className="profile-intro"><img src={profilePhoto} alt="Portrait of Trần Hoàng Anh Vũ"/><div><h2>Trần Hoàng<br/>Anh Vũ<span className="cyan-dot">.</span></h2><p className="profile-alias">M. Mories</p></div></div><div className="about-copy"><p>I’m a Computer Networks and Communications student at Văn Hiến University in Ho Chi Minh City (2023–2027). I’m building practical experience across network infrastructure, Linux, private cloud, security, and web development.</p><p>My projects explore real system concerns: network segmentation and redundancy, isolated cloud services, real-time media transport, and AI-assisted monitoring.</p><div className="profile-facts"><span><GraduationCap size={15}/> Văn Hiến University · 2027</span><span><MapPin size={15}/> Ho Chi Minh City, Vietnam</span><span>English · technical reading and communication</span></div><a className="text-link" href="https://github.com/concavu" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={15}/></a></div></div></section>

      <section className="section page-width projects-section" id="projects"><div className="section-heading"><div><div className="section-label"><span>02</span> / SELECTED WORK</div><h2>Systems in focus<span className="cyan-dot">.</span></h2></div><p>Three connected areas of exploration.<br/>Built with purpose, shaped by systems thinking.</p></div>
        <div className="projects-grid">{projects.map((project,i)=>{const Icon=project.icon;return <motion.article className={`project-card glass-card ${project.tone}`} key={project.number} initial="hidden" whileInView="visible" viewport={{once:true,amount:.15}} variants={fade} transition={{delay:i*.08}}><div className="project-top"><span className="project-icon"><Icon size={19}/></span><span className="project-number">{project.number} <ArrowUpRight size={14}/></span></div><div className="project-visual"><div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><div className="visual-core"><Icon size={26}/></div><span className="visual-node node-one"/><span className="visual-node node-two"/><span className="visual-node node-three"/><span className="visual-caption">{project.mark}</span></div><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="project-link" href="#architecture">Architecture overview <ArrowRight size={15}/></a></motion.article>})}</div>
        <p className="project-note"><span className="live-dot"/> Project descriptions summarize documented academic and personal work.</p>
      </section>

      <section className="section page-width capabilities-section" id="capabilities"><div className="section-heading"><div><div className="section-label"><span>03</span> / CAPABILITIES</div><h2>My working toolkit<span className="cyan-dot">.</span></h2></div><p>A practical foundation across networks,<br/>systems, development, and monitoring.</p></div><div className="skills-grid">{skillGroups.map((group,i)=>{const Icon=group.icon;return <motion.div className="skill-card glass-card" key={group.title} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fade} transition={{delay:i*.06}}><div className="skill-head"><span><Icon size={18}/></span><b>0{i+1}</b></div><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}><Check size={13}/>{item}</li>)}</ul></motion.div>})}</div><div className="toolkit-extra"><b>ALSO WORKING WITH</b><span>PHP · Odoo Online · Docker Desktop · Notepad++ · GitHub Copilot</span></div></section>

      <section className="section architecture-section" id="architecture"><div className="page-width"><div className="section-heading"><div><div className="section-label"><span>04</span> / PLATFORM MAP</div><h2>Connected by design<span className="cyan-dot">.</span></h2></div><p>A layered view of the private cloud platform,<br/>from the edge to observability.</p></div>
        <div className="architecture-panel glass-card"><div className="arch-label"><span>REFERENCE ARCHITECTURE</span><span><span className="live-dot"/> SERVICE FLOW</span></div><div className="arch-flow"><div className="arch-node user-node"><Globe2/><b>Users</b><small>ACCESS</small></div><div className="flow-line"><span/></div><div className="arch-zone"><div className="zone-title">FRONTEND DMZ <small>172.20.10.0/24</small></div><div className="zone-nodes"><div className="arch-node"><Server/><b>Nginx</b><small>EDGE PROXY</small></div></div></div><div className="flow-line"><span/></div><div className="arch-zone"><div className="zone-title">BACKEND · INTERNAL <small>172.20.20.0/24</small></div><div className="zone-nodes"><div className="arch-node"><Layers3/><b>Nextcloud</b><small>APP</small></div><div className="arch-node"><Server/><b>MariaDB · Redis</b><small>DATA SERVICES</small></div></div></div><div className="flow-line"><span/></div><div className="arch-zone data-zone"><div className="zone-title">STORAGE · MONITORING <small>172.20.30.0/24 + METRICS</small></div><div className="zone-nodes"><div className="arch-node"><Cloud/><b>MinIO</b><small>S3 STORAGE</small></div><div className="arch-node"><Radio/><b>Prometheus · Grafana</b><small>OBSERVABILITY</small></div></div></div></div><div className="arch-legend"><span><i className="legend-blue"/> TRAFFIC FLOW</span><span><i className="legend-violet"/> APP & DATA</span><span><i className="legend-green"/> STORAGE & SIGNALS</span></div></div></div></section>

      <section className="section page-width community-section"><div className="section-heading"><div><div className="section-label"><span>05</span> / BEYOND THE STACK</div><h2>Learning in community<span className="cyan-dot">.</span></h2></div><p>Curiosity, collaboration,<br/>and showing up for others.</p></div><div className="community-grid"><article className="glass-card community-card"><span>TECH COMMUNITY</span><h3>Automotive Hackathon 2026</h3><p>Participant · Hà Nội</p><h3>UniHackfest 2026</h3><p>Participant</p></article><article className="glass-card community-card"><span>TECH COMMUNITY</span><h3>MiniPay | Celo Community Mixer</h3></article><article className="glass-card community-card"><span>ALSO EXPLORING</span><h3>Web video & subtitle tool</h3><p>Explored a web app workflow for extracting YouTube content, generating multilingual subtitles, and clipping videos.</p></article></div></section>

      <section className="contact-section page-width" id="contact"><div className="contact-card glass-card"><div className="contact-orb"/><div className="contact-content"><div className="section-label"><span>05</span> / OPEN CHANNEL</div><h2>Let’s build something<br/><em>reliable.</em></h2><p>Interested in infrastructure, cloud, or network engineering? I’d be glad to connect.</p><div className="contact-actions"><a className="button-primary copy-button" href="https://github.com/concavu" target="_blank" rel="noreferrer"><Github size={15}/> GitHub profile <ArrowUpRight size={14}/></a><a className="button-quiet phone-link" href="tel:+84856865932">0856 865 932</a></div><span className="contact-hint">Trần Hoàng Anh Vũ · M. Mories</span></div><div className="contact-decoration"><div className="contact-ring ring-one"/><div className="contact-ring ring-two"/><div className="contact-ring ring-three"/><span>VT<span>.</span></span></div></div></section>
    </main>
    <footer className="footer page-width"><a className="brand" href="#top"><span className="brand-mark"><Command size={16}/></span><span>VT<span className="brand-period">.</span></span></a><span>Thoughtfully built. Continuously learning.</span><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={13}/></a><small>© 2026 TRẦN HOÀNG ANH VŨ</small></footer>
  </div>
}

export default App
