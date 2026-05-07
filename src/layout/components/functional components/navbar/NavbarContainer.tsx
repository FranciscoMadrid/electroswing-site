import { useMotionValueEvent, useScroll, motion, AnimatePresence, type Variants } from 'motion/react'
import React, { useState } from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

export default function NavbarContainer() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(true)
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
      if (current > previous && current > 150) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }
  )
  
  return (
    <nav className='fixed w-full z-250'>
    <DesktopNavbar
      hidden={hidden}
    />
    <MobileNavbar
      hidden={hidden}
    />
    </nav>
  )
}
