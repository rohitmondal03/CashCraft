import type { TLayout } from 'types'
import { DotBackground } from '~/components/backgrounds/dot-bg'


export default function PricingLayout({children}: TLayout) {
  return (
    <DotBackground>
      {children}
    </DotBackground>
  )
}
