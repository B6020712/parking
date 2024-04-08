"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditParkingForm(props) {
    const [name, setName] = useState(props.name)
    const [address, setAddress] = useState(props.address)
    const [subDistrict, setSubDistrict] = useState(props.sub_district)
    const [parkingSpace, setParkingSpace] = useState(props.parking_space)
    const [supportCarType, setSupportCarType] = useState(props.support_car_type)
    const [pricing, setPricing] = useState(props.pricing)

    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !address || !subDistrict || !parkingSpace || !supportCarType || !pricing) {
            alert('every field must not be null')
            return;
        }

        try {
            const postData = {
                name,
                address,
                sub_district: subDistrict,
                parking_space: parkingSpace,
                support_car_type: supportCarType,
                pricing,
            }
            const res = await fetch(`http://localhost:3000/parking/${props.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(postData)
            })

            if (!res.ok) {
                return console.error(res.text())
            }

            router.refresh()
            return router.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">

                <span className="p-2">Name</span>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="border border-slate-200 px-8 py-2"
                    type="text"
                    placeholder="Name of Places"
                />

                <span className="p-2">Address</span>
                <input 
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="border border-slate-200 px-8 py-2"
                    type="text"
                    placeholder="Address"
                />

                <span className="p-2">Sub District</span>
                <input 
                    onChange={(e) => setSubDistrict(e.target.value)}
                    value={subDistrict.id}
                    className="border border-slate-200 px-8 py-2"
                    type="text"
                    placeholder="Sub District"
                />

                <span className="p-2">Parking Space</span>
                <input 
                    onChange={(e) => setParkingSpace(e.target.value)}
                    value={parkingSpace}
                    className="border border-slate-200 px-8 py-2"
                    type="number"
                    placeholder="Parking Space"
                />

                <span className="p-2">Support Car Type</span>
                <input 
                    onChange={(e) => setSupportCarType(e.target.value)}
                    value={supportCarType}
                    className="border border-slate-200 px-8 py-2"
                    type="text"
                    placeholder="Support Car Type"
                />

                <span className="p-2">Pricing</span>
                <input 
                    onChange={(e) => setPricing(e.target.value)}
                    value={pricing}
                    className="border border-slate-200 px-8 py-2"
                    type="text"
                    placeholder="Pricing"
                />
                <button type="submit" className="bg-green-700 font-bond text-white py-3 px-6 w-fit">Update Parking</button>
            </form>
        </>
    )
}