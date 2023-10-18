import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { RiSettingsLine } from 'react-icons/ri'
import { DASHBOARD_SIDEBAR_LINKS} from '../../lib/constants'

import { BiChevronDown } from 'react-icons/bi'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-3 flex flex-col">
            <div className="flex items-center gap-2 px-1 py-3">
                <RiSettingsLine fontSize={24} color="white" />
                <span className="text-neutral-200 text-lg">Dashboard</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700 cursor-pointer">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <h5 className="mx-3 text-white">Evano</h5>
                    </div>
                    <div className="flex justify-end">
                        <BiChevronDown className="text-white" />
                    </div>
                </div>
                <div className="text-gray-400 ml-9 text-xs">Project Manager</div>
            </div>
        </div>
    )
}

function SidebarLink({ link }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}
