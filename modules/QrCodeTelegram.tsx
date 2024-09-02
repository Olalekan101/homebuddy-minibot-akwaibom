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
      const [showQrPopup, closeQrPopup] = useScanQrPopup();
      const showPopup = useShowPopup();
      console.log(showPopup);
      
  return (
    <div className='w-full mx-auto flex justify-center'>
      <Button onClick={() =>
              
                showQrPopup(
                    {
                      text: 'Scan Code',
                    },
                    text => {
                      closeQrPopup();
                      showPopup({
                        message: text,
                      });
                    },
                  )          
            }>
        Scan QrCode
      </Button>
    </div>
  )
}
