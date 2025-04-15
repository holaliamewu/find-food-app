import Link from 'next/link';

export default function StartPage() {
    return (
        <div className="flex flex-col justify-center items-center h-[100svh] font-[manrope]">
            <h1 className="text-3xl font-bold mb-4">Find food anywhere!</h1>
            <h1 className='text-xl'>Nothing Here</h1>
            <p className="text-sm text-stone-600">We're still cooking tho.</p>
            <Link href="/auth" className="px-3 py-1.5 text-sm text-white bg-blue-500 hover:bg-blue-600 border border-stone-200 rounded-xl mt-4  ">Start exploring</Link>
        </div>
    );
}