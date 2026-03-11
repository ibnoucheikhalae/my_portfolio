"use client"

import { useEffect, useRef } from "react"

export function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl")
    if (!gl) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const vert = `
      attribute vec2 a_pos;
      void main(){ gl_Position = vec4(a_pos,0,1); }
    `
    const frag = `
      precision mediump float;
      uniform vec2  u_res;
      uniform float u_time;
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p);
        f = f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
                   mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      float fbm(vec2 p){
        float v=0., a=.5;
        for(int i=0;i<5;i++){v+=a*noise(p);p*=2.1;a*=.5;}
        return v;
      }
      void main(){
        vec2 uv = gl_FragCoord.xy / u_res;
        uv.y = 1.-uv.y;
        float t = u_time * .18;
        vec2 p1 = uv + vec2(t*.3, t*.15);
        vec2 p2 = uv + vec2(-t*.2, t*.25);
        float f1 = fbm(p1 * 2.8);
        float f2 = fbm(p2 * 2.2 + f1);
        vec3 dark   = vec3(.025, .008, .008);
        vec3 mid    = vec3(.10, .022, .018);
        vec3 bright = vec3(.22, .04, .03);
        vec3 col = mix(dark, mid, f2);
        col = mix(col, bright, smoothstep(.38,.75,f1*f2*1.6));
        float radial = 1.-length(uv-vec2(.72,.42))*1.3;
        col += vec3(.18,.03,.02) * max(0.,radial)*radial*.55;
        float radial2 = 1.-length(uv-vec2(.25,.65))*1.5;
        col += vec3(.08,.01,.01) * max(0.,radial2)*radial2*.4;
        col *= .55;
        col = clamp(col,0.,1.);
        gl_FragColor = vec4(col,1);
      }
    `

    function compile(type: number, src: string) {
      const sh = gl!.createShader(type)!
      gl!.shaderSource(sh, src)
      gl!.compileShader(sh)
      return sh
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,3,-1,-1,3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, "a_pos")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes  = gl.getUniformLocation(prog, "u_res")
    const uTime = gl.getUniformLocation(prog, "u_time")

    const start = performance.now()
    let rafId: number
    const frame = () => {
      const t = (performance.now() - start) / 1000
      gl!.uniform2f(uRes, canvas.width, canvas.height)
      gl!.uniform1f(uTime, t)
      gl!.drawArrays(gl!.TRIANGLES, 0, 3)
      rafId = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

    // Create particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
    }))

    let animationId: number

    const animate = () => {
      // Very light clear - almost transparent
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        // Draw faint WHITE dots
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw very faint lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 180) {
            const opacity = (1 - dist / 180) * 0.15
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  )
}
