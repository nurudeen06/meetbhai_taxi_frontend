import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({menuOverLap,setmenuOverLap,setAddPakagesModal}) {


    const handleaddPakagesModal = () => {
        setAddPakagesModal(true)
    }

    const datalist = [
        { w: "100px", redirection: "/airport", ico: "../../IMG/sidebar/airplane-org.png", name: "Airports " },
        { w: "80px", redirection: "/local-trips", ico: "../../IMG/sidebar/taxi-org.png", name: "Local Trips" },
        { w: "70px", redirection: "/state", ico: "../../IMG/sidebar/car-setting-org.png", name: "Our Vehicles" },
        { w: "100px", redirection: "/city", ico: "../../IMG/sidebar/dash-org.png", name: "DASHBOARD" },
        { w: "65px", redirection: "", ico: "../../IMG/sidebar/trip.png", name: "Trip Packages" },
        { w: "75px", redirection: "", ico: "../../IMG/sidebar/location.png", name: "All Locations" },
        { w: "75px", redirection: "", ico: "../../IMG/sidebar/setting.png", name: "Settings" },
    ]


    return (
        <>
            <div className={`w-100  ${menuOverLap ? "min-h-[120px] max-h-[120px]" : "min-h-[150px] max-h-[150px]"} col bs-blue rounded-b-3xl relative flex items-center justify-between shadow-md rounded-r- ease-in duration-700`}>
                <div className={`h-fit w-[80%] flex justify-between gap-2 ${menuOverLap ? " absolute top-100 start-50 translate-middle" : "mx-auto mt-[-15px]"}`}>
                    <div className="flex gap-5">
                        <div className="flex gap-5">
                            {datalist.slice(0, 1).map((item) => (
                                <Link to={item.redirection}>
                                    <div className={`shadow-md bs-org rounded-lg pointer flex flex-col px-1 items-center justify-end w-[clamp(100px,100px,100px)] h-[clamp(100px,100px,100px)]`}>
                                        <div className={`px-2 flex items-center justify-center w-[clamp(${item.w},${item.w},${item.w})] h-[clamp(80px,80px,80px)]`}>
                                            <img className='w-100 object-cover' src={item.ico} alt="" />
                                        </div>
                                        <p className='px-2 w-100 text-center text-[11px] font-semibold font-Outfit border-t-1 py-0.5 tx-white border-white'>{item.name}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-5">
                            {datalist.slice(1, 3).map((item) => (
                                <Link to={item.redirection}>
                                    <div className={`shadow-md bs-white rounded-lg pointer flex flex-col px-1 items-center justify-end w-[clamp(100px,100px,100px)] h-[clamp(100px,100px,100px)]`}>
                                        <div className={`px-2 flex items-center justify-center w-[clamp(${item.w},${item.w},${item.w})] h-[clamp(80px,80px,80px)]`}>
                                            <img className='w-100 object-cover' src={item.ico} alt="" />
                                        </div>
                                        <p className='px-2 w-100 text-center text-[11px] font-semibold font-Outfit border-t-1 py-0.5 border-org'>{item.name}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-5">
                        {datalist.slice(3, 4).map((item) => (
                            <Link to={item.redirection}>
                                <div className="shadow-md bs-white rounded-lg pointer flex flex-col px-1 items-center justify-end w-[clamp(100px,100px,100px)] h-[clamp(100px,100px,100px)]">
                                    <div className={`px-2 flex items-center justify-center w-[clamp(${item.w},${item.w},${item.w})] h-[clamp(80px,80px,80px)]`}>
                                        <img className='w-100 object-cover' src={item.ico} alt="" />
                                    </div>
                                    <p className='px-2 w-100 text-center text-[11px] font-semibold font-Outfit border-t-1 py-0.5 border-org'>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-5">
                        {datalist.slice(4, 7).map((item) => (
                            <Link to={item.redirection}>
                                <div className="shadow-md bs-white rounded-lg pointer flex flex-col px-1 items-center justify-end w-[clamp(100px,100px,100px)] h-[clamp(100px,100px,100px)]">
                                    <div className={`px-2 flex items-center justify-center w-[clamp(${item.w},${item.w},${item.w})] h-[clamp(80px,80px,80px)]`}>
                                        <img className='w-100 object-cover' src={item.ico} alt="" />
                                    </div>
                                    <p className='px-2 w-100 text-center text-[11px] font-semibold font-Outfit border-t-1 py-0.5 border-org'>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={`h-fit w-[60%] flex justify-between gap-2 ${menuOverLap ? "d-none" : " absolute top-100 start-50 translate-middle"}`}>
                    <div className="flex items-center bs-white px-3 py-1 rounded-md border-2 border-blue gap-2 tx-org">
                        <i class="fa-solid fa-plus"></i>
                        <p className='text-[14px] font-bold font-Outfit'>Local city rates</p>
                    </div>
                    <div onClick={handleaddPakagesModal} className="flex items-center bs-white px-3 py-1 rounded-md border-2 border-blue gap-2 tx-org">
                        <i class="fa-solid fa-plus"></i>
                        <p className='text-[14px] font-bold font-Outfit'>Local packages</p>
                    </div> 
                </div>
            </div>
        </>
    )
}
