"use client";

import React, {useState, useEffect} from "react";
import MapView from "../../components/map-view";
import ImageUploader from "@/components/image-uploader";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MainPage() {

  const [showForm, setShowForm] = useState(false)

  return(
    <div className="font-[manrope]" >
      <section className="w-full py-2 fixed top-6 left-0 z-1000" >
        <motion.div drag dragSnapToOrigin className="flex items-center justify-between bg-white  w-[90vw] md:w-[400px] h-fit px-4 py-2 mx-auto relative border border-stone-200 shadow gap-3 rounded-full font-bold text-center" >
          <span className="">Logo</span>
          <nav className="flex gap-2 text-left font-[800] cursor-pointer" >
            <Link href="/settings" className="text-sm text-stone-500 cursor-pointer hover:text-stone-800" ><motion.svg whileHover={{ rotate: 90}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></motion.svg></Link>
          </nav>
        </motion.div>
        </section>
      <MapView />
      <section className="w-full py-2 fixed bottom-6 left-0 z-1000" >
        <motion.div 
        layout
        // style={{ width: showForm ? "90vw"}}
         className="flex flex-col bg-white  w-fit h-fit mx-auto relative border border-stone-200 shadow gap-3 rounded-[12px] font-bold text-center" >
            { !showForm && 
            <span onClick={ () => setShowForm(prev => !prev)} className="flex items-center justify-center w-fit h-fit px-3 py-1.5 " >
                <h1 className="text-left text-md   font-[800] cursor-pointer" >Add your fav Spot </h1>
              </span>}
            { showForm && 
            (
              <form className="flex flex-col w-[90vw] md:w-[400px] p-4 gap-2" >
                <span className="flex items-center justify-between">
                    <h1 className="text-left  font-[800]" >Add your favourite spot</h1>
                    { showForm && 
                    <svg onClick={ () => setShowForm(false)} className="absolute right-4 top-3 text-stone-300" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>}
                  </span>
                <span className="flex flex-col gap-1 " >
                  <label className="text-sm font-medium text-left" >Name</label>
                  <input className="text-sm border border-stone-200 rounded-[8px] px-2 py-1" />
                </span>
                <span className="flex flex-col gap-1 " >
                  <label className="text-sm font-medium text-left" >Description</label>
                  <input className="text-sm border border-stone-200 rounded-[8px] px-2 py-1"  />
                </span>
                <span className="flex flex-col gap-1 " >
                  <label className="text-sm font-medium text-left" >Photo(s)</label>
                  <ImageUploader />
                </span>
                <button className="px-3 py-1.5 border border-stone-200 bg-yellow-400 cursor-pointer rounded-[8px] text-sm shadow-xs mt-2 " >Submit</button>
              </form>
            )}
        </motion.div>
        </section>
    </div>
  )
}