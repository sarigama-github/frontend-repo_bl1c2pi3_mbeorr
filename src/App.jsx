import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Mail, Phone, Linkedin, Globe, Moon, Sun, ExternalLink } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-gray-400 max-w-2xl">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }
  }, [theme])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const containerClass = useMemo(() => (
    theme === 'dark'
      ? 'bg-black text-white'
      : 'bg-white text-black'
  ), [theme])

  const accent = 'text-[#3B82F6]'
  const cardBg = theme === 'dark' ? 'bg-[#0b0b0b]' : 'bg-gray-50'
  const borderCol = theme === 'dark' ? 'border-white/10' : 'border-black/10'

  return (
    <div className={`min-h-screen ${containerClass} font-sans`}>
      {/* Top nav */}
      <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/50 border-b ${borderCol}`}>
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-white">Fatahillah Mirza</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Experience', '#experience'],
              ['Projects', '#projects'],
              ['Skills', '#skills'],
              ['Education', '#education'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-gray-300 hover:text-white transition-colors">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative pt-32 md:pt-40 overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0 opacity-70">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlay to improve text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className={`text-sm uppercase tracking-widest ${accent} mb-3`}>Digital • Data • Strategy</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Hi, I’m Fatahillah Mirza Achmadil 👋
            </h1>
            <p className="mt-4 text-gray-300 text-lg">
              Digital Marketing Specialist & Data Analyst — crafting data-driven strategies for modern brands.
            </p>

            {/* Animated rotating roles */}
            <div className="mt-4 text-gray-400 text-sm">
              <RoleTicker roles={[
                'Digital Marketer',
                'SEO Writer',
                'Data-Driven Thinker',
              ]} />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 font-medium hover:opacity-90 transition">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-[#3B82F6] text-white px-4 py-2 font-medium hover:brightness-110 transition">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <div className="border-t border-white/10 bg-[#0A0A0A]">
        <Section id="about" title="About" subtitle="A quick snapshot of background and values.">
          <div className={`rounded-xl ${cardBg} border ${borderCol} p-6 md:p-8 flex flex-col md:flex-row items-start gap-6`}
          >
            <img
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=240&auto=format&fit=crop"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover ring-2 ring-[#3B82F6]"
            />
            <div>
              <p className="text-gray-300">
                I’m a Digital Marketing Specialist and student of Information Systems at Universitas Terbuka. With experience managing online campaigns, SEO content, and data analytics for travel and service brands, I bridge creativity with analytical insight to deliver measurable results.
              </p>
              <p className={`mt-4 font-medium ${accent}`}>
                “Turning digital insights into measurable impact.”
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="Roles and achievements.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              company: 'PT Initour Indowisata',
              period: 'Oct 2024 – Present',
              role: 'Freelance Digital Marketing',
              points: [
                'Planned digital campaigns for Umrah brand awareness and lead generation.',
                'Created SEO articles and digital visuals for website and social media.',
              ],
            },
            {
              company: 'PT Travelindo Pesona Wisata',
              period: 'Jun 2024 – Oct 2024',
              role: 'Digital Marketing & Data Analyst',
              points: [
                'Managed Meta Ads/TikTok Ads with monthly budget Rp 10–15M and achieved up to 3x ROI.',
                'Wrote 30+ SEO articles increasing organic traffic by 40%.',
              ],
            },
            {
              company: 'Maheer Travelindo',
              period: '2024',
              role: 'SEO & Content Contributor',
              points: [
                'Optimized web keywords and maintained operational data accuracy.',
              ],
            },
          ].map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-xl ${cardBg} border ${borderCol} p-6`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                <span className="text-xs text-gray-400">{job.period}</span>
              </div>
              <p className={`mt-1 text-sm ${accent}`}>{job.role}</p>
              <ul className="mt-4 space-y-2 text-gray-300 text-sm list-disc pl-4">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <div className="border-t border-white/10 bg-[#0A0A0A]">
        <Section id="projects" title="Projects" subtitle="Selected works and experiments.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Initourindo.com',
                role: 'Project Lead & Content Strategist',
                desc: 'Company profile website for travel brand.',
                year: '2024',
                link: 'https://initourindo.com',
              },
              {
                name: 'Vithopup.my.id',
                role: 'Developer & Marketing Integrator',
                desc: 'Game top-up platform with streamlined flow.',
                year: '2024',
                link: 'https://vithopup.my.id',
              },
              {
                name: 'To The Moon Jurnal',
                role: 'System Designer & Analyst',
                desc: 'Trading journal for XAUUSD/BTC strategies.',
                year: '2023–2024',
                link: '#',
              },
              {
                name: 'WhatsApp Blasting System',
                role: 'Developer & Tester',
                desc: 'Automation for Umrah marketing.',
                year: '2024',
                link: '#',
              },
            ].map((p, idx) => (
              <motion.a
                key={p.name}
                href={p.link}
                target={p.link.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group rounded-xl ${cardBg} border ${borderCol} p-6 relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{
                  background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.15), transparent 40%)'
                }} />
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <span className="text-xs text-gray-400">{p.year}</span>
                </div>
                <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
                <p className={`mt-3 text-sm ${accent}`}>{p.role}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-[#3B82F6] group-hover:gap-2 transition">
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        </Section>
      </div>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Technical and creative toolset.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              cat: 'Digital Marketing',
              items: ['Meta Ads Manager', 'TikTok Ads Manager', 'Google Ads', 'Google Analytics'],
            },
            {
              cat: 'Content Creation',
              items: ['Canva', 'CapCut', 'Adobe Illustrator (basic)'],
            },
            {
              cat: 'Data & CRM',
              items: ['Odoo', 'Microsoft Excel', 'Google Sheets', 'Data Visualization'],
            },
            {
              cat: 'SEO & Copywriting',
              items: ['Keyword research', 'Blog optimization', 'SEO article writing'],
            },
          ].map((g) => (
            <motion.div
              key={g.cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`rounded-xl ${cardBg} border ${borderCol} p-6`}
            >
              <h4 className="text-white font-semibold">{g.cat}</h4>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <div className="border-t border-white/10 bg-[#0A0A0A]">
        <Section id="education" title="Education">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`rounded-xl ${cardBg} border ${borderCol} p-6`}
          >
            <h4 className="text-white font-semibold">Universitas Terbuka – Jakarta</h4>
            <p className="text-gray-300 mt-1">Bachelor of Information Systems (2025–Present)</p>
            <p className="text-gray-400 mt-2">Focus: Digital systems, data analysis, and information management.</p>
          </motion.div>
        </Section>
      </div>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s collaborate and grow your digital presence.">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
            className={`rounded-xl ${cardBg} border ${borderCol} p-6`}
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input className="w-full rounded-md bg-black/40 text-white border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input type="email" className="w-full rounded-md bg-black/40 text-white border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea rows={4} className="w-full rounded-md bg-black/40 text-white border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" placeholder="Tell me about your project" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[#3B82F6] text-white px-4 py-2 font-medium hover:brightness-110 transition">Send Message</button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className={`rounded-xl ${cardBg} border ${borderCol} p-6`}
          >
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <Mail size={18} className={accent} />
                <a className="hover:text-white" href="mailto:ftahmirz.a06@gmail.com">ftahmirz.a06@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className={accent} />
                <a className="hover:text-white" href="tel:087760589917">087760589917</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={18} className={accent} />
                <a className="hover:text-white" href="https://linkedin.com/in/fatahillah-mirza-achmadil" target="_blank" rel="noreferrer">linkedin.com/in/fatahillah-mirza-achmadil</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className={accent} />
                <a className="hover:text-white" href="https://fadilismee.my.id" target="_blank" rel="noreferrer">fadilismee.my.id</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className={`mt-10 border-t ${borderCol}`}>
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-400 text-sm">
          © 2025 Fatahillah Mirza Achmadil — All rights reserved.
        </div>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#3B82F6] text-white shadow-lg hover:brightness-110 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  )
}

function RoleTicker({ roles }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200)
    return () => clearInterval(id)
  }, [roles.length])
  return (
    <div className="h-6 overflow-hidden">
      <motion.div
        key={index}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="text-sm"
      >
        {roles[index]}
      </motion.div>
    </div>
  )
}
