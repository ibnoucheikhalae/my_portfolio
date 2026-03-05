"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Smartphone, Lock, Filter, ShoppingCart, Code, Zap } from "lucide-react"

export default function UnionShopPage() {
  const [expandedImage, setExpandedImage] = React.useState<string | null>(null)

  const features = [
    {
      title: "Secure Login & Auth",
      icon: <Lock className="h-6 w-6" />,
      description: "Secure authentication with session persistence across app restarts",
    },
    {
      title: "Product Filtering",
      icon: <Filter className="h-6 w-6" />,
      description: "Category-based filtering and search for easy product discovery",
    },
    {
      title: "Cart Management",
      icon: <ShoppingCart className="h-6 w-6" />,
      description: "Fully functional shopping cart with quantity management and checkout",
    },
    {
      title: "Cross-Platform",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Built with Flutter for seamless iOS and Android compatibility",
    },
    {
      title: "State Management",
      icon: <Code className="h-6 w-6" />,
      description: "Provider pattern for efficient app state and data flow",
    },
    {
      title: "Responsive Design",
      icon: <Zap className="h-6 w-6" />,
      description: "Optimized UI that adapts to different screen sizes and orientations",
    },
  ]

  const techStack = ["Flutter", "Dart", "Firebase", "Provider", "Material Design"]

  return (
    <>
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-10 group"
            >
              <svg
                className="w-8 h-8 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={`/images/${expandedImage}.jpg`}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <svg className="absolute inset-0 opacity-10" width="100%" height="100%">
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
                {["Mobile", "E-Commerce", "Cross-Platform", "User Experience"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Union Shop E-Commerce
              </h1>

              <p className="text-xl text-muted-foreground">
                Modern mobile shopping platform for seamless commerce
              </p>

              <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
                A fully-featured cross-platform mobile application built with Flutter, enabling union members to browse
                products, apply filters, manage their cart, and complete purchases from their phones.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Local union shops operated without a modern digital presence. Members had to visit the shop in person
                to browse products and place orders, creating friction and limiting accessibility. Existing web-based
                solutions weren't optimized for mobile, and there was no dedicated mobile app to serve this market.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The goal was to build a cross-platform mobile application that would provide a complete shopping
                experience, from discovery to checkout, with a smooth and intuitive interface.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Solution Overview</h2>

            <p className="text-muted-foreground leading-relaxed mb-12">
              I developed a fully-featured Flutter application that enables members to shop on-the-go. The app features
              secure authentication, real-time product browsing with advanced filtering, and a persistent cart system
              that syncs user preferences across sessions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="inline-flex h-10 w-10 rounded-lg bg-primary/10 text-primary items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Technology Stack</h2>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border space-y-4 text-muted-foreground">
                <p>
                  <span className="text-primary font-semibold">Flutter & Dart:</span> Enables single codebase for iOS
                  and Android, reducing development time while maintaining native performance.
                </p>
                <p>
                  <span className="text-primary font-semibold">Firebase:</span> Provides authentication, real-time
                  database, and cloud functions for backend services.
                </p>
                <p>
                  <span className="text-primary font-semibold">Provider Pattern:</span> State management solution for
                  efficient app state handling and data flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Results & Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Delivered a production-ready prototype with all core features implemented and tested on both iOS and
                  Android platforms.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Capabilities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Demonstrated strong competence in cross-platform mobile development, UX design, and building
                  production-grade applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Key Learnings</h2>

            <div className="rounded-2xl border border-border bg-card p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-primary font-semibold">State Management Trade-offs:</span> Deep dive into
                    Provider vs Riverpod patterns, understanding when each is optimal for different app architectures.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-primary font-semibold">Offline-First Design:</span> Importance of designing
                    mobile experiences that work seamlessly online and offline, with proper synchronization logic.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-primary font-semibold">Cart Edge Cases:</span> Handling complex scenarios like
                    out-of-stock items, cart persistence, quantity updates, and payment flow interruptions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-2xl text-center rounded-2xl border border-border bg-card p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">View the Code</h3>
            <p className="text-muted-foreground mb-8">Explore the full project on GitHub to see the implementation</p>
            <a
              href="https://github.com/ibnoucheikhalae/union_shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20"
            >
              View on GitHub
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

import React from "react"
