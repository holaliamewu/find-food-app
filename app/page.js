import MapView from "./components/map-view";

export default function MainPage() {
  return(
    <div className="font-[Geist]" >
      <h1 className="w-full flex items-center justify-center bg-white h-24 absolute top-0 left-0 z-1000 text-3xl font-bold text-center" >My food corner</h1>
      <MapView />
    </div>
  )
}