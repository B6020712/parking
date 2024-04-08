"use client"

import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from "next/navigation";

export default function DeleteParking({ parkingId }) {
    const router = useRouter()

    const handleDelete = async () => {
        
        const res = await fetch(`http://localhost:3000/parking/${parkingId}`, {
            method: "DELETE"
        })
    
        if (!res.ok) {
            throw new Error('Something went wrong!');
        }
    
        return router.refresh()
    }

    return (
        <>
            <button onClick={handleDelete} className="text-red-400">
                <HiOutlineTrash size={24} />
            </button>
        </>
    )
}