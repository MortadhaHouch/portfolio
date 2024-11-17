
import { useEffect, useState } from "react"
export const useMousePosition = ()=>{
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      setX(event.clientX)
      setY(event.clientY)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])
  return {x, y}
}