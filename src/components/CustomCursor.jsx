import { forwardRef } from 'react'

const CustomCursor = forwardRef((props, ref) => {
  return <div ref={ref} id="custom-cursor" className="hidden sm:block"></div>
})

CustomCursor.displayName = 'CustomCursor'

export default CustomCursor
