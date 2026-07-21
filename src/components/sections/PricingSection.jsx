import { useState } from "react";
import { Check, Voicemail, Building2, PhoneCall } from "lucide-react";
import { p } from "framer-motion/client";

const countries = [
  { 
    code: "US", 
    dial: "+1", 
    name: "United States", 
    rate: "50", 
    included: "Unlimited",
    features: [
      "Unlimited Calling",
      "Your choice of area code.",
      "Support for upto 1-5 users.",
      "1 month replaccement warranty.",
      "First Login then Payment"]
  },
    { 
    code: "CA", 
    dial: "+1", 
    name: "United States", 
    rate: "50", 
    included: "Unlimited",
    features: [
      "Unlimited Calling",
      "Your choice of area code.",
      "Support for upto 1-5 users.",
      "1 month replaccement warranty.",
      "First Login then Payment."
    ]
  },
  { 
    code: "GB", 
    dial: "+44", 
    name: "United Kingdom", 
    rate: "70", 
    included: "Unlimited",
    features: [
      "Unlimited Calling",
      "Your choice of area code.",
      "Support for upto 1-5 users.",
      "Half month replaccement warranty.",
      "First Login then Payment."
    
    ]
  },
  { 
    code: "AU", 
    dial: "+61", 
    name: "Australia", 
    rate: "120", 
    included: "5,000 min",
    features: [
      "Local Australian numbers.",
      "5,000 Calling Minutes",
      "Shared lines for your whole team",
      "Admin console with usage reporting",
      "24/7 AU-based support"
    ]
  },
  { 
    code: "DE", 
    dial: "+49", 
    name: "Germany", 
    rate: "100", 
    included: "Unlimited",
      features: [
      "Unlimited Calling",
      "Your choice of area code.",
      "Support for upto 1-5 users.",
      "1 month replaccement warranty.",
      "First Login then Payment."
    ]
  },
   { 
    code: "IT", 
    dial: "+39", 
    name: "Italy", 
    rate: "100", 
    included: "Unlimited",
      features: [
      "Unlimited Calling",
      "Your choice of area code.",
      "Support for upto 1-5 users.",
      "1 month replaccement warranty.",
      "First Login then Payment."
    ]
  },
   { 
    code: "Others", 
    dial: "", 
    name: "European Countries", 
    rate: "100", 
    included: "Unlimited",
    countries: ["Europe" , "Spain" , "Belgium" , "Switzerland" , "Denmark" , "France" , "Netherlands" , "Sweden"],
      features: [
      "Unlimited Calling",
      "Your choice of area code.",
      "Support for upto 1-5 users.",
      "1 month replaccement warranty.",
      "First Login then Payment.",
    ]
  },
];

const spaceGrotesk = { fontFamily: "'Space Grotesk', sans-serif" };
const jetbrains = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

function Feature({ children, dot }) {
  return (
    <li className="flex items-start gap-2.5 mb-2.5">
      <span className={`mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-md ${dot}`}>
        <Check size={12} className="text-slate-950" strokeWidth={3} />
      </span>
      <span className="text-[13.5px] leading-relaxed text-slate-400">{children}</span>
    </li>
  );
}

function LcdPrice({ value, unit }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span style={jetbrains} className="text-[40px] font-semibold tracking-tight text-slate-100">
        {value}
      </span>
      <span style={jetbrains} className="text-[13px] text-slate-400">
        {unit}
      </span>
    </div>
  );
}

function CardShell({ children, topBar, badge, badgeColor, iconWrap, height, icon , no}) {
  return (
    <div className={`relative cardshell cardshel${no} min-w-[300px] max-w-[380px] flex-1 basis-80 ${height} rounded-2xl border border-slate-800 bg-blue px-6 pb-6 pt-7 shadow-2xl shadow-black/40`}>
      <div className={`absolute left-6 right-6 top-0 h-0.5 rounded-full opacity-90 ${topBar}`} />
      <div className="mb-4.5 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconWrap}`}>
          {icon}
        </div>
        <span style={jetbrains} className={`text-[11px] uppercase tracking-[0.1em] ${badgeColor}`}>
          {badge}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function PricingSection() {
  const [selected, setSelected] = useState(0);
  const country = countries[selected];
  const countri = countries[selected]["others"]

  return (
    <div className="w-full py-20 px-6 md:px-20 text-white bg-none relative">
      {/* Glow Effects */}
      <div className="glow absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500/40 blur-[130px] rounded-full hidden sm:block"></div>
      <div className="glow absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-400/40 blur-[130px] rounded-full"></div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-7xl mx-auto mb-14">
          <h2 data-aos="fade-right" className="text-3xl md:text-5xl font-[Poppins] font-bold leading-tight mb-3 2xl:text-6xl text-blue heading-sec">
            Pricing <span className="orange">Section</span>
          </h2>
          <p data-aos="fade-up" className="text-gray-500 font-[Inter] mt-3 max-w-2xl mx-auto 2xl:text-2xl">
            Global Connectivity Within Your Budget.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {/* CARD 1 — GV Personal */}
          <CardShell
            topBar="bg-orange-400"
            badge="GV Personal USA"
            badgeColor="text-orange-400"
            iconWrap="bg-orange-400/10"
            height={`h-[380px]`}
            icon={<Voicemail size={19} className="text-orange-400" />}
            no={1}
          >
            <div className="mb-4.5">
              <LcdPrice value="$9.99" unit="/ per acc" />
            </div>
            <p className="mb-4.5 text-[13px] leading-relaxed text-slate-400">
              A private number for unlimited calling that stays
              yours wherever you go.
            </p>
            <ul className="mb-5 list-none p-0">
              <Feature dot="bg-orange-400">Unlimited calls — US &amp; Canada</Feature>
              <Feature dot="bg-orange-400">One time payment</Feature>
            </ul>
            <a href="https://wa.me/+923000584969?text=I want to buy Google Voice Personal" target="_blank" rel="noreferrer">
              <button className="w-full rounded-lg bg-orange-400 py-2.5 text-[13.5px] font-semibold text-slate-950 transition hover:bg-orange-500">
                Get GV Personal
              </button>
            </a>
          </CardShell>

          {/* CARD 2 — GV Business (country selector with dynamic features) */}
          <CardShell
            topBar="bg-orange-400"
            badge="GV Business"
            badgeColor="text-orange-400"
            iconWrap="bg-orange-400/10"
            icon={<Building2 size={19} className="text-orange-400" />}
            className="cardshel2"
          >
            <div className="mb-3.5">
              <LcdPrice value={`$${country.rate}`} unit={`/ month`} />
            </div>

            <div
              role="group"
              aria-label="Choose a destination country to see its rate"
              className="mb-4 flex flex-wrap gap-1.5 border-b border-slate-800 pb-4"
            >
              {countries.map((c, i) => {
                const active = i === selected;
                return (
                  <button
                    key={c.code}
                    onClick={() => setSelected(i)}
                    aria-pressed={active}
                    style={jetbrains}
                    className={`gc-chip rounded-lg border px-2.5 py-1.5 text-[11.5px] transition hover:-translate-y-px ${
                      active
                        ? "border-orange-400 bg-orange-400/10 text-slate-100"
                        : "border-slate-800 text-slate-400"
                    }`}
                  >
                    {c.dial} {c.code}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Features - Changes with country selection */}
            <ul className="mb-5 list-none p-0">

                {country.code === "Others" && country.countries && (
              <div className="mb-3 rounded-lg">
                <p className="text-xs text-slate-400 mb-2 font-medium">🌍 Available Countries:</p>
                <div className="flex flex-wrap gap-1.5">
                  {country.countries.map((euCountry, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] text-slate-300 bg-slate-700/50 px-2.5 py-1 rounded-full border border-slate-600/50"
                    >
                      {euCountry}
                    </span>
                  ))}
                </div>
              </div>
            )}

              {country.features.map((feature, index) => (
                <Feature key={index} dot="bg-orange-400">
                  {feature}
                </Feature>
              ))}
            </ul>
              <a href={`https://wa.me/+923000584969?text=I want to buy Google Voice Business "${country.name}" `} target="_blank" rel="noreferrer">
             <button className="w-full rounded-lg bg-orange-400 py-2.5 text-[13.5px] font-semibold text-slate-950 transition hover:bg-orange-300">
              Get GV Business
            </button>
            </a>
   
          </CardShell>

          {/* CARD 3 — Zoom Dialer */}
          <CardShell
            topBar="bg-orange-400"
            badge="Zoom Dialer"
            badgeColor="text-orange-400"
            iconWrap="bg-orange-400/10"
            height={`h-[420px]`}
            icon={<PhoneCall size={19} className="text-orange-400" />}
            className="cardshel3"
            no={3}
          >
            <div className="mb-4.5">
              <LcdPrice value="$50" unit="/ month per acc" />
            </div>
            <p className="mb-4.5 text-[13px] leading-relaxed text-slate-400">
              Zoom Phone offers cloud-based business calling and seamless team connectivity worldwide.
            </p>
            <ul className="mb-5 list-none p-0">
              <Feature dot="bg-orange-400">Country : USA & Canada</Feature>
              <Feature dot="bg-orange-400">Unlimited Calling</Feature>
              <Feature dot="bg-orange-400">1 Month Replacement Warranty</Feature>
              <Feature dot="bg-orange-400">First login , then pay</Feature>
            </ul>
           <a href={`https://wa.me/+923000584969?text=I want to buy Zoom Phone `} target="_blank" rel="noreferrer">
            <button className="w-full rounded-lg bg-orange-400 py-2.5 text-[13.5px] font-semibold text-slate-950 transition hover:bg-orange-500">
              Get Zoom Dialer
            </button>
            </a>
          </CardShell>
        </div>
      </div>
    </div>
  );
}