"use client"

import React, { useState } from "react"
import Link from "next/link"

const hackathons = [
  {
    place: "2nd",
    prize: "Runner-Up",
    event: "Fashion × AI Hackathon",
    timeframe: "Whiteboard sketch to live prototype in a few hours",
    title: "Retail Therapist",
    subtitle: "Behaviour-Aware Wardrobe Intelligence",
    brief:
      "Online shopping can feel overwhelming endless grids, infinite scrolling, too many choices. The question driving the build was simple: what if your shopping experience understood you first? Rather than presenting every user with the same grid, Retail Therapist starts with you your habits, your wardrobe, your life context.",
    what: [
      "Style & Behaviour Scan capturing shopping patterns, mood inputs, fit preferences, palette sensibilities, and occasion context",
      "Live product data pulled via API endpoints, processed through a rule-based scoring layer",
      "Wardrobe gap detection and redundancy flagging to surface only genuinely useful recommendations",
      "Compatibility scoring across categories to generate ranked, coherent outfit suggestions",
      "Outfit Calendar module for forward planning shifting the mental model from reactive shopping to intentional wardrobe building",
    ],
    systems: [
      "Translating open-ended behavioural inputs into structured, queryable data",
      "Lightweight recommendation engine with explainable scoring",
      "Responsive UI with state-driven updates on preference changes",
      "AI-generated outfit visuals connected to functional product data",
    ],
    quote:
      "The idea wasn't to push more products. It was to help people build better wardrobes and to make that feel effortless.",
    tags: ["API Integration", "Rule-Based Scoring", "UX Architecture", "Product Strategy", "AI Visuals"],
  },
  {
    place: "3rd",
    prize: "£2k Hugging Face Credits",
    event: "Women in AI Hackathon",
    timeframe: "Built in a few hours during the hackathon",
    sponsors: "The Tech Bros · Mercuri VC · Canva · Hugging Face · ElevenLabs",
    title: "Soul Echo",
    subtitle: "AI-Powered Emotional Reflection App",
    brief:
      "When you record voice notes during emotional moments, you capture the raw truth of what you feel but you rarely revisit them. Soul Echo changes that. The app lets you have an AI-generated conversation with your past self, hearing your own cloned voice reflect back at you with empathy and clarity. It was a deeply human idea executed with powerful AI tooling.",
    what: [
      "Voice recording of the user's present emotional state",
      "AI-generated conversational responses from a 'past self' persona",
      "ElevenLabs voice cloning to reproduce the user's own voice for responses",
      "Emotional context preservation across the conversation thread",
      "Interaction design prioritising warmth, intimacy, and psychological safety",
    ],
    systems: [
      "Voice cloning pipeline via ElevenLabs API",
      "Prompt engineering for emotionally coherent and contextually grounded responses",
      "Conversational AI design focused on empathy and non-judgement",
      "Real-time audio generation and playback",
    ],
    quote:
      "What I'll remember most isn't the prize. It's the energy in that room the collaboration, the ambition, and how empowering it felt to build something genuinely human alongside people pushing the boundaries of AI.",
    tags: ["ElevenLabs", "Voice Cloning", "Conversational AI", "Emotional Design", "Prompt Engineering"],
  },
]

// Replace these src paths with your actual image files placed in /public/hackathon/
const carouselImages = [
  { src: "/images/img1.png", alt: "Interface wardrobe scan" },
  { src: "/images/img2.png", alt: "Interface outfit recommendations" },
  { src: "/images/img3.png", alt: "Interface outfit calendar" },
  { src: "/images/img4.png", alt: "Hackathon certificate" },
  { src: "/images/img5.png", alt: "Interface product scoring" },
  { src: "/images/img6.png", alt: "Interface style profile" },
]

function CenterFocusCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0)
  const n = images.length
  const mono = "var(--font-ibm-plex-mono,'IBM Plex Mono',monospace)"

  const getDist = (i: number) => {
    let d = i - current
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    return d
  }

  const prev = () => setCurrent((c) => (c - 1 + n) % n)
  const next = () => setCurrent((c) => (c + 1) % n)

  return (
    <div
      style={{
        margin: "60px 0",
        padding: "48px 0",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div
        style={{
          fontFamily: mono,
          fontSize: 9,
          color: "#bbb",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: 32,
          textAlign: "center",
        }}
      >
        {"/* interfaces & certificate */"}
      </div>

      {/* Track */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(180px, 32vw, 400px)",
          overflow: "hidden",
        }}
      >
        {images.map((img, i) => {
          const d = getDist(i)
          const abs = Math.abs(d)
          const leftPct = 50 + d * 42
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: `${leftPct}%`,
                width: "46%",
                transform: `translate(-50%, -50%) scale(${abs === 0 ? 1 : 0.76})`,
                opacity: abs === 0 ? 1 : abs === 1 ? 0.48 : 0,
                transition: "left 0.45s cubic-bezier(0.42,0,0.2,1), transform 0.45s ease, opacity 0.4s ease",
                zIndex: abs === 0 ? 3 : abs === 1 ? 2 : 1,
                pointerEvents: abs <= 1 ? "auto" : "none",
              }}
            >
              <div style={{ position: "relative", width: "100%", paddingBottom: "66.7%" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    background: "rgba(0,0,0,0.04)",
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          marginTop: 28,
        }}
      >
        <button
          onClick={prev}
          style={{
            background: "none",
            border: "1px solid rgba(0,0,0,0.14)",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontFamily: mono,
            fontSize: 14,
            color: "#555",
            transition: "border-color .2s, color .2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.4)"; e.currentTarget.style.color = "#111" }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.14)"; e.currentTarget.style.color = "#555" }}
          aria-label="Previous"
        >
          ←
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                background: i === current ? "#111" : "rgba(0,0,0,0.18)",
                border: "none",
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 3,
                cursor: "pointer",
                padding: 0,
                transition: "background 0.3s, width 0.3s",
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            background: "none",
            border: "1px solid rgba(0,0,0,0.14)",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontFamily: mono,
            fontSize: 14,
            color: "#555",
            transition: "border-color .2s, color .2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.4)"; e.currentTarget.style.color = "#111" }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.14)"; e.currentTarget.style.color = "#555" }}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default function HackathonsPage() {
  const mono = "var(--font-ibm-plex-mono,'IBM Plex Mono',monospace)"
  const syne = "var(--font-syne,'Syne',sans-serif)"

  return (
    <div style={{ background: "#f7f3ee", minHeight: "100vh" }}>
      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          padding: "20px 80px",
          background: "rgba(247,243,238,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: mono,
            fontSize: 11,
            color: "#777",
            textDecoration: "none",
            letterSpacing: "1px",
            transition: "color .2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
        >
          ← Back to Home
        </Link>
      </nav>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "160px 40px 120px" }}>
        {/* Page header */}
        <div style={{ marginBottom: 80 }}>
          <div
            style={{
              fontFamily: mono,
              fontSize: 9,
              color: "#bbb",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Hackathon Wins
          </div>
          <h1
            style={{
              fontFamily: syne,
              fontWeight: 800,
              fontSize: "clamp(40px,6vw,72px)",
              letterSpacing: "-3px",
              lineHeight: 0.9,
              color: "#111",
              marginBottom: 24,
            }}
          >
            Built under pressure.<br />
            <span style={{ color: "#777" }}>Won on merit.</span>
          </h1>
          <p
            style={{
              fontFamily: mono,
              fontSize: 11,
              color: "#999",
              letterSpacing: "1.2px",
              maxWidth: 500,
              lineHeight: 1.7,
            }}
          >
            {"// two events · two products · two wins · all built in hours"}
          </p>
        </div>

        {/* Hackathon entries */}
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {hackathons.map((hack, i) => (
            <React.Fragment key={hack.title}>
            <article
              style={{
                borderTop: "1px solid rgba(0,0,0,0.10)",
                paddingTop: 48,
              }}
            >
              {/* Entry header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "0 40px",
                  alignItems: "start",
                  marginBottom: 40,
                }}
                className="max-sm:flex max-sm:flex-col max-sm:gap-6"
              >
                {/* Place badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "baseline",
                    gap: 10,
                    padding: "10px 18px",
                    border: "1px solid rgba(0,0,0,0.14)",
                    background: "#fff",
                  }}
                >
                  <span
                    style={{
                      fontFamily: syne,
                      fontWeight: 800,
                      fontSize: 36,
                      color: "#111",
                      lineHeight: 1,
                    }}
                  >
                    {hack.place}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 8,
                        color: "#bbb",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      Place
                    </div>
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 9,
                        color: "#666",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      {hack.prize}
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div>
                  <h2
                    style={{
                      fontFamily: syne,
                      fontWeight: 800,
                      fontSize: "clamp(24px,3vw,38px)",
                      letterSpacing: "-1.5px",
                      color: "#111",
                      lineHeight: 1.05,
                      marginBottom: 6,
                    }}
                  >
                    {hack.title}
                  </h2>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 9,
                      color: "#999",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginBottom: 16,
                    }}
                  >
                    {hack.subtitle}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                    {[
                      { label: "Event", value: hack.event },
                      { label: "Timeline", value: hack.timeframe },
                      ...(hack.sponsors ? [{ label: "Sponsors", value: hack.sponsors }] : []),
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div
                          style={{
                            fontFamily: mono,
                            fontSize: 8,
                            color: "#bbb",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            marginBottom: 3,
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            fontFamily: mono,
                            fontSize: 10,
                            color: "#555",
                            lineHeight: 1.5,
                          }}
                        >
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brief */}
              <p
                style={{
                  fontSize: 15,
                  color: "#444",
                  lineHeight: 1.85,
                  marginBottom: 40,
                  maxWidth: 720,
                }}
              >
                {hack.brief}
              </p>

              {/* Two-col detail */}
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 36 }}
                className="max-md:grid-cols-1"
              >
                {/* What we built */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 8,
                      color: "#bbb",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: 18,
                    }}
                  >
                    {"/* what we built */"}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {hack.what.map((item, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 12,
                          fontFamily: mono,
                          fontSize: 11,
                          color: "#555",
                          lineHeight: 1.65,
                        }}
                      >
                        <span style={{ color: "#ccc", flexShrink: 0 }}>{`0${j + 1}`}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Systems */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 8,
                      color: "#bbb",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: 18,
                    }}
                  >
                    {"/* systems perspective */"}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {hack.systems.map((item, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 12,
                          fontFamily: mono,
                          fontSize: 11,
                          color: "#555",
                          lineHeight: 1.65,
                        }}
                      >
                        <span style={{ color: "#ccc", flexShrink: 0 }}>{`0${j + 1}`}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div
                style={{
                  paddingLeft: 20,
                  borderLeft: "2px solid rgba(0,0,0,0.12)",
                  marginBottom: 28,
                }}
              >
                <p
                  style={{
                    fontFamily: syne,
                    fontSize: 15,
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: "#444",
                    lineHeight: 1.65,
                  }}
                >
                  &ldquo;{hack.quote}&rdquo;
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {hack.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: mono,
                      fontSize: 8,
                      color: "#666",
                      border: "1px solid rgba(0,0,0,0.09)",
                      padding: "4px 10px",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      background: "rgba(0,0,0,0.02)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            {i === 0 && <CenterFocusCarousel images={carouselImages} />}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 100,
            paddingTop: 48,
            borderTop: "1px solid rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: mono,
              fontSize: 10,
              color: "#bbb",
              letterSpacing: "1.5px",
            }}
          >
            {"// if you ever get the chance to join a hackathon do it"}
          </div>
          <Link
            href="/"
            style={{
              fontFamily: syne,
              fontWeight: 700,
              fontSize: 13,
              color: "#111",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "11px 22px",
              border: "1px solid rgba(0,0,0,0.14)",
              transition: "border-color .2s, background .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.3)"
              e.currentTarget.style.background = "rgba(0,0,0,0.03)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.14)"
              e.currentTarget.style.background = "transparent"
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
