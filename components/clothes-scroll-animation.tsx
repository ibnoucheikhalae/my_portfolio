"use client"

import { useEffect, useRef } from "react"

export function ClothesScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Use window full dimensions
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setSize()

    interface Item {
      x: number
      y: number
      w: number
      h: number
      r: number
      s: number
      t: "shirt" | "pants" | "dress"
    }

    const items: Item[] = []

    const create = (yOff = 0): Item => {
      const types: ("shirt" | "pants" | "dress")[] = ["shirt", "pants", "dress"]
      return {
        x: Math.random() * (canvas.width - 150),
        y: yOff - 150,
        w: 70 + Math.random() * 110,
        h: 100 + Math.random() * 140,
        r: Math.random() * Math.PI * 2,
        s: 0.4 + Math.random() * 1,
        t: types[Math.floor(Math.random() * 3)],
      }
    }

    const drawShirt = () => {
      const bw = 0.6, bh = 0.5
      ctx.fillRect(-bw / 2, 0, bw, bh)
      ctx.strokeRect(-bw / 2, 0, bw, bh)
      ctx.fillRect(-bw / 2 - 0.2, 0.1, 0.2, bh * 0.4)
      ctx.strokeRect(-bw / 2 - 0.2, 0.1, 0.2, bh * 0.4)
      ctx.fillRect(bw / 2, 0.1, 0.2, bh * 0.4)
      ctx.strokeRect(bw / 2, 0.1, 0.2, bh * 0.4)
    }

    const drawPants = () => {
      const d = 0.3
      ctx.fillRect(-d, 0, d * 0.3, 1)
      ctx.strokeRect(-d, 0, d * 0.3, 1)
      ctx.fillRect(d, 0, d * 0.3, 1)
      ctx.strokeRect(d, 0, d * 0.3, 1)
    }

    const drawDress = () => {
      const pts = [[-0.33, 0], [0.33, 0], [0.5, 1], [-0.5, 1]]
      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      pts.forEach((p) => ctx.lineTo(p[0], p[1]))
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
      ctx.strokeRect(-0.25, -0.08, 0.15, 0.1)
      ctx.strokeRect(0.25 - 0.15, -0.08, 0.15, 0.1)
    }

    for (let i = 0; i < 30; i++) {
      items.push(create((i * canvas.height) / 30))
    }

    let aid: number

    const loop = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      items.forEach((item, i) => {
        item.y += item.s
        item.r += 0.025

        if (item.y > canvas.height + 300) {
          items[i] = create(-300)
        }

        ctx.save()
        ctx.translate(item.x + item.w / 2, item.y + item.h / 2)
        ctx.rotate(item.r)
        ctx.scale(item.w, item.h)

        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
        ctx.lineWidth = 0.05
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)"

        if (item.t === "shirt") drawShirt()
        else if (item.t === "pants") drawPants()
        else drawDress()

        ctx.restore()
      })

      aid = requestAnimationFrame(loop)
    }

    loop()

    const onResize = () => setSize()
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(aid)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
