"use client"
import React, { useEffect } from 'react'
import {
    WebAppProvider
  } from '@vkruglikov/react-telegram-web-app';

export default function TelegramWapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    useEffect(() => {
        // Create a script element to load the Telegram Web Apps SDK
        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-web-app.js"; // Load Telegram SDK
        script.async = true;
    
        // Append the script to the document body
        document.body.appendChild(script);
    
        // Clean up the script when the component is unmounted
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <WebAppProvider >
        {children}
    </WebAppProvider>
  )
}
