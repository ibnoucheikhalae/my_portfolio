import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hackathon Wins | Alae Ibnoucheikh",
  description: "Full details on hackathon projects Retail Therapist and Soul Echo.",
}

export default function HackathonsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
