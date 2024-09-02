import Script from 'next/script'
import React from 'react'

export default function Footer() {
  return (
    <footer>
        <Script src='https://telegram.org/js/telegram-web-app.js' id="show-banner" />
    </footer>
  )
}
