import Link from "next/link"
import DeleteParking from "./DeleteParking"
import { HiPencilAlt } from "react-icons/hi"

async function getParkingLists() {
    try {
        const res = await fetch('http://localhost:3000/parking', {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch parking")
        }

        return res.json()
    } catch (error) {
        console.error(error)
    }
}

export default async function ParkingLists() {
    let parkings = await getParkingLists()
    
    return (
        <>
            <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {
                    parkings.map((parking) => (
                        <div key={parking.id} className="p-4 grid justify-stretch sm:grid-cols-1 md:grid-cols-2 gap-2 items-start border border-slate-200 bg-stone-50">
                            <div className="col-span-2 flex justify-between">
                                <div className="text-lg">{parking.name}</div>
                                <div className="flex items-center">
                                    <Link className="hover:cursor-pointer" href={`/editParking/${parking.id}`}>
                                        <HiPencilAlt size={18} />
                                    </Link>
                                    <DeleteParking className="hover:cursor-pointer" parkingId={parking.id} />
                                </div>
                            </div>
                            <div>Address          </div><div>{parking.address}</div>
                            <div>Sub District     </div><div>{parking.sub_district.name_th}</div>
                            <div>Parking Space    </div><div>{parking.parking_space}</div>
                            <div>Support Car Type </div><div>{parking.support_car_type}</div>
                            <div>Pricing          </div><div>{parking.pricing}</div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}