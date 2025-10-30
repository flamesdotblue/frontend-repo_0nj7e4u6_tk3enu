import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const plans = {
  Starter: {
    price: '$0',
    period: 'Forever',
    highlight: false,
    features: ['Up to 3 projects', 'Basic automations', 'Community support'],
    cta: 'Get Started',
  },
  Growth: {
    price: '$24',
    period: 'per user / month',
    highlight: true,
    features: ['Unlimited projects', 'Advanced automations', 'Analytics dashboards', 'Priority support'],
    cta: 'Start 14-day Trial',
  },
  Business: {
    price: 'Custom',
    period: 'Tailored plan',
    highlight: false,
    features: ['SSO + SCIM', 'Custom analytics', 'Dedicated CSM', 'Security reviews'],
    cta: 'Contact Sales',
  },
};

const Pricing = () => {
  const [active, setActive] = useState('Growth');

  const plan = plans[active];

  return (
    <section id="pricing" className="relative bg-[#F7F7F7] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,122,0,0.06),_transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#222222] md:text-4xl">Simple, scalable pricing</h2>
          <p className="mt-3 text-neutral-600">Choose a plan that grows with you. Cancel anytime.</p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
            {Object.keys(plans).map((name) => {
              const isActive = active === name;
              return (
                <button
                  key={name}
                  onClick={() => setActive(name)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive ? 'bg-[#FF7A00] text-white shadow' : 'text-[#222222] hover:bg-neutral-50'
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected plan card */}
        <div className="mt-10 grid grid-cols-1 justify-items-center">
          <div
            className={`w-full max-w-2xl rounded-3xl border bg-white p-8 shadow-xl ${
              plan.highlight ? 'border-orange-300 ring-2 ring-orange-200' : 'border-neutral-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-[#222222]">{active}</div>
                <div className="mt-1 text-sm text-neutral-600">{plan.period}</div>
              </div>
              {plan.highlight && (
                <div className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-[#FF7A00]">
                  <Star className="h-3.5 w-3.5" /> Most popular
                </div>
              )}
            </div>

            <div className="mt-6 flex items-end gap-2">
              <div className={`text-5xl font-extrabold ${plan.price === 'Custom' ? 'text-[#222222]' : 'text-[#FF7A00]'}`}>{plan.price}</div>
              {plan.price !== 'Custom' && <div className="mb-1 text-sm text-neutral-600">{plan.period}</div>}
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-neutral-700 md:grid-cols-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FF7A00]" /> {f}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                className={`w-full rounded-full px-6 py-3 text-sm font-medium shadow transition focus:outline-none focus:ring-2 ${
                  plan.highlight
                    ? 'bg-[#FF7A00] text-white shadow-orange-400/40 hover:brightness-110 focus:ring-orange-400'
                    : 'bg-white text-[#222222] ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 focus:ring-neutral-300'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
