"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import {
    useScanQrPopup,
    useShowPopup,
  } from '@vkruglikov/react-telegram-web-app';
import { Button } from '@/components/ui/button';

export default function QrCodeTelegram() {
    const [state,setState] = useState("")
      const [showQrPopup, closeQrPopup] = useScanQrPopup();
      const showPopup = useShowPopup();
      console.log(showPopup);
      
  return (
    <div className='w-full mx-auto flex justify-center'>
     <Button
            onClick={() =>
              showQrPopup(
                {
                  text: 'Привет друг',
                },
                text => {
                  closeQrPopup();
                  showPopup({
                    message: text,
                  });
                },
              )
            }
          >
            showS
          </Button>
    </div>
  )
}
