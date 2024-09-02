"use client"
import React from 'react'
import {
    WebAppProvider
  } from '@vkruglikov/react-telegram-web-app';

export default function TelegramWapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <WebAppProvider>
        {children}
    </WebAppProvider>
  )
}
