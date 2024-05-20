import { Autocomplete, AutocompleteItem, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import React from 'react'

export default function LocalTrips({ setAddPakagesModal, addPakagesModal }) {


    const handleaddPakagesModal = () => {
        setAddPakagesModal(true)
    }
    const closeaddPakagesModal = () => {
        setAddPakagesModal(false)
    }


    const animals = [
        { label: "HSR - Rajkot Hirasar International Airport", value: "1", },
        { label: "AMD - Sardar Vallabhbhai Patel International Airport", value: "2", },
        { label: "STV - Surat International Airport", value: "3", },
        { label: "BOM - Chhatrapati Shivaji International Airport", value: "4", },
        { label: "MAA - Chennai International Airport", value: "5", },
        { label: "PNQ - Pune International Airport", value: "6", },
        { label: "BLR - Kempegowda International Airport Bengaluru", value: "7", },
        { label: "IDR - Devi Ahilyabai Holkar Airport Indore", value: "8", },
        { label: "DEL - Indira Gandhi International Airport", value: "9", },
        { label: "DED - Jolly Grant Airport Dehradun", value: "10", },
        { label: "UDR - Maharana Pratap Airport Udaipur", value: "11", },
    ];


    const datacontent = [
        { id: "1", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "2", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "3", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "4", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "5", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "6", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "7", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "8", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "9", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "10", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "11", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
    ]


    return (
        <>
            <div className="w-[100%] flex flex-col gap-3 h-100 overflow-hidden">
                <div className="w-[90%] mx-auto flex gap-3 items-center">
                    <div className="w-fit px-1 py-1 flex gap-2 items-center">
                        <p className='text-[25px] font-Outfit font-semibold'>One - Way</p>
                    </div>
                    <div className="col">
                        <div className="col max-w-[70%] flex gap-2 border-b-2 border-[#615f5f] rounded-md py- px-3 relative">
                            <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                            <Autocomplete
                                label=""
                                defaultItems={animals}
                                placeholder="Search - Airport or short code"
                                className="col !font-bold !text-[14px] autocompleate-custome"
                            >
                                {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                            </Autocomplete>
                        </div>
                    </div>
                    <div className="flex gap-2 text-[20px]">
                        <div className="">
                            <i class="fa-regular fa-grid-2"></i>
                        </div>
                        <div className='col bs-black min-w-[2px] max-w-[2px]'></div>
                        <div className="">
                            <i class="fa-sharp fa-solid fa-list"></i>
                        </div>
                    </div>
                </div>

                <div className={`${"d-none"}`}>
                    <div className="w-[90vw] mx-auto mt-[-10px] overflow-hidden">
                        <div className="py-3 w-100 overflow-x-auto scroll-d-none">
                            <div className="w-[100wh] flex gap-5 pe-5">
                                <div className="flex flex-col gap-2 min-w-[500px] max-w-[500px] box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                    <div className="w-[clamp(32px,32px,32px)] h-[clamp(32px,32px,32px)] bs-white border-1 border-black rounded-md pointer absolute top-0 start-100 translate-middle">
                                        <i class="fa-light fa-trash tx-white pointer"></i>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                        </div>
                                        <div className="">
                                            <i class="fa-solid fa-right-long"></i>
                                        </div>
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-solid fa-map-pin tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                <span>-</span>
                                                <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                        <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                            <i class="fa-regular fa-pen-to-square tx-white pointer"></i>
                                        </div>
                                        <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                            <i class="fa-light fa-trash tx-white pointer"></i>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-2 min-w-[500px] max-w-[500px] box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                    <div className="w-[clamp(32px,32px,32px)] h-[clamp(32px,32px,32px)] bs-white border-1 border-black rounded-md pointer absolute top-0 start-100 translate-middle">
                                        <i class="fa-light fa-trash tx-white pointer"></i>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                        </div>
                                        <div className="">
                                            <i class="fa-solid fa-right-long"></i>
                                        </div>
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-solid fa-map-pin tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                <span>-</span>
                                                <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                        <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                            <i class="fa-regular fa-pen-to-square tx-white pointer"></i>
                                        </div>
                                        <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                            <i class="fa-light fa-trash tx-white pointer"></i>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-2 min-w-[500px] max-w-[500px] box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                    <div className="w-[clamp(32px,32px,32px)] h-[clamp(32px,32px,32px)] bs-white border-1 border-black rounded-md pointer absolute top-0 start-100 translate-middle">
                                        <i class="fa-light fa-trash tx-white pointer"></i>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                        </div>
                                        <div className="">
                                            <i class="fa-solid fa-right-long"></i>
                                        </div>
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-solid fa-map-pin tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                <span>-</span>
                                                <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                        <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                            <i class="fa-regular fa-pen-to-square tx-white pointer"></i>
                                        </div>
                                        <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                            <i class="fa-light fa-trash tx-white pointer"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[90vw] mx-auto overflow-hidden">
                        <div className="w-100 mx-auto px-1 flex gap-2 items-center">
                            <p className='text-[25px] font-Outfit font-semibold'>Round Trip</p>
                        </div>
                        <div className="py-3 w-100 overflow-x-auto scroll-d-none">
                            <div className="w-[100wh] flex gap-5 pe-5">
                                <div className="flex flex-col gap-2 min-w-[500px] max-w-[500px] box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                    <div className="w-[clamp(32px,32px,32px)] h-[clamp(32px,32px,32px)] bs-white border-1 border-black rounded-md pointer absolute top-0 start-100 translate-middle">
                                        <i class="fa-light fa-trash tx-white pointer"></i>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                        </div>
                                        <div className="">
                                            <i class="fa-solid fa-right-long"></i>
                                        </div>
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-solid fa-map-pin tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                <span>-</span>
                                                <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                        <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                            <i class="fa-regular fa-pen-to-square tx-white pointer"></i>
                                        </div>
                                        <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                            <i class="fa-light fa-trash tx-white pointer"></i>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-2 min-w-[500px] max-w-[500px] box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                    <div className="w-[clamp(32px,32px,32px)] h-[clamp(32px,32px,32px)] bs-white border-1 border-black rounded-md pointer absolute top-0 start-100 translate-middle">
                                        <i class="fa-light fa-trash tx-white pointer"></i>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                        </div>
                                        <div className="">
                                            <i class="fa-solid fa-right-long"></i>
                                        </div>
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-solid fa-map-pin tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                <span>-</span>
                                                <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                        <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                            <i class="fa-regular fa-pen-to-square tx-white pointer"></i>
                                        </div>
                                        <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                            <i class="fa-light fa-trash tx-white pointer"></i>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-2 min-w-[500px] max-w-[500px] box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                    <div className="w-[clamp(32px,32px,32px)] h-[clamp(32px,32px,32px)] bs-white border-1 border-black rounded-md pointer absolute top-0 start-100 translate-middle">
                                        <i class="fa-light fa-trash tx-white pointer"></i>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                        </div>
                                        <div className="">
                                            <i class="fa-solid fa-right-long"></i>
                                        </div>
                                        <div className=" w-fit">
                                            <div className="w-fit flex items-center gap-2">
                                                <i class="fa-solid fa-map-pin tx-org"></i>
                                                <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                            </div>
                                            <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                <span>-</span>
                                                <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                            </div>
                                            <div className="flex gap-1.5 items-center">
                                                <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                        <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                            <i class="fa-regular fa-pen-to-square tx-white pointer"></i>
                                        </div>
                                        <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                            <i class="fa-light fa-trash tx-white pointer"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100">
                    <div className="w-[90%] mx-auto rounded-lg border-1 border-black overflow-hidden">

                        <div className=' box-border w-100'>
                            <div className='flex w-100  bs-blue border-black'>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                    <p className='w-fit text-[15px] font-bold font-Outfit tx-white'>Sr.No</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                    <p className='text-[15px] font-bold font-Outfit tx-white'>Trip type</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[25%]'>
                                    <p className='text-[15px] font-bold font-Outfit tx-white'>Pickup - Drop & Vehicle</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[25%]'>
                                    <p className='text-[15px] font-bold font-Outfit tx-white'>Fare details</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                    <p className='text-[15px] font-bold font-Outfit tx-white'>Fare details</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                    <p className='text-[15px] font-bold font-Outfit tx-white'>Actions</p>
                                </div>
                            </div>
                            {datacontent.map((item) => (
                                <div className='flex w-100'>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[10%]'>
                                        <p className='w-fit text-[15px] font-medium font-Poppins tx-'>{item.id}</p>
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[10%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.tripType}</p>
                                    </div>
                                    <div className='flex flex-col justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[25%]'>
                                        <div className="flex items-center gap-2">
                                            <i class="fa-solid fa-map-pin tx-org"></i>
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.pickDropVehicle[0].pickupPoint}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i class="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.pickDropVehicle[1].dropPoint}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.pickDropVehicle[2].vehicleType}</p>
                                            <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[25%]'>
                                        <div className="flex items-center gap-2">
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[0].baseFare}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[1].baseCoveredKM}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[2].coveredHours}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                        <div className="flex items-center gap-2">
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[3].nightCharge}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[4].driverCharge}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                            <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[5].extraHours}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 items-center justify-center text-center py-1.5 border-t-1 border-black px-3 w-[10%]'>
                                        <i class="fa-solid fa-pen-to-square pointer"></i>
                                        <i class="fa-regular fa-circle-info"></i>
                                        <i class="fa-solid fa-trash tx-red pointer"></i>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>







            <Modal isOpen={addPakagesModal} backdrop={"blur"} onOpenChange={closeaddPakagesModal}>
                <ModalContent className="rounded-3xl border-2 border-org close-btn-none">
                    {(closeaddPakagesModal) => (
                        <>
                            <ModalBody className="py-0 px-0 p-0">
                                <div className="px-4 py-4 mt-2">
                                    <div className="col border-2 flex items-center px-3 border-org rounded-lg overflow-hidden">
                                        <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/e-sign.png" alt="" />
                                        <input className='col w-100 py-[14px] px-3 !text-black' placeholder='Local Rental 08Hrs/80Kms' type="text" />
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <div className="col border-2 flex items-center border-org rounded-lg overflow-hidden py-2">
                                            <img className='w-[clamp(25px,25px,25px)] mx-2 object-contain' src="../../../public/IMG/city-locate.png" alt="" />
                                            {/* <input className='col w-100 py-[14px] !text-black' placeholder='Local Rental 08Hrs/80Kms' type="text" /> */}
                                            <p>AMD</p>
                                        </div>
                                        <div className="col border-2 flex items-center border-org rounded-lg overflow-hidden py-2">
                                            <img className='w-[clamp(25px,25px,25px)] mx-2 object-contain' src="../../../public/IMG/timer.png" alt="" />
                                            {/* <input className='col w-100 py-[14px] !text-black' placeholder='Local Rental 08Hrs/80Kms' type="text" /> */}
                                            <p>08:00 Hrs</p>
                                        </div>
                                        <div className="col border-2 flex items-center border-org rounded-lg overflow-hidden py-2">
                                            <img className='w-[clamp(25px,25px,25px)] mx-2 object-contain' src="../../../public/IMG/Kelometrs.png" alt="" />
                                            {/* <input className='col w-100 py-[14px] !text-black' placeholder='Local Rental 08Hrs/80Kms' type="text" /> */}
                                            <p>80.00 Km</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <div className="col">
                                            <div className="border-2 border-org rounded-lg px-2 py-1">
                                                <p>800</p>
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>Hatchback</p>
                                        </div>
                                        <div className="col">
                                            <div className="border-2 border-org rounded-lg px-2 py-1">
                                                <p>1100</p>
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>Sedan</p>
                                        </div>
                                        <div className="col">
                                            <div className="border-2 border-org rounded-lg px-2 py-1">
                                                <p>1800</p>
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>SUV</p>
                                        </div>
                                        <div className="col">
                                            <div className="border-2 border-org rounded-lg px-2 py-1">
                                                <p>2500</p>
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>Innova Crysta</p>
                                        </div>
                                        <div className="col">
                                            <div className="border-2 border-org rounded-lg px-2 py-1">
                                                <p>N / A</p>
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>Tempo Tr.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-100 border-t-2 border-org">
                                    <div className="col flex justify-center py-1 border-e-2 border-org">
                                        <img className="max-w-[35px] object-contain" src="../../../public/IMG/close.png" alt="" />
                                    </div>
                                    <div className="col flex justify-center py-1">
                                        <img className="max-w-[27px]  object-contain" src="../../../public/IMG/done.png" alt="" />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>



        </>
    )
}
