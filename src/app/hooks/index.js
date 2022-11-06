import { useEffect, useRef, useState } from 'react'

export const useWindowSize = () => {
  const isBrowser = typeof window !== 'undefined'

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    if (!isBrowser) return
    const handleResize = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
    try {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } catch (error) {
      console.log(error)
    }
  }, [])
  return windowSize
}


export const isDesktop = () => {
  const windowWidth = useWindowSize().width
  return windowWidth > 960
}
