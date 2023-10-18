import React from 'react'
import { BiDollarCircle } from 'react-icons/bi'
import { FiBook } from 'react-icons/fi'
import {IoWallet} from 'react-icons/io5'
import {BsFillHandbagFill} from 'react-icons/bs'

export default function DashboardStatsGrid() {
	return (
        <div className="flex flex-col">
            <div className="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-3 3xl:grid-cols-6">
                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                        <div className="rounded-full bg-green-100 p-3 dark:bg-navy-700">
                            <span className="flex items-center text-brand-500 dark:text-white p-1">
                                <BiDollarCircle className="text-2xl text-green-400" />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-600">Earnings</p>
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white">$198k</h4>
                    </div>
                </div>
                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                        <div className="rounded-full bg-purple-300 p-3 dark:bg-navy-700">
                            <span className="flex items-center text-brand-500 dark:text-white">
                                <FiBook className="text-2xl text-purple-400" />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-600">Orders</p>
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white">$2.4k</h4>
                    </div>
                </div>
                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                        <div className="rounded-full bg-cyan-100 p-4 dark:bg-navy-700">
                            <span className="flex items-center text-brand-500 dark:text-white">
                                <IoWallet className="text-2xl text-cyan-400 text-current" />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-600">Balance</p>
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white">$2.4k</h4>
                    </div>
                </div>
                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                        <div className="rounded-full bg-red-100 p-3 dark:bg-navy-700">
                            <span className="flex items-center text-brand-500 dark:text-white">
                                <BsFillHandbagFill className='text-2xl text-red-400'/>
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-600">Total Sales</p>
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white">$89k</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


