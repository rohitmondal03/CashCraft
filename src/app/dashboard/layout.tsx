import type { TLayout } from 'types'
import { GridBackground } from '~/components/backgrounds/grid-bg'


export default function DashboardLayout({ children }: TLayout) {
  return (
    <GridBackground>
      {children}
    </GridBackground>
  )
}
