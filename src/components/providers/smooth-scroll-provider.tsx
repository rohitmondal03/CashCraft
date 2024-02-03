"use client"

import { useEffect } from "react"
import Lenis from '@studio-freight/lenis'

import type { TLayout } from "types"


export function SmoothScrollProvider({ children }: TLayout) {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


  return (
    <>{children}</>
  )
}