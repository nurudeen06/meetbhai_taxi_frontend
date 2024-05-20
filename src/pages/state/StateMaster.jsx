import { Input, Select, SelectItem } from '@nextui-org/react';
import React from 'react'

export default function StateMaster() {

    const animals = [
        { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
        { label: "Dog", value: "dog", description: "The most popular pet in the world" },
        { label: "Elephant", value: "elephant", description: "The largest land animal" },
        { label: "Lion", value: "lion", description: "The king of the jungle" },
        { label: "Tiger", value: "tiger", description: "The largest cat species" },
        { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },
        {
            label: "Dolphin", value: "dolphin",
            description: "A widely distributed and diverse group of aquatic mammals",
        },
        { label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds" },
        { label: "Zebra", value: "zebra", description: "A several species of African equids" },
        {
            label: "Shark",
            value: "shark",
            description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
        },
        {
            label: "Whale",
            value: "whale",
            description: "Diverse group of fully aquatic placental marine mammals",
        },
        { label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae" },
        { label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile" },
    ];


    return (
        <>
            <div className="w-100 flex h-[calc(100vh-60px)]">
                <div className="col p-4">
                    <div className="rounded-lg border-1 border-yellow overflow-hidden">
                        <table className='content_table box-border w-100'>
                            <thead>
                                <tr>
                                    <th className='w-fit'>Sr.No</th>
                                    <th>Airport Details</th>
                                    <th>City Name</th>
                                    <th>Created Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='w-fit'>data</td>
                                    <td>data</td>
                                    <td>data</td>
                                    <td>data</td>
                                    <td>data</td>
                                    <td>
                                        <div className='flex gap-3 mx-auto justify-center'>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                            <i class="fa-solid fa-trash tx-red"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='w-fit'>data</td>
                                    <td>data</td>
                                    <td>data</td>
                                    <td>data</td>
                                    <td>data</td>
                                    <td>
                                        <div className='flex gap-3 mx-auto justify-center'>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                            <i class="fa-solid fa-trash tx-red"></i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="w-fit min-w-[300px] max-w-[350px] p-3 flex flex-col gap-4 items- justify- bs-yellow relative">
                    <div className="absolute bottom-0 left-0 rotate-[25deg] opacity-[0.4] pointer origin-top-left min-w-[400px] max-w-[400px] min-h-[250px] max-h-[250px] flex items-center justify-center bs-white"></div>

                    <div className="w-fit mx-auto">
                        <p className='text-[25px] tx-white font-bold font-Outfit'>Add State</p>
                    </div>
                    <div className="w-100 mx-auto flex flex-col gap-3 items-">
                        <div className="w-100">
                            <Input className='rounded-xl overflow-hidden bs-white' size="sm" type="text" placeholder=" State Name" />
                        </div>
                        <div className="w-100">
                            <Input className='rounded-xl overflow-hidden bs-white' size="sm" type="text" placeholder=" State Code" />
                        </div>
                        <div className="w-100 px-2">
                            {/* <p className='text-[14px] tx-white font-bold'>Status</p> */}
                            <div className="flex">
                                <div className="w-50 flex items-center gap-2">
                                    <input className='accent-[#000] scale-110 mt-1' type="radio" id="inactive" name="fav_language" value="inactive" />
                                    <label className='tx-white font-bold text-[13px]' for="inactive">Inactive</label>
                                </div>
                                <div className="w-50 flex items-center gap-2">
                                    <input className='accent-[#000] scale-110 mt-1' type="radio" id="active" name="fav_language" value="active" />
                                    <label className='tx-white font-bold text-[13px]' for="active">Active</label>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 mt-3">
                            <p className='border-2 pointer px-3 py-2 rounded-xl border-white bg-transparent hover:!bg-white text-center text-[#fff] hover:!text-[#2565DF] font-bold text-[16px] font-Outfit'>Submit</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
