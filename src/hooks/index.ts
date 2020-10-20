import { useEffect } from 'react'

export function useClickOutsideElement(ref: any, cb: () => void) {
  useEffect(() => {
    // run callback if clicked 
    // on outside of target element
    function onClick(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb()
      }
    }
    
    // Bind the event listener
    document.addEventListener<any>(
      'mousedown', 
      onClick
    )

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener<any>(
        'mousedown', 
        onClick
      )
    }
  }, [ref, cb])
}
