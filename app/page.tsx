"use client"
import HomePage from "@/modules/HomePage";
import Image from "next/image";
import {
  WebAppProvider
} from '@vkruglikov/react-telegram-web-app';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-blue-950 bg-gradient-to-t from-gray-950">
      <WebAppProvider>

     <HomePage/>
      </WebAppProvider>
    </main>
  );
}
