import { DashboardIcon } from '@radix-ui/react-icons'
import { Bell, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const links = [
    { title: 'Dashboard', src: '#', icon: (<DashboardIcon className='size-5' />) },
    { title: 'Dashboard', src: '#', icon: (<DashboardIcon />) },
    { title: 'Dashboard', src: '#', icon: (<DashboardIcon />) },
    { title: 'Dashboard', src: '#', icon: (<DashboardIcon />) },
    { title: 'Dashboard', src: '#', icon: (<DashboardIcon />) },
    { title: 'Dashboard', src: '#', icon: (<DashboardIcon />) },
]
function Layout({ children }) {
    return (
        <div>
            <header className='flex w-full px-10 py-4 shadow-md justify-between items-center fixed bg-white z-50'>
                <h2 className='text-[24px] font-bold'><span className='text-green-600 mr-2'>Demo</span>Admin</h2>

                <form className='flex items-center py-2 shadow-xl rounded-md px-3 shadow-accent'>
                    <input type="text" name='search' placeholder='Search' />
                    <button type='submit'><Search /></button>
                </form>

                <div className="flex items-center gap-4">
                    <Bell />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </header>

            <div className='flex pt-[4.7rem] relative'>
                <nav className='p-4 h-[100vh] w-[320px] shadow-md flex flex-col gap-3 fixed'>
                    {
                        links.map((link, index) => (
                            <Link key={index} href={link.src} className='py-2 text-[16px] text-[#1f1515] font-medium pl-4 flex items-center gap-2 rounded-sm bg-green-500'>
                                {link.icon}{link.title}
                            </Link>
                        ))
                    }
                </nav>

                <main className='p-2 min-h-full w-[calc(100vw-340px)] absolute right-0'>
                    {children}
                </main>

            </div>
        </div>
    )
}

export default Layout