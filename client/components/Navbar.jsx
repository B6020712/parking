import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center bg-stone-400 px-8 py-4">
                <Link className="text-white text-3xl font-bold" href={"/"}>Parking</Link>
                <Link className="text-white hover:bg-stone-300 border border-slate-200 p-4" href={"/addParking"}>Add Parking</Link>
            </nav>
        </>
    )
}