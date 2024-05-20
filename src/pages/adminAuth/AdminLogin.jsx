import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminLogin() {
    return (
        <>
            <div className="w-100 h-[100vh] bs-white">
                <div className="w-100 min-h-[50vh] max-h-[50vh] col bs-blue rounded-b-3xl relative flex justify-between shadow-md rounded-r- ease-in duration-700">
                    <div className="absolute top-100 start-50 translate-middle">
                        <div className="border-2 border-org rounded-xl bs-white min-w-[400px] max-w-[400px]">


                            <div className="px-4 py-4 mt-2 flex flex-col gap-3">
                                <div className="col flex items-center border-2 border-org rounded-lg overflow-hidden px-3">
                                    <img className='min-w-[30px] max-w-[30px]' src="../../../public/IMG/user.png" alt="" />
                                    <input className='col w-100 py-[14px] px-3' placeholder='Username or Email' type="text" />
                                </div>
                                <div className="col flex items-center border-2 border-org rounded-lg overflow-hidden px-3">
                                    <img className='min-w-[30px] max-w-[30px]' src="../../../public/IMG/user-key.png" alt="" />
                                    <input className='col w-100 py-[14px] px-3' placeholder='Password' type="text" />
                                </div>

                            </div>


                            <Link to="/airport">
                                <div className="w-100 flex justify-center py-2.5 border-t-2 border-org">
                                    <img className="max-w-[27px]  object-contain" src="../../../public/IMG/done.png" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
