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
      console.log(showPopup,"popop",state);
      
  return (
    <>
     <Button
            onClick={() =>
              
                showQrPopup(
                    {
                      text: 'Scan student ID',
                      
                    },
                    text => {
                      closeQrPopup();
                    //   showPopup({
                    //     message: text,
                    //   });
                      
                      setState(text)
                    },
                  )
              
            }
          >
            showSetokay
          </Button>
          <div className="text-2xl text-white">{state}</div>
        </>
  )
}
