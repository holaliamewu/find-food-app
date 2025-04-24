import Link from 'next/link';

export default function SettingsPage() {
    return (
        <div className="flex flex-col mx-auto p-5 font-[manrope] min-h-screen">
        <Link href="/map" className="absolute top-5 left-5 flex items-center text-sm gap-1 text-stone-500 hover:text-stone-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"
            >
                <path d="M15 18l-6-6 6-6"/>
            </svg>
            Map
        </Link>
        <div className="w-fit mx-auto ">
            <h1 className="text-2xl font-bold mb-5">Settings</h1>
            
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Profile</h2>
                <div className="flex flex-col gap-4 mb-4">
                <div className="flex flex-col ">
                    <label className="text-sm font-medium mb-1">
                        Name
                    </label>
                    <input 
                        type="text" 
                        placeholder="Amewu Emmanuel Mensah" 
                        className=" w-[70vw] max-w-sm px-3 py-1.5 text-[14px] border border-stone-300 rounded-[12px]"
                    />
                </div>
                <div className="flex flex-col ">
                    <label className="text-sm font-medium mb-1">
                        Email
                    </label>
                    <input 
                        type="text" 
                        placeholder="me.amewu@gmail.com" 
                        className="px-3 py-1.5 text-[14px] border border-stone-300 rounded-[12px] w-full max-w-sm"
                    />
                </div>
                </div>
            </section>

        </div>
        </div>
    );
};