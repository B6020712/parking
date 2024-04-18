import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function AddParkingForm ({ provinces, districts, subDistricts }) {
    const router = useRouter();

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [parkingSpace, setParkingSpace] = useState('')
    const [supportCarType, setSupportCarType] = useState('')
    const [pricing, setPricing] = useState('')

    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [subDistrict, setSubDistrict] = useState('')
    
    // provinces = provinces.map((el) => ({ id: el.id, label: el.name_th }));
    districts = districts.filter(ele => parseInt(ele.provinces.id) === parseInt(province.id))
    subDistricts = subDistricts.filter(ele => parseInt(ele.amphure.id) === parseInt(district.id))

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
            const res = await fetch('http://localhost:3000/parking', {
                method: "POST",
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

                <span className="p-2">Province</span>
                <Autocomplete
                    id="province"
                    freeSolo
                    options={provinces}
                    getOptionLabel={(option) => option.name_th ? option.name_th : ""}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={province}
                    onChange={(e, newVal) => {
                        if (newVal !== null) {
                            setProvince(newVal)
                            setDistrict("")
                            setSubDistrict("")
                        }
                    }}
                    size="small"
                    renderInput={(params) => <TextField {...params} label="Provinces Name" />}
                />

                <span className="p-2">District</span>
                <Autocomplete
                    disabled={!province} 
                    id="discrict"
                    freeSolo
                    options={districts}
                    getOptionLabel={(option) => option.name_th ? option.name_th : ""}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={district}
                    onChange={(e, newVal) => {
                        if (newVal !== null) {
                            setDistrict(newVal)
                            setSubDistrict('')
                        }
                    }}
                    size="small"
                    renderInput={(params) => <TextField {...params} label="District Name" />}
                />
                
                <span className="p-2">Sub District</span>
                <Autocomplete
                    disabled={!district} 
                    id="sub_district"
                    freeSolo
                    options={subDistricts}
                    getOptionLabel={(option) => option.name_th ? option.name_th : ""}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={subDistrict}
                    onChange={(e, newVal) => {
                        if (newVal !== null) {
                            setSubDistrict(newVal)
                        }
                    }}
                    size="small"
                    renderInput={(params) => <TextField {...params} label="Sub District Name" />}
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
                <button type="submit" className="bg-green-700 font-bond text-white py-3 px-6 w-fit">Add Parking</button>
            </form>
        </>
    )
}