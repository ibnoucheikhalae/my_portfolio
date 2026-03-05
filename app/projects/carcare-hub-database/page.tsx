"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Database, Zap, Lock, BarChart3, Layers, Code } from "lucide-react"
import React from "react"

export default function CarCareHubPage() {
  const [expandedImage, setExpandedImage] = React.useState<string | null>(null)

  const features = [
    {
      title: "15-Table Schema",
      icon: <Layers className="h-6 w-6" />,
      description: "Fully normalized relational database up to 3NF with proper referential integrity",
    },
    {
      title: "Complex Queries",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Advanced SQL queries for revenue analysis, service trends, and technician workload",
    },
    {
      title: "Business Logic",
      icon: <Code className="h-6 w-6" />,
      description: "Stored procedures encapsulating common business operations and workflows",
    },
    {
      title: "Data Integrity",
      icon: <Lock className="h-6 w-6" />,
      description: "Cascading constraints and referential integrity ensuring data consistency",
    },
    {
      title: "Performance",
      icon: <Zap className="h-6 w-6" />,
      description: "Index optimization on frequently queried fields for fast reporting",
    },
    {
      title: "Production-Ready",
      icon: <Database className="h-6 w-6" />,
      description: "Comprehensive documentation and sample data for immediate deployment",
    },
  ]

  const techStack = ["PostgreSQL", "SQL", "Normalization Theory", "Database Design", "Query Optimization"]

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
                {["Database Design", "Data Modeling", "SQL", "Business Logic"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                CarCare Hub Database
              </h1>

              <p className="text-xl text-muted-foreground">
                Enterprise data architecture for automotive service management
              </p>

              <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
                A comprehensive relational database system designed to manage every aspect of a car service business:
                customers, vehicles, appointments, services, invoicing, inventory, and multi-location operations.
              </p>
            </div>
          </div>
        </section>

        {/* Business Need Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Business Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A growing car service business operated across multiple workshop locations with manual record-keeping
                for customers, vehicles, service appointments, technician assignments, and invoicing. This created data
                silos, errors, and made it impossible to analyze business performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The need was for a robust, normalized database system that could handle the complete business workflow
                from customer registration through service delivery, parts inventory management, and financial reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Design Approach Section */}
        <section className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Database Architecture</h2>

            <p className="text-muted-foreground leading-relaxed mb-12">
              Designed a comprehensive PostgreSQL database with 15 interconnected tables following normalization
              principles up to 3NF. The schema covers the entire business domain while maintaining referential integrity
              and data consistency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="inline-flex h-10 w-10 rounded-lg bg-primary/10 text-primary items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Tables Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Core Data Entities</h2>

            <div className="space-y-4">
              {[
                { name: "Customers", desc: "Client information, contact details, service history" },
                { name: "Vehicles", desc: "Vehicle details, make/model, owner relationships, service records" },
                { name: "Appointments", desc: "Service bookings, scheduling, technician assignment" },
                { name: "Services", desc: "Service catalog, pricing, duration, required parts" },
                { name: "Service Orders", desc: "Actual service instances, work performed, completion status" },
                { name: "Invoicing", desc: "Billing records, payment tracking, multi-location accounting" },
                { name: "Inventory", desc: "Parts management, stock levels, supplier relationships" },
                { name: "Technicians", desc: "Staff profiles, specializations, workload management" },
              ].map((entity, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:bg-card/50 transition-colors"
                >
                  <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-semibold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{entity.name}</h3>
                    <p className="text-sm text-muted-foreground">{entity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Technology & Techniques</h2>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-wrap gap-3 mb-8">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <p className="text-primary font-semibold mb-2">Normalization (3NF)</p>
                  <p>Eliminated data redundancy while maintaining referential integrity for a clean, maintainable schema</p>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">Indexing Strategy</p>
                  <p>Strategic index placement on frequently queried fields for optimal query performance and reporting</p>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">Stored Procedures</p>
                  <p>Business logic encapsulation for common operations like invoice generation and service completion</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Results & Deliverables</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Schema Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete 15-table normalized schema with comprehensive documentation, ERD diagrams, and deployment
                  scripts ready for production.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Query Library</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suite of complex analytical queries for revenue analysis, service trends, technician performance,
                  and inventory reporting.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Sample Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Realistic test data demonstrating the system's capability to handle multi-location, multi-customer,
                  complex business scenarios.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Documentation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Detailed schema documentation, business logic explanation, and integration guidelines for developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings Section */}
        <section className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Key Learnings</h2>

            <div className="rounded-2xl border border-border bg-card p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-primary font-semibold">Normalization Benefits:</span> Understanding how proper
                    normalization eliminates anomalies and makes schemas maintainable and scalable.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-primary font-semibold">Business Perspective:</span> Designing from business
                    requirements rather than technical constraints, ensuring the database serves real operational needs.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-primary font-semibold">Query Optimization:</span> Writing efficient SQL
                    queries, proper indexing strategies, and query planning for analytical workloads.
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
            <p className="text-muted-foreground mb-8">Explore the full database schema and queries on GitHub</p>
            <a
              href="https://github.com"
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
