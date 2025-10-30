import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How does the free trial work?',
    a: 'Start with full access to the Growth plan for 14 days. No credit card required. Downgrade or upgrade anytime.',
  },
  {
    q: 'Can we migrate from other tools?',
    a: 'Yes. Import tasks, users, and projects from CSV or via our migration assistant. Our team can help on Business plans.',
  },
  {
    q: 'Is WorkFlo secure for our company data?',
    a: 'We use industry-standard encryption, SSO, and granular permissions. Enterprise features include SAML SSO and SCIM.',
  },
  {
    q: 'Do you offer discounts for nonprofits or education?',
    a: 'Absolutely. Contact our team for special pricing for nonprofits, students, and educators.',
  },
];

const FAQItem = ({ item, open, onToggle }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between text-left"
      aria-expanded={open}
    >
      <span className="text-sm font-medium text-[#222222]">{item.q}</span>
      <ChevronDown className={`h-4 w-4 text-neutral-500 transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
    {open && <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.a}</p>}
  </div>
);

const CTA = () => (
  <section className="relative overflow-hidden py-20">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-16 left-1/3 h-64 w-64 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="absolute -bottom-16 right-1/3 h-64 w-64 rounded-full bg-orange-300/40 blur-3xl" />
    </div>
    <div className="mx-auto max-w-4xl px-6 text-center">
      <h3 className="text-3xl font-bold text-[#222222] md:text-4xl">Ready To Simplify How Your Team Works</h3>
      <p className="mx-auto mt-3 max-w-2xl text-neutral-600">Bring every workflow, teammate, and insight into one place—so your business can move with clarity and speed.</p>
      <div className="mt-8">
        <a
          href="#pricing"
          className="inline-flex items-center justify-center rounded-full bg-[#FF7A00] px-8 py-4 text-white shadow-[0_0_40px_rgba(255,122,0,0.35)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Get Started Free
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-neutral-200 bg-white py-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF7A00] text-white font-bold">W</div>
        <span className="text-sm font-semibold text-[#222222]">WorkFlo</span>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-600">
        <a className="hover:text-[#FF7A00]" href="#features">Features</a>
        <a className="hover:text-[#FF7A00]" href="#pricing">Pricing</a>
        <a className="hover:text-[#FF7A00]" href="#faq">FAQ</a>
        <a className="hover:text-[#FF7A00]" href="#">Contact</a>
      </nav>
      <div className="text-xs text-neutral-500">© 2025 WorkFlo. All rights reserved.</div>
    </div>
  </footer>
);

export default function App() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[#222222] md:text-4xl">Frequently asked questions</h2>
            <p className="mt-3 text-neutral-600">Everything you need to know about getting started with WorkFlo.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4">
            {faqs.map((item, idx) => (
              <FAQItem
                key={item.q}
                item={item}
                open={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
