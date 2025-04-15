"use client";

import React, {useState, useEffect} from "react";
import MapView from "../components/map-view";

export default function MainPage() {

  const [showField, setShowField] = useState(false)

  return(
    <div className="font-[manrope]" >
      <MapView />
      <section className="w-full py-2 fixed bottom-6 left-0 z-1000" >
        <div className="flex flex-col bg-white p-4 w-fit h-fit mx-auto transition-all border border-stone-200 shadow gap-3 rounded-[20px] font-bold text-center" >
            <h1 onClick={ () => setShowField(true)} className="flex gap-1 text-left text-[14px] font-[800] cursor-pointer" >Add your fav Spot 
            { showField ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>:
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-plus-icon lucide-map-pin-plus"><path d="M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"/><circle cx="12" cy="10" r="3"/><path d="M16 18h6"/><path d="M19 15v6"/></svg> }
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
                
              </form>
            )}
        </div>
        </section>
    </div>
  )
}