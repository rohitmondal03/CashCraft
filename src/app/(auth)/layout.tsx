import type { TLayout } from 'types'
import { GridBackground } from '~/components/backgrounds/grid-bg'


export default function AuthPagesLayout({children}: TLayout) {
  return (
    <>
      <GridBackground>
        {children}
      </GridBackground>
    </>
  )
}
