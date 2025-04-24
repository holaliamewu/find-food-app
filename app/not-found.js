import Link from "next/link";

export default function NotFoundPage() {
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <p >THIS PAGE IS NOT REAL</p>
            <Link href="/map" >Back to Map</Link>
        </div>
    )
}