import { useEffect, useState } from 'react'

const Footer = () => {

  const [hasScrollbar, setHasScrollbar] = useState(false)

  useEffect(() => {
    const body = document.body;
    const scrollbarWidth = body.clientWidth < window.innerWidth  // check if scrollbar is visible
    setHasScrollbar(scrollbarWidth)
  })
  return (
    <footer className={`${hasScrollbar ? '' : 'fixed'} flex justify-center bottom-0 w-full p-4 text-white`}>
      <p>Copyright © {new Date().getFullYear()} dopamine</p>
    </footer>
  )
}

export default Footer;
