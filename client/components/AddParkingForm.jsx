import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddParkingForm ({ provinces, districts, subDistricts }) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [parkingSpace, setParkingSpace] = useState('')
    const [supportCarType, setSupportCarType] = useState('')
    const [pricing, setPricing] = useState('')

    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [subDistrict, setSubDistrict] = useState('')

    const router = useRouter();

    districts = districts.filter(ele => parseInt(ele.provinces.id) === parseInt(province))
    subDistricts = subDistricts.filter(ele => parseInt(ele.amphure.id) === parseInt(district))
    
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
                <input 
                    id="province"
                    name="province" 
                    list="provinces_list" 
                    className="border border-slate-200 px-8 pr-2" 
                    onChange={(e) => {
                        setProvince(e.target.value)
                        setDistrict('')
                        setSubDistrict('')
                    }}
                    value={province}
                    placeholder="Provinces Name"
                />
                <datalist id={'provinces_list'}>
                    {
                        provinces.map((data) => (
                            <option key={data.id} value={data.id}>{data.name_th}</option>
                        ))
                    }
                </datalist>

                <span className="p-2">District</span>
                <input 
                    id="discrict" 
                    name="discrict" 
                    list="districts_list" 
                    className="border border-slate-200 px-8 pr-2" 
                    disabled={!province} 
                    onChange={(e) => {
                        setDistrict(e.target.value)
                        setSubDistrict('')
                    }}
                    value={district}
                    placeholder="Districts Name"
                />
                <datalist id={'districts_list'}>
                    {
                        districts.map((data) => (
                            <option key={data.id} value={data.id}>{data.name_th}</option>
                        ))
                    }
                </datalist>
                
                <span className="p-2">Sub District</span>
                <input 
                    id="sub_district" 
                    name="sub_district" 
                    list="sub_districts_list" 
                    className="border border-slate-200 px-8 pr-2" 
                    disabled={!district}
                    onChange={(e) => setSubDistrict(e.target.value)}
                    value={subDistrict}
                    placeholder="Sub Districts Name"
                />
                <datalist id={'sub_districts_list'}>
                    {
                        subDistricts.map((data) => (
                            <option key={data.id} value={data.id}>{data.name_th}</option>
                        ))
                    }
                </datalist>

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