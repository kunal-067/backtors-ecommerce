'use client'
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Heart, Instagram, Mail, Phone, PhoneCall, Search, ShoppingCart, User } from "lucide-react";


const socails = [
    {
        link: '#',
        img: '/icons/fb.png'
    },
    {
        link: '#',
        img: '/icons/twitter.png'
    },
    {
        link: '#',
        img: '/icons/insta.png'
    },
    {
        link: '#',
        img: '/icons/yt.png'
    },

]
export function Nav1() {
    return (
        <div className="bg-[#252B42] h-[58px] flex justify-between px-[24px] text-[#fff] font-bold items-center">
            <div className="flex">
                <span className="flex mr-4 items-center justify-center">
                    <Phone className="size-[17px] mr-1 mt-[2px]" />
                    (+91)-91228-74046
                </span>
                <span className="flex justify-center items-center">
                    <Mail className="size-[18px] mr-1" />
                    kunal.wd067@gmail.com
                </span>
            </div>

            <div>
                Follow Us and get chance to win 80% off
            </div>

            <div className="flex items-center">
                Follow Us :
                {
                    socails.map((i, index) => (
                        <a key={index} href={i.link} className="flex">
                            <Image src={i.img} width={40} height={40} alt="icons" />
                            {/* <Instagram className="size-[37px]"/> */}
                        </a>
                    ))
                }
            </div>

        </div>
    )
}


const Links = [{
    name: 'Home',
    src: '/home'
}, {
    name: 'Shop',
    src: '#'
}, {
    name: 'About',
    src: '/about'
}, {
    name: 'Blog',
    src: '/blog'
}, {
    name: 'Contact',
    src: '/contact'
},{
    name: 'Contact',
    src: '/contact'
},{
    name: 'Contact',
    src: '/contact'
},{
    name: 'Contact',
    src: '/contact'
}]

const ambedLinks = [{
    title: 'Kids Wear',
    description: 'This includes all products related to kids',
    src: '#'
}, {
    title: 'Mens Wear',
    description: 'This includes all products related to menss',
    src: '#'
}, {
    title: 'Kids Wear',
    description: 'This includes all products related to kids',
    src: '#'
}, {
    title: 'Kids Wear',
    description: 'This includes all products related to kids',
    src: '#'
}]

export function Nav2() {
    return (
        <div className="bg-[#fff] h-[65px] flex items-center px-[24px] justify-between">
            <div className="flex items-center">
                <h2 className="text-[24px] text-[#252B42] font-bold">Bandage</h2>
                <NavigationMenu>
                    <NavigationMenuList className='w-fit text-[14px] font-bold text-[#737373] flex justify-center ml-24' >
                        {
                            Links.map((link, index) => {
                                if (link.name == 'Shop') {
                                    return (
                                        <NavigationMenuItem key={index}>
                                            <NavigationMenuTrigger className='font-bold'>Shop</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className='flex flex-wrap p-3 w-[450px] justify-between'>
                                                    {
                                                        ambedLinks.map((link, index) => (
                                                            <div key={index} className=" hover:bg-gray-200 rounded-sm w-[200px] h-fit p-2">
                                                                <h2 className="font-medium text-[16px]">{link.title}</h2>
                                                                <p className="leading-4 text-gray-800">{link.description}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    )
                                }
                                return (<NavigationMenuItem key={index}><Link className="mx-2" href={link.src}>{link.name}</Link></NavigationMenuItem>)
                            })
                        }

                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex justify-self-end text-[#23A6F0] w-[324px] justify-between">
                <div className="text-[17px] font-bold cursor-pointer animateLogin">
                    <div className="flex items-center px-1 hover:animate-pulse"><User className="size-[17px] mr-1" />Login / Register</div>
                    <div id="login-anm" className="w-full h-[2px] transition-colors duration-400 rounded-2xl"></div>
                </div>
                <div><Search className="size-[24px]" /></div>
                <div className="flex"><ShoppingCart className="size-[24px]" />2</div>
                <div className="flex"><Heart className="size-[24px]" />1</div>
            </div>
        </div>
    )
}