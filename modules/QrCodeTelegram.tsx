"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import {
    useScanQrPopup,
    useShowPopup,
  } from '@vkruglikov/react-telegram-web-app';
import { Button, Form, Typography } from 'antd';

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
    <>
      <Typography.Title level={3}>useScanQrPopup</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ScanQrPopupDemo"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="button"
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
            showScanQrPopup
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
