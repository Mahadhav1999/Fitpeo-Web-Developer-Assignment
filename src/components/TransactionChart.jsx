import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const data = [
	{
		name: 'Jan',
		Expense: 4000,
	},
	{
		name: 'Feb',
		Expense: 3000,
	},
	{
		name: 'Mar',
		Expense: 2000,
	},
	{
		name: 'Apr',
		Expense: 2780,
	},
	{
		name: 'May',
		Expense: 1890,
	},
	{
		name: 'Jun',
		Expense: 2390,
	},
	{
		name: 'July',
		Expense: 3490,
	},
	{
		name: 'Aug',
		Expense: 6000,
	},
	{
		name: 'Sep',
		Expense: 2780,
	},
	{
		name: 'Oct',
		Expense: 1890,
	},
	{
		name: 'Nov',
		Expense: 2390,
	},
	{
		name: 'Dec',
		Expense: 3490,
	}
]

export default function TransactionChart() {
	return (
        <div className="h-[22rem] bg-white p-4 rounded-lg border border-gray-200 flex flex-col flex-1">
            <div className="flex justify-between items-center">
                <strong className="text-gray-700 font-medium mb-2">Overview</strong>
                <div className="flex justify-between">
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex w-full gap-x-1.5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Quaterly
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        ></Transition>
                    </Menu>
                </div>
            </div>
            <span className="text-gray-300">Monthly Earning</span>

            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <XAxis dataKey="name" />
                        <Bar dataKey="Expense" fill="#8031A7" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
