import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center bg-blue-400 px-8 py-4">
                <Link className="text-white text-3xl font-bold" href={"/"}>Parking</Link>
                <Link className="text-white hover:bg-blue-600 border border-blue-200 p-4" href={"/addParking"}>Add Parking</Link>
            </nav>
        </>
    )
}