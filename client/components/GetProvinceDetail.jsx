export default async function GetProvinceDetail ({ content, elemId }) {
    // if (!resProvince.ok || !resDistricts.ok || !resSubDistricts.ok) {
    //     throw new Error(`Can't get ${content}s`)
    // }
    
    let datas;
    // if (content === "province") {
    //     const resProvince = await fetch('http://localhost:3000/provinces')
    //     datas = await resProvince.json()
    // } else if (content === "district") {
        const resDistricts = await fetch('http://localhost:3000/amphures')
        datas = await resDistricts.json()
        // await datas.filter(data => elemId === data.provinces.id)
    // } else if (content === "sub_district") {
    //     const resSubDistricts = await fetch('http://localhost:3000/subdistricts')
    //     datas = await resSubDistricts.json()
    //     await datas.filter(data => data.amphure_id === elemId)
    // }
    
    console.log(datas)
    
    return (
        <>
            <datalist id={`${content}s_list`}>
            {
                datas.map((data) => (
                    <option key={data.id} value={data.id}>{data.name_th}</option>
                ))
            }
            </datalist>
        </>
    )
}