"use client";

import React, {useState, useEffect} from "react";
import MapView from "../../components/map-view";
import ImageUploader from "@/components/image-uploader";

export default function MainPage() {

  const [showField, setShowField] = useState(false)

  return(
    <div className="font-[manrope]" >
      <MapView />
      <section className="w-full py-2 fixed bottom-6 left-0 z-1000" >
        <div className="flex flex-col bg-white px-4 py-2 w-9/10 md:w-fit max-w-[350px] h-fit mx-auto relative transition-all border border-stone-200 shadow gap-3 rounded-[12px] font-bold text-center" >
                <h1 onClick={ () => setShowField(true)} className="flex items-center justify-between text-left  font-[800] cursor-pointer" >Add your fav Spot 
              { showField && 
              <svg className="absolute right-4 top-3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>}
              </h1>
            { showField && 
            (
              <form className="flex flex-col gap-2" >
                <span className="flex flex-col gap-1 " >
                  <label className="text-sm font-medium text-left" >Name</label>
                  <input className="text-sm border border-stone-200 rounded-[8px] px-2 py-1" placeholder="amelia's waakye"  />
                </span>
                <span className="flex flex-col gap-1 " >
                  <label className="text-sm font-medium text-left" >Description</label>
                  <input className="text-sm border border-stone-200 rounded-[8px] px-2 py-1" placeholder="Simply, the best"  />
                </span>
                <span className="flex flex-col gap-1 " >
                  <label className="text-sm font-medium text-left" >Location</label>
                  <ImageUploader />
                </span>
                <button className="px-3 py-1.5 border border-stone-200 bg-yellow-400 rounded-[8px] text-sm shadow-xs mt-2 " >Submit</button>
              </form>
            )}
        </div>
        </section>
    </div>
  )
}