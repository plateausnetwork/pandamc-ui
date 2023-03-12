import React from "react"
import Link from 'next/link'
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
export interface MenuProps {
    items: {
        title: string,
        path?: string,
        visible?: boolean,
        childrens?: {
            title: string,
            path: string,
            visible?: boolean
        }[]
    }[]
}

const renderSubMenu = (childrens: any[]) => {
    return (
        childrens?.map((children) =>
            <Link href={children.path} key={children.id || new Date().getTime()}>
                
                    <li className="pl-6 hover:text-primary-medium cursor-pointer transition duration-200 hover:bg-neutral p-2 rounded" >{children.title}</li>
                
            </Link>)
    );
}
export const Menu = ({ items }:MenuProps) => {
    const handleMenu = (item: any) => {
        return item.visible = !item.visible;
    }
    const renderMenu = (menus: any) => {
        return (
            <ul className=" mt-10">
                {
                    menus?.map((item: any) => 
                    <Link href={item.path || ''} key={item.id || new Date().getTime()}>
                        <li className="cursor-pointer transition duration-200 hover:bg-base-300  p-2 rounded">
                            <div className="flex flex-row items-center justify-between" onClick={() => handleMenu(item)}>
                                <div className="flex flex-row items-center gap-2">
                                    {item.icon}
                                    {item.title}
                                </div>
                                {item.visible ? <BiDownArrow /> : item.childrens ? <BiRightArrow />:''}
                            </div>
                            <ul className={`mt-2 ${item.visible ? '' : 'hidden'} `}>
                                {renderSubMenu(item.childrens)}
                            </ul>
                        </li>
                    </Link>
                    )
                }
            </ul>
        );
    }
    return renderMenu(items)
};
