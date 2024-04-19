import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Tooltip from '@mui/material/Tooltip';

import { GiBus, GiDutchBike } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function AddParkingForm({ provinces, districts, subDistricts }) {
    const router = useRouter();

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [parkingSpace, setParkingSpace] = useState('')
    const [supportCarType, setSupportCarType] = useState([])
    const [pricing, setPricing] = useState('')

    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [subDistrict, setSubDistrict] = useState('')

    // provinces = provinces.map((el) => ({ id: el.id, label: el.name_th }));
    districts = districts.filter(ele => parseInt(ele.provinces.id) === parseInt(province.id))
    subDistricts = subDistricts.filter(ele => parseInt(ele.amphure.id) === parseInt(district.id))

    const handleSupportCarType = (event, vehicles) => {
        setSupportCarType(vehicles);
    };
    
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
                support_car_type: JSON.stringify(supportCarType),
                pricing,
            }
            const res = await fetch('http://localhost:3000/parking', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
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
            <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-3">
                <span className="p-2 bg-blue-100 rounded">Name</span>
                <TextField
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="col-span-3"
                    size="small"
                    type="text"
                    placeholder="Name of Places"
                />

                <span className="p-2 bg-blue-100 rounded">Address</span>
                <TextField
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="col-span-3"
                    size="small"
                    type="text"
                    placeholder="Address"
                />

                <span className="p-2 bg-blue-100 rounded">Province</span>
                <Autocomplete
                    id="province"
                    className="col-span-3"
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

                <span className="p-2 bg-blue-100 rounded">District</span>
                <Autocomplete
                    disabled={!province}
                    id="discrict"
                    className="col-span-3"
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

                <span className="p-2 bg-blue-100 rounded">Sub District</span>
                <Autocomplete
                    disabled={!district}
                    id="sub_district"
                    className="col-span-3"
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
                
                <span className="p-2 bg-blue-100 rounded">Support Car Type</span>
                <ToggleButtonGroup
                    color="primary"
                    size="large"
                    value={supportCarType}
                    onChange={handleSupportCarType}
                    className="col-span-3"
                >
                    <Tooltip title="Bicycles">
                        <ToggleButton value="bicycle">
                            <GiDutchBike />
                        </ToggleButton>
                    </Tooltip>
                    <Tooltip title="Motocycles">
                        <ToggleButton value="motocycle">
                            <FaMotorcycle />
                        </ToggleButton>
                    </Tooltip>
                    <Tooltip title="Cars">
                        <ToggleButton value="car">
                            <FaCarSide />
                        </ToggleButton>
                    </Tooltip>
                    <Tooltip title="Trucks">
                        <ToggleButton value="truck">
                            <FaTruck />
                        </ToggleButton>
                    </Tooltip>
                    <Tooltip title="Buses">
                        <ToggleButton value="bus">
                            <GiBus />
                        </ToggleButton>
                    </Tooltip>
                </ToggleButtonGroup>

                <span className="p-2 bg-blue-100 rounded">Parking Space</span>
                <TextField
                    onChange={(e) => setParkingSpace(e.target.value)}
                    value={parkingSpace}
                    className="col-span-3"
                    size="small"
                    type="number"
                    placeholder="Parking Space"
                />

                <span className="p-2 bg-blue-100 rounded">Pricing</span>
                <TextField
                    onChange={(e) => setPricing(e.target.value)}
                    value={pricing}
                    className="col-span-3"
                    size="small"
                    type="text"
                    placeholder="Pricing"
                />
                <div className="col-end-5 flex justify-end">
                    <button type="submit" className="mt-4 hover:bg-blue-600 bg-blue-400 font-bond text-white py-3 px-6 w-fit">Submit</button>
                </div>
            </form>
        </>
    )
}