import React from 'react';
import { Rocket, ArrowRight, Users, BarChart3, Cog } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs text-orange-600 shadow-sm backdrop-blur">
            <Rocket className="h-3.5 w-3.5" />
            WorkFlo — Productivity, perfectly orchestrated
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#222222] md:text-6xl">
            Run Your Business Smarter, Not Harder.
          </h1>
          <p className="mt-4 max-w-xl text-base text-neutral-600 md:text-lg">
            Automate workflows, align your team, and get real-time insights in one modern platform. Built for clarity, speed, and scale.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-[#FF7A00] px-6 py-3 text-white shadow-lg shadow-orange-400/40 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-[#222222] shadow-sm transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
              Explore Features
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-orange-500" /> 1200+ teams</div>
            <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-orange-500" /> +37% productivity</div>
            <div className="flex items-center gap-2"><Cog className="h-4 w-4 text-orange-500" /> 15 hrs saved/week</div>
          </div>
        </div>

        {/* Dashboard-style 3D-ish illustration */}
        <div className="relative">
          <div className="mx-auto aspect-[4/3] w-full max-w-xl rounded-3xl border border-neutral-200 bg-white/80 p-4 shadow-2xl backdrop-blur">
            {/* Top bar */}
            <div className="flex items-center justify-between rounded-2xl bg-neutral-50 px-4 py-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              </div>
              <div className="text-xs text-neutral-500">workflo.app</div>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-4">
              {/* Sidebar */}
              <div className="col-span-1 space-y-2">
                {["Home", "Tasks", "Automation", "Analytics", "Team"].map((item, i) => (
                  <div key={item} className={`rounded-xl px-3 py-2 text-sm ${i === 2 ? "bg-orange-50 text-orange-700" : "bg-neutral-50 text-neutral-600"}`}>
                    {item}
                  </div>
                ))}
              </div>
              {/* Content */}
              <div className="col-span-4 space-y-4">
                <div className="rounded-2xl bg-gradient-to-br from-neutral-50 to-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm font-medium text-neutral-700">Workflow Automation</div>
                    <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700">Live</span>
                  </div>
                  {/* grid pattern and curved arrows */}
                  <div className="relative h-40 rounded-xl bg-[radial-gradient(circle_at_1px_1px,_#e5e7eb_1px,_transparent_0)] [background-size:20px_20px]">
                    <svg className="absolute inset-0" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.7" />
                          <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <path d="M30 120 C 120 20, 220 200, 360 60" stroke="url(#grad)" strokeWidth="3" fill="none" />
                      <path d="M345 55 l15 5 l-10 12" stroke="#FF7A00" strokeWidth="2" fill="none" />
                    </svg>
                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 shadow backdrop-blur">
                      <Users className="h-4 w-4 text-orange-600" />
                      <span className="text-xs text-neutral-700">Collaboration</span>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white/80 px-3 py-2 shadow backdrop-blur">
                      <BarChart3 className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="absolute right-6 bottom-6 flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 shadow backdrop-blur">
                      <Cog className="h-4 w-4 text-orange-600" />
                      <span className="text-xs text-neutral-700">Automation</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "+37%", sub: "Productivity" },
                    { label: "15 hrs", sub: "Saved weekly" },
                    { label: "1200+", sub: "Active users" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-semibold text-[#222222]">{s.label}</div>
                      <div className="text-xs text-neutral-500">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
