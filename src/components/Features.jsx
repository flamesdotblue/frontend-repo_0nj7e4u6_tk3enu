import React from 'react';
import { Check, BarChart3, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Automation without the hassle',
    desc: 'Drag-and-drop builders and smart triggers let you automate repetitive tasks in minutes.',
  },
  {
    icon: Users,
    title: 'Collaboration that just clicks',
    desc: 'Comments, mentions, and shared views keep everyone aligned and accountable.',
  },
  {
    icon: BarChart3,
    title: 'Analytics that drive action',
    desc: 'Real-time dashboards highlight bottlenecks and show where to focus next.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-[#F7F7F7] py-20">
      {/* Soft grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,122,0,0.08),_transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#222222] md:text-4xl">Everything you need to flow</h2>
          <p className="mt-3 text-neutral-600">Connect your tools, automate your busywork, and measure impact across the board.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-100/60 blur-xl" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                <Icon className="h-6 w-6 text-[#FF7A00]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#222222]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-500" /> No-code builder</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-500" /> Integrates with 50+ apps</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-500" /> Role-based permissions</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Isometric style cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {["+37%", "15 hrs", "1200+"].map((stat, i) => (
            <div key={stat} className="relative rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 shadow-xl">
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl border border-neutral-200/60 bg-white/40 shadow-inner backdrop-blur-sm" />
              <div className="relative">
                <div className="text-4xl font-bold text-[#222222]">{stat}</div>
                <p className="mt-1 text-sm text-neutral-600">
                  {i === 0 && 'Average productivity gain'}
                  {i === 1 && 'Saved per user each week'}
                  {i === 2 && 'Organizations already using WorkFlo'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
