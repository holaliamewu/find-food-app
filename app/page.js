"use client";

import React, {useState, useEffect} from "react";
import MapView from "./components/map-view";

export default function MainPage() {

  const [showSuggestions, setShowSuggestions] = useState(false)

  return(
    <div className="font-geistMono" >
      <MapView />
      <section className="w-full py-2 fixed bottom-6 left-0 z-1000" >
        <div className="flex flex-col bg-white w-fit h-fit mx-auto transition-all border border-stone-200 shadow gap-3 p-2 rounded-xl font-bold text-center" >
            <h1 onClick={ () => setShowSuggestions(item => !item)} className="text-left text-sm cursor-pointer" >Look around</h1>
            { showSuggestions && 
            (<section className="flex gap-2 transition-all font-medium" >
                <div className="w-32 rounded-lg aspect-video bg-gradient-to-br from-green-50 to-green-300" >Mohammed Maame Waakye</div>
                <div className="w-32 rounded-lg aspect-video bg-gradient-to-br from-teal-50 to-teal-300" >Indomie Wura</div>
                <div className="w-32 rounded-lg aspect-video bg-gradient-to-br from-orange-50 to-orange-300" >Oblogo Palace Gobe</div>
            </section>)}
        </div>
        </section>
    </div>
  )
}