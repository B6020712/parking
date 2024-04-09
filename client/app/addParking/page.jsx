"use client";

import AddParkingForm from "@/components/AddParkingForm";
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
    // return resDistricts.filter(data => elemId === data.provinces.id)
}

async function getSubDistricts() {
    const resSubDistricts = await fetch(`${fetchUrl}subdistricts`)
    if (!resSubDistricts.ok) {
        throw new Error(`Can't get ${content}s`);
    }
    return resSubDistricts.json()
    // return resSubDistricts.filter(data => data.amphure_id === elemId)
}

export default async function addParking() {
    const provinces = await getProvinces();
    const districts = await getDistricts();
    const subDistricts = await getSubDistricts();
    
    return (
        <>
            <AddParkingForm provinces={provinces} districts={districts} subDistricts={subDistricts} />
        </>
    )
}