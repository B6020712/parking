"use client"

import EditParkingForm from "@/components/EditParkingForm"
let fetchUrl = 'http://localhost:3000/';

async function getProvinces() {
    const resProvince = await fetch(`${fetchUrl}provinces`)
    if (!resProvince.ok) {
        throw new Error(`Can't get ${content}s`);
    }
    return resProvince.json();
}

async function getDistricts() {
    const resDistricts = await fetch(`${fetchUrl}amphures`, {
        method: "GET"
    })

    if (!resDistricts.ok) {
        throw new Error(`Can't get ${content}s`)
    }
    return resDistricts.json()
}

async function getSubDistricts() {
    const resSubDistricts = await fetch(`${fetchUrl}subdistricts`)
    if (!resSubDistricts.ok) {
        throw new Error(`Can't get ${content}s`);
    }
    return resSubDistricts.json()
}
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
    const provinces = await getProvinces();
    const districts = await getDistricts();
    const subDistricts = await getSubDistricts();

    return (
        <>
            <EditParkingForm parking={parking} provinces={provinces} districts={districts} subDistricts={subDistricts} />
        </>
    )
}