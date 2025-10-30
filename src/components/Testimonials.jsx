import React from 'react';

const people = [
  {
    name: 'Ava Carter',
    role: 'Operations Lead, BrightLabs',
    quote:
      'WorkFlo replaced three tools and cut our reporting time in half. The clarity is unreal.',
    color: 'from-orange-200 to-orange-50',
    initials: 'AC',
  },
  {
    name: 'Liam Nguyen',
    role: 'Founder, NorthPeak',
    quote:
      'Automations run like clockwork and our team honestly enjoys using it every day.',
    color: 'from-neutral-200 to-white',
    initials: 'LN',
  },
  {
    name: 'Maya Patel',
    role: 'Product Manager, PixelWorks',
    quote: 'The insights helped us ship faster. It feels modern, fast, and thoughtfully designed.',
    color: 'from-orange-100 to-white',
    initials: 'MP',
  },
];

const Avatar = ({ initials, gradient }) => (
  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-sm font-semibold text-[#222222]`}>{initials}</div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#222222] md:text-4xl">Loved by ambitious teams</h2>
          <p className="mt-3 text-neutral-600">Real stories from teams scaling smarter with WorkFlo.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {people.map((p) => (
            <figure key={p.name} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <Avatar initials={p.initials} gradient={p.color} />
                <div>
                  <div className="text-sm font-semibold text-[#222222]">{p.name}</div>
                  <div className="text-xs text-neutral-500">{p.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-neutral-700">“{p.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
