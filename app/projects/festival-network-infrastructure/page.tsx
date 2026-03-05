"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Wifi, Shield, Zap, Network, Database, Server } from "lucide-react"
import { useEffect, useState } from "react"

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
}

export default function FestivalNetworkPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})

  const observeElement = (id: string) => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [id]: true }))
          }
        },
        { threshold: 0.1 }
      )

      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
  }

  useEffect(() => {
    const sections = [
      "hero",
      "introduction",
      "assumptions",
      "security",
      "logical",
      "wireless",
      "physical",
      "devices",
      "costs",
    ]
    sections.forEach(observeElement)
  }, [])

  const assumptions = [
    "Network must support 35,000 attendees",
    "Reliable connectivity for staff and payment terminals",
    "Secure segmentation between staff, guest, and administrative networks",
    "Wireless coverage across the showground",
    "High uptime and redundancy",
    "Weather-resistant outdoor infrastructure",
  ]

  const securityAreas = [
    {
      title: "Physical Security",
      icon: <Shield className="h-6 w-6" />,
      items: [
        "Secure equipment cabinets",
        "Restricted access network rooms",
        "Protected underground cabling",
        "Weather-resistant hardware",
      ],
    },
    {
      title: "Digital Security",
      icon: <Network className="h-6 w-6" />,
      items: [
        "VLAN segmentation",
        "Firewall rules",
        "Access control lists",
        "VPN access for administrators",
        "Port security and DHCP snooping",
      ],
    },
    {
      title: "Environmental Security",
      icon: <Zap className="h-6 w-6" />,
      items: [
        "Weatherproof hardware",
        "Protected cabling routes",
        "Monitoring systems",
        "Redundant power and equipment placement",
      ],
    },
  ]

  const devices = [
    {
      name: "Cisco 1921/K9 Router",
      specs: "Integrated Services Router",
      role: "Core routing device for network traffic management and inter-VLAN routing",
      icon: <Network className="h-8 w-8" />,
    },
    {
      name: "Cisco CBS350-48P-4G Switch",
      specs: "48-port Managed Gigabit Switch",
      role: "Primary distribution switch with PoE for access point power delivery",
      icon: <Server className="h-8 w-8" />,
    },
    {
      name: "Cisco SF350-24P Switch",
      specs: "24-port Managed Gigabit Switch",
      role: "Secondary switches for network segmentation and VLAN trunking",
      icon: <Server className="h-8 w-8" />,
    },
    {
      name: "Excel Cat6 UTP Cable",
      specs: "Copper Twisted Pair",
      role: "Ethernet cabling for device connections and access point backhaul",
      icon: <Database className="h-8 w-8" />,
    },
    {
      name: "RS PRO OS2 Fibre Cable",
      specs: "Single-mode Optical Fiber",
      role: "Long-distance backbone links between network zones and main distribution",
      icon: <Wifi className="h-8 w-8" />,
    },
    {
      name: "Ubiquiti UniFi AP AC HD",
      specs: "High-Density Access Point",
      role: "Wireless coverage for guest network with 4x4 MIMO technology",
      icon: <Wifi className="h-8 w-8" />,
    },
  ]

  const costs = [
    { component: "Cisco 1921/K9 Router", unitPrice: "£253.71", quantity: 5, total: "£1,268.55" },
    { component: "Cisco CBS350-48P-4G Switch", unitPrice: "£1,026", quantity: 10, total: "£10,260" },
    { component: "Cisco SF350-24P Switch", unitPrice: "£643.60", quantity: 29, total: "£18,560" },
    { component: "Excel Cat6 UTP Cable", unitPrice: "£0.48/m", quantity: "2,451m", total: "£1,176.48" },
    { component: "RS PRO OS2 Fibre Cable", unitPrice: "£1.17/m", quantity: "6,296m", total: "£7,366.32" },
    { component: "Ubiquiti UniFi AP AC HD", unitPrice: "£319.00", quantity: 63, total: "£20,097" },
  ]

  const totalCost = "£58,728.35"

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden"
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <svg className="absolute inset-0 opacity-20" width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="space-y-6">
              <div className="flex justify-center gap-2 flex-wrap">
                {["Networking", "Infrastructure Design", "Security Architecture", "Wireless Networking"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Festival Network Infrastructure
              </h1>

              <p className="text-xl text-muted-foreground">
                Secure and scalable network infrastructure for a 35,000+ attendee outdoor event
              </p>

              <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
                A comprehensive network infrastructure design featuring full logical and physical architecture,
                including VLAN segmentation, wireless coverage, security protocols, and cost optimization for a
                large-scale outdoor festival environment.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="introduction" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This project designs the complete network infrastructure for a large-scale event environment
                  supporting 35,000+ attendees. The design addresses critical challenges inherent to outdoor events
                  while maintaining security, reliability, and scalability.
                </p>
                <p className="font-semibold text-foreground">Key Challenges:</p>
                <ul className="space-y-2 ml-4">
                  <li>• High number of concurrent users requiring seamless connectivity</li>
                  <li>• Outdoor environment subject to weather and environmental factors</li>
                  <li>• Security risks requiring strict access control and network segmentation</li>
                  <li>• Reliable connectivity for staff operations, payment systems, and public access</li>
                  <li>• Cost optimization without compromising performance or security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Assumptions Section */}
        <section id="assumptions" className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Project Assumptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assumptions.map((assumption, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{assumption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Architecture Section */}
        <section id="security" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Security Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityAreas.map((area, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="inline-flex h-12 w-12 rounded-lg bg-primary/10 text-primary items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{area.title}</h3>
                  <ul className="space-y-3">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logical Network Design Section */}
        <section id="logical" className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Logical Network Design</h2>

            <div className="rounded-2xl border border-border bg-card p-8 mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-4">Design Key</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Guest Network", color: "bg-blue-400" },
                  { label: "Staff Network", color: "bg-amber-400" },
                  { label: "Admin Network", color: "bg-primary" },
                  { label: "Backbone", color: "bg-slate-600" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`h-4 w-4 rounded-full ${item.color}`} />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {["larea1", "larea2", "larea3"].map((img, i) => (
                <div
                  key={i}
                  className="group relative h-64 rounded-2xl border border-border overflow-hidden bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <Image
                    src={`/images/${img}.jpg`}
                    alt={`Logical Network Area ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-muted-foreground leading-relaxed">
                The logical design employs strict VLAN segmentation to isolate guest, staff, and administrative
                traffic. Guest network (VLAN 100) provides public WiFi with bandwidth limitations. Staff network
                (VLAN 200) connects point-of-sale terminals and operational systems. Administrative network (VLAN
                300) secures management traffic with restricted access. Layer 3 switches handle inter-VLAN routing
                with access control lists enforcing security policies. This architecture ensures scalability while
                preventing unauthorized access between network segments.
              </p>
            </div>
          </div>
        </section>

        {/* Transition Text */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              After defining the logical network structure and security framework, the next critical step involves
              implementing this design across the physical showground infrastructure, accounting for cable routing,
              equipment placement, and outdoor environmental factors.
            </p>
          </div>
        </section>

        {/* Wireless Coverage Section */}
        <section id="wireless" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Wireless Access Point Coverage</h2>

            <div className="relative h-96 md:h-[500px] rounded-2xl border border-border overflow-hidden bg-card mb-12">
              <Image
                src="/images/wap-coverage.jpg"
                alt="Wireless Access Point Coverage Plan"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wireless coverage planning ensures seamless connectivity across the entire 35,000+ person showground.
                The deployment strategy utilizes 63 Ubiquiti UniFi AP AC HD access points distributed in high-density
                clusters near main attractions, seating areas, and vendor zones.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Coverage density calculated based on 1 AP per 500-800 concurrent users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>5GHz band (802.11ac) for high-capacity areas; 2.4GHz for extended range</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Access points connected via fiber backbone and Cat6 backhaul for redundancy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Capacity planning allows 50+ Mbps throughput per user during peak loads</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Physical Network Design Section */}
        <section id="physical" className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Physical Network Design</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {["parea1", "parea2", "parea3"].map((img, i) => (
                <div
                  key={i}
                  className="group relative h-64 rounded-2xl border border-border overflow-hidden bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <Image
                    src={`/images/${img}.jpg`}
                    alt={`Physical Network Area ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The physical infrastructure spans the entire showground with a hierarchical topology. Fiber backbone
                links connect three distribution hubs using single-mode OS2 cables, providing low-latency core
                connectivity with 10+ Gbps capacity.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Fiber backbone runs through protected underground ducts and aerial routes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Access point deployment uses weather-resistant PoE injectors for power delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Cable routing avoids high-traffic zones and implements redundant paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Cisco switches positioned in secure, climate-controlled equipment tents</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Devices Section */}
        <section id="devices" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Devices Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devices.map((device, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="inline-flex h-10 w-10 rounded-lg bg-primary/10 text-primary items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {device.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{device.name}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{device.specs}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{device.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Breakdown Section */}
        <section id="costs" className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Project Cost Breakdown</h2>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-card border-b border-border sticky top-0">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Component</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Unit Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Quantity</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {costs.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-background/50" : ""}>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.component}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.unitPrice}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.quantity}</td>
                        <td className="px-6 py-4 text-right text-sm font-medium text-foreground">{row.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-primary/10 border-t-2 border-primary/30">
                      <td colSpan={3} className="px-6 py-4 text-sm font-semibold text-foreground">
                        Total Project Cost
                      </td>
                      <td className="px-6 py-4 text-right text-lg font-bold text-primary">{totalCost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-2xl text-center rounded-2xl border border-border bg-card p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Network Design?</h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss your infrastructure challenges and build scalable, secure solutions.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20"
            >
              Get In Touch
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
