import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState,useRef } from "react"
import { DialogAction } from "./DialogAction"
import Image from "next/image"
import { MapPin } from "lucide-react"


export function CarouselAction() {
    const [valueDialog,setDialog] = useState(false)
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true, })
      )
      const handleTouchStart = () => {
        console.log('Touch started');
      };
  return (
    <div className="w-full h-full">
        <Carousel
      opts={{
        align: "center",

      }}
      plugins={[plugin.current]}
      orientation="vertical"
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 h-[200px] " >
            <div className="p-1 h-[150px]" onClick={()=>setDialog(!valueDialog)} onTouchStart={()=>setDialog(!valueDialog)}>
              <Card >
                <CardContent className="flex items-start justify-start p-2 h-[150px] gap-1">
                    <div className="w-[65%] h-full">
                        <Image src={"/images/sample_image.jpg"} alt="sample image" className="rounded-md object-cover" width={200} height={150} />
                    </div>
                  <div className="flex flex-col gap-2 w-[35%]">
                  <div className="">
                    <p className="text-xs font-semibold">Price:</p>
                    <p className="text-sm font-semibold">#1,000,000</p>
                  </div>
                  <div className="flex flex-col gap-1">
                  <MapPin size={16} />
                    <p className="text-xs font-semibold">House Address</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs font-light italic">click for more details</p>
                  </div>
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    {valueDialog && <DialogAction/>}
    </div>
  )
}
