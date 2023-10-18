import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
 
import {RiDashboard2Line} from 'react-icons/ri';
import {FiBox} from 'react-icons/fi';

import { FaUserFriends } from 'react-icons/fa'
import {IoWalletOutline} from 'react-icons/io5'

import { AiOutlinePercentage } from 'react-icons/ai'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <RiDashboard2Line />
    },
    {
        key: 'products',
        label: 'Product',
        path: '/products',
        icon: <FiBox />
    },

    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <FaUserFriends />
    },
    {
        key: 'transactions',
        label: 'Income',
        path: '/transactions',
        icon: <IoWalletOutline />
    },
    {
        key: 'messages',
        label: 'Promote',
        path: '/messages',
        icon: <AiOutlinePercentage />
    },
    {
        key: 'messages',
        label: 'Help',
        path: '/messages',
        icon: <IoChatbubbleEllipsesOutline />
    }
]


