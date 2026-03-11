"use client"
import { useState } from "react"
import { AnimatedItem } from "@/components/animated-section"

const cards = [
  {
    title: "Rapid Prototyping",
    desc: "Turning ideas to working demos fast from concept to functional prototype in days.",
  },
  {
    title: "Communication",
    desc: "Translating technical complexity into clear narratives for any audience.",
  },
  {
    title: "Collaboration",
    desc: "Cross-functional teamwork across engineering, design, business, and research.",
  },
  {
    title: "Analytical Thinking",
    desc: "Decomposing ambiguous problems into structured, solvable sub-problems.",
  },
  {
    title: "Self-Driven Learning",
    desc: "Independently mastering new domains from Flutter to AI APIs through building.",
  },
  {
    title: "Multilingual",
    desc: "Arabic, Darija, French, English fluently Spanish conversationally. Bridges cultural gaps.",
  },
]

function SoftCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <AnimatedItem index={index} staggerMs={80}>
      <div
        className="rounded-[14px] px-6 py-7 h-full transition-all duration-[250ms] cursor-default"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.07)",
          borderTop: hovered ? "1px solid rgba(0,0,0,0.25)" : "1px solid rgba(0,0,0,0.07)",
          transform: hovered ? "translateY(-5px)" : "",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="text-[17px] font-bold mb-2"
          style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif", color: "#111010" }}
        >
          {card.title}
        </div>
        <div
          className="text-[13px] leading-[1.6]"
          style={{ color: "#525252" }}
        >
          {card.desc}
        </div>
      </div>
    </AnimatedItem>
  )
}

export function SoftSkills() {
  return (
    <section
      id="softskills"
      style={{
        padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)",
        background: "#f0ebe3",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div className="mb-14">
        <div className="section-tag">Soft Skills</div>
        <div
          className="font-black leading-none"
          style={{
            fontFamily: "var(--font-syne,'Syne'),sans-serif",
            fontSize: "clamp(38px,4.5vw,62px)",
            letterSpacing: "-2.5px",
          }}
        >
          Beyond the code.
        </div>
      </div>

      <div className="grid gap-[14px] max-lg:grid-cols-2 max-md:grid-cols-1" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        {cards.map((card, i) => (
          <SoftCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </section>
  )
}
