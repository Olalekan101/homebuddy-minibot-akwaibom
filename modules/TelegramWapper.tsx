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
  return (
    <WebAppProvider >
        {children}
    </WebAppProvider>
  )
}
