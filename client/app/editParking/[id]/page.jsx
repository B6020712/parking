import EditParkingForm from "@/components/EditParkingForm"

async function getParkingById(id) {
    const res = await fetch(`http://localhost:3000/parking/${id}`, {
        method: "GET"
    })
    
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export default async function editParking({ params }) {
    const parking = await getParkingById(params.id)

    return (
        <>
            <EditParkingForm {...parking} />
        </>
    )
}