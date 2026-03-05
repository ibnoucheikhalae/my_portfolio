"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingDown, BarChart3, Zap, Layers, Brain, Map } from "lucide-react"
import React from "react"

export default function CoastalChangeAIPage() {
  const [expandedImage, setExpandedImage] = React.useState<string | null>(null)

  const features = [
    {
      title: "Data Pipeline",
      icon: <Layers className="h-6 w-6" />,
      description: "Multi-source environmental dataset ingestion and preprocessing",
    },
    {
      title: "Change Detection",
      icon: <Brain className="h-6 w-6" />,
      description: "AI classification models to identify land-use and vegetation changes",
    },
    {
      title: "Erosion Forecasting",
      icon: <TrendingDown className="h-6 w-6" />,
      description: "Regression analysis for predicting coastal erosion rates and trends",
    },
    {
      title: "Visualization",
      icon: <Map className="h-6 w-6" />,
      description: "Interactive charts and maps revealing coastal change patterns",
    },
    {
      title: "Trend Analysis",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Statistical analysis of multi-year environmental data patterns",
    },
    {
      title: "Sustainability Reports",
      icon: <Zap className="h-6 w-6" />,
      description: "Automated report generation for planning teams and stakeholders",
    },
  ]

  const techStack = ["Java", "Machine Learning", "Data Analysis", "Environmental Science", "Python", "Visualization"]

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
                {["AI", "Sustainability", "Environmental Analysis", "Data Science"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Coastal Change AI Analysis
              </h1>

              <p className="text-xl text-muted-foreground">
                Machine learning insights for coastal environmental sustainability
              </p>

              <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
                An intelligent platform that reveals hidden patterns in coastal environmental data, enabling
                researchers and planners to understand erosion, vegetation changes, and sea-level impacts through
                advanced AI analysis and visualization.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Challenge Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coastal regions worldwide face accelerating environmental changes from climate factors, urbanization,
                and sea-level rise. Researchers collect vast amounts of satellite imagery and sensor data, but
                interpreting these datasets manually is time-consuming and prone to human bias.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The goal was to develop an intelligent system that could automatically identify patterns in coastal
                data, quantify changes over time, and generate forecasts to inform sustainability planning.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">AI-Powered Solution</h2>

            <p className="text-muted-foreground leading-relaxed mb-12">
              Built a comprehensive Java-based analysis platform that ingests multi-source environmental data and
              applies machine learning models to detect changes, quantify trends, and forecast future impacts. The
              system provides interactive visualizations and automated reports for stakeholders.
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

        {/* AI Models Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Machine Learning Models</h2>

            <div className="space-y-4">
              {[
                {
                  name: "Classification Models",
                  desc: "Detect and classify land-use changes (urban, vegetation, water bodies) with high precision",
                },
                {
                  name: "Regression Analysis",
                  desc: "Predict erosion rates and shoreline displacement based on historical environmental trends",
                },
                {
                  name: "Anomaly Detection",
                  desc: "Identify unusual coastal patterns that may indicate accelerated change or environmental stress",
                },
                {
                  name: "Time-Series Forecasting",
                  desc: "Project future coastal states based on observed trends and environmental parameters",
                },
              ].map((model, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:bg-card/50 transition-colors"
                >
                  <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-semibold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{model.name}</h3>
                    <p className="text-sm text-muted-foreground">{model.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="px-6 py-24 md:py-32 bg-card/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Technology Stack</h2>

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
                  <p className="text-primary font-semibold mb-2">Java Backend</p>
                  <p>Robust data processing and ML model pipeline implementation</p>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">Python Libraries</p>
                  <p>Scikit-learn for ML models, Pandas for data processing, Matplotlib/Seaborn for visualization</p>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">Data Integration</p>
                  <p>Handling satellite imagery, sensor data, and multi-temporal environmental datasets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Results & Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Model Validation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI model outputs aligned with published environmental studies, validating the system's accuracy and
                  demonstrating practical utility for coastal management.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Actionable Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generated forecasts and trend analysis enabling planners to make informed decisions about coastal
                  protection and urban development strategies.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Sustainability Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identified measurable erosion trends and vegetation changes informing conservation priorities and
                  climate adaptation planning.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Scalability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  System architecture designed to handle expanding datasets and adapted for analysis of other coastal
                  regions globally.
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
                    <span className="text-primary font-semibold">Real-World Data Challenges:</span> Handling missing
                    values, temporal alignment issues, and inconsistent data quality across multiple satellite sources.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-primary font-semibold">Model Interpretability:</span> Translating complex AI
                    outputs into actionable insights for non-technical environmental stakeholders and policymakers.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-primary font-semibold">Domain Knowledge:</span> Importance of understanding
                    coastal processes, climate metrics, and environmental science to build meaningful AI systems.
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
            <p className="text-muted-foreground mb-8">Explore the AI models and analysis code on GitHub</p>
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
