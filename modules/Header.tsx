import Script from 'next/script'
import React from 'react'

export default function Header() {
  return (
    <header>
        <Script src='https://telegram.org/js/telegram-web-app.js' id="show-banner" />
    </header>
  )
}
