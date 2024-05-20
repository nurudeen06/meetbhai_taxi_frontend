import { Autocomplete, AutocompleteItem, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React, { useState, useEffect } from 'react';
import { Select, SelectItem, Avatar } from "@nextui-org/react";

export default function Airport() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [addAirportModal, setAddAirportModal] = useState(false);
    const [deleteAirportModal, setDeleteAirportModal] = useState(false);
    const [airports, setAirports] = useState([]);
    const [newAirport, setNewAirport] = useState({ cityname: '', code: '', airport: '' });

    useEffect(() => {
        fetchAirports();
    }, []);

    const fetchAirports = async () => {
        try {
            const response = await fetch('http://meetbhai.eu-4.evennode.com/api/v1/airports');
            const data = await response.json();
            setAirports(data.data.data);
        } catch (error) {
            console.error('Error fetching airports:', error);
        }
    };

    const handleAddAirport = async () => {
        try {
            const response = await fetch('http://meetbhai.eu-4.evennode.com/api/v1/airport', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAirport),
            });
            const data = await response.json();
            setAirports([...airports, data.data.doc]);
            setNewAirport({ cityname: '', code: '', airport: '' });
            setAddAirportModal(false);
        } catch (error) {
            console.error('Error adding airport:', error);
        }
    };

    const handleEditAirport = async (id) => {
        // Implement edit airport logic here
    };

    const handleDeleteAirport = async (id) => {
        try {
            await fetch(`/api/airports/${id}`, {
                method: 'DELETE',
            });
            setAirports(airports.filter((airport) => airport.id !== id));
            setDeleteAirportModal(false);
        } catch (error) {
            console.error('Error deleting airport:', error);
        }
    };

    const handleCloseAddAirportModal = () => {
        setAddAirportModal(false);
        setNewAirport({ cityname: '', code: '', airport: '' });
    };

    const handleCloseDeleteAirportModal = () => {
        setDeleteAirportModal(false);
    };

    const animals = airports.map((airport) => ({
        label: `${airport.code} - ${airport.name}`,
        value: airport._id,
    }));

    const datacontent = airports.map((airport, index) => ({
        id: index + 1,
        cityname: airport.cityName,
        airport: `${airport.code} - ${airport.name}`,
        datelogs: airport.dateLogs,
    }));

    return (
        <>
            <div className="w-[80%] mx-auto flex flex-col gap-3 h-100">
                <div className="flex gap-3 items-center">
                    <div onClick={() => setAddAirportModal(true)} className="w-fit tx-org border-2 border-blue rounded-md pointer px-3 py-1 flex gap-2 items-center">
                        <i className="fa-solid fa-plus text-[14px] "></i>
                        <p className='text-[16px] font-Outfit font-semibold'>Add Airport</p>
                    </div>
                    <div className="col flex gap-2 border-2 border-blue rounded-md py- px-3 relative">
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

                    <div className="w-fit tx- border-2 border-blue rounded-md px-3 min-h-[100%] flex gap-2 items-center">
                        <i className="fa-regular fa-arrow-up-from-bracket text-[18px]"></i>
                    </div>
                    <div className="w-fit tx-mix-org border-2 border-blue rounded-md px-3 min-h-[100%] flex gap-2 items-center">
                        <i className="fa-regular fa-down-to-bracket text-[18px]"></i>
                    </div>
                </div>
                <div className="w-100 rounded-lg border-1 border-black overflow-hidden">

                    <div className=' box-border w-100'>
                        <div className='flex justify-between bs-blue border-black'>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[8%]'>
                                <p className='w-fit text-[15px] font-bold font-Outfit tx-white'>Sr.No</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                <p className='text-[15px] font-bold font-Outfit tx-white'>City name</p>
                            </div>
                            <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[50%]'>
                                <p className='text-[15px] font-bold font-Outfit tx-white'>Airport with shortcodes</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[30%]'>
                                <p className='text-[15px] font-bold font-Outfit tx-white'>Date Logs</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                <p className='text-[15px] font-bold font-Outfit tx-white'>Actions</p>
                            </div>
                        </div>
                        <div>
                            {datacontent.map((item) => (
                                <div className='flex justify-between' key={item.id}>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[8%]'>
                                        <p className='w-fit text-[15px] font-medium font-Poppins tx-'>{item.id}</p>
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.cityname}</p>
                                    </div>
                                    <div className='flex justify-start text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[50%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.airport}</p>
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[30%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.datelogs}</p>
                                    </div>
                                    <div className='flex gap-4 items-center justify-center text-center py-1.5 border-t-1 border-black px-3 w-[20%]'>
                                        <i className="fa-solid fa-pen-to-square pointer"></i>
                                        <i className="fa-solid fa-trash tx-red pointer"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>




            {/* <Modal isOpen={addAirportModal} backdrop={"blur"} onOpenChange={closeaddAirportModal}>
                <ModalContent className=" border-2 border-org">
                    {(closeaddAirportModal) => (
                        <>
                            <ModalBody className="py-0 px-0 p-0">
                                <div className="px-4 py-4 mt-2">
                                    <div className="col border-2 border-org rounded-lg overflow-hidden">
                                        <input className='col w-100 py-[14px] px-3' placeholder='City Name' type="text" />
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <div className="w-[20%] border-2 border-org rounded-tl-lg overflow-hidden">
                                            <input className='col w-100 py-[14px] px-3' placeholder='Code' type="text" />
                                        </div>
                                        <div className="col border-2 border-org rounded-tr-lg overflow-hidden">
                                            <input className='col w-100 py-[14px] px-3' placeholder='Airport Name' type="text" />
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



            <Modal isOpen={deleteAirportModal} backdrop={"blur"} onOpenChange={closeDeleteAirportModal}>
                <ModalContent className="rounded-3xl border-2 border-org close-btn-none">
                    {(closeDeleteAirportModal) => (
                        <>
                            <ModalBody className="py-0 px-0 p-0">
                                <div className="px-4 py-4 mt-2"> 
                                    <div className="flex gap-2 mt-3">
                                        <div className="min-w-[120px] max-w-[120px]">
                                            <img src="../../../public/IMG/dander-red.png" alt="" />
                                        </div>
                                        <div className="col flex flex-col text-[24px] font-Outfit opacity-70 items-center justify-center">
                                          <p>Are you sure,</p>
                                          <p>You want to delete?</p>
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
 */}


        </>
    )
}
