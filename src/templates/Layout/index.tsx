import Link from 'next/link';
import React, { useState } from 'react';
import {Menu} from '../../components/Menu';
import { BiMenu } from 'react-icons/bi';
import {Header} from '../../components/Header';
import {DropdownThemes} from "../../components/DropDownThemes";
//import { menu } from '../config/menu';
// import { Container } from './styles';

export interface LayoutProps {
    children?: any,
    title?: string|any,
    contentTitle?:string,
    menu?:  {
        id: number,
        title: string,
        path: string,
        icon: any,
        visible: boolean,
        childrens:
            {
                id: number,
                title: string,
                path: string,
                visible: boolean
            }[]
    }[]
}
export const Layout = ({ children, title,contentTitle,menu }:LayoutProps) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const handleMenuButton = () => {
        setOpenSidebar(!openSidebar);
    }
    return (
        <div className="relative min-h-screen md:flex font-poppins  bg-neutral ">
            {/* mobile menubar */}
            <div className="bg-neutral  flex justify-between md:hidden">
                {/* logo */}
                <Link href="/" className="block p-4  font-bold">{title}</Link>
                {/* mobile menubutton */}
                <button className={`p-4 focus:outline-none focus:bg-gray-700`} onClick={handleMenuButton}>
                    <BiMenu size={32} />
                </button>
            </div>
            {/* END mobile menubar */}
            {/* sidebar */}
            <div className={`
                          bg-neutral
                            shadow-xl
                            py-4
                            w-64
                            px-4
                            absolute
                            inset-0
                            left-0
                            transform
                            ${openSidebar ? '' : '-translate-x-full'}
                            md:relative 
                            md:translate-x-0 
                            transition
                            duration-200
                            easy-in-out
                            `}>
                <Link href="/" className=" flex items-center space-x-2">
                    <span className="text-2xl font-extrabold ">{title}</span>
                </Link>
               {menu && <nav><Menu items={menu} /></nav>}
            </div>
            {/* END sidebar */}
            {/* content */}

            <div className="flex-1 text-2xl">
            <Header pageTitle={contentTitle || ''}>
                <div className="flex min-w-full justify-between">
                  <DropdownThemes/>
                </div>

            </Header>
                <div className="p-0 bg-base-100 rounded-tl- 3xl min-h-screen ">
                    {children}
                </div>
            </div>
        </div>
    );
}
