"use client";

import "./globals.css";
import { deleteSession } from "./lib/session";
import {useRouter,usePathname} from "next/navigation";
import { SignupForm } from "./auth/signin-form";
import Image from "next/image";
import imgAsim from '@/app/assets/asim.jpg';
import logo from '@/app/assets/logo.png';
import { useEffect, useRef, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router=useRouter();
  const path=usePathname();
  const topBar=useRef(null);
  const menuItem=useRef(null);
  const [height, setHeight] = useState(0); // State to store the height

  useEffect(() => {
    if (topBar.current) {
      //@ts-expect-error/sds
      setHeight(topBar.current.offsetHeight); // Get and set the height of the div
    }
  }, []); // Run on mount
  const toggleMenu = () => {
    if(menuItem.current){
      //@ts-expect-error/32
    if (menuItem.current.style.display === 'none' || menuItem.current.style.display === '') {
      //@ts-expect-error/32
      menuItem.current.style.display = 'block'; // Show the menu
    } else {
       //@ts-expect-error/32
      menuItem.current.style.display = 'none'; // Hide the menu
    }
  }
  };

  const logout= async ()=>{
        await deleteSession();
        router.push("/");
    }



  if(path=="/") return <html lang="en">
      <body><SignupForm/></body></html>
  else
  return (
    <html lang="en">
       <head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
            </head> 
      <body className="bg-slate-100">
    <div className="flex wrapper flex-row">
        <div className="flex flex-col basis-1/5 gap-5 bg-slate-100 min-h-[100vh]">
          <div className="m-5 flex h-[10%] flex-col">
          <Image alt="Yuva Nepali" objectFit="cover" height={100} src={logo}></Image>
          <h1 className="font-bold text-xl">Nepali Retail Search</h1>
          </div>
          <div className=" menu m-5 items-start flex h-[70%]">
          <div className="flex bg-white p-3 w-full shadow-md rounded-xl">Settings</div>
          </div>
          <div className="m-5 items-end flex h-[20%]">
            &copy; mihzabahadur.world
          </div>
        
        </div>
        <div className="flex basis-4/5 bg-slate-300 min-h-[100vh] flex-col">
            <div ref={topBar} className="appbar flex flex-row bg-slate-200 h-[70px] p-3">
                <div className="flex basis-3/5 bg-slate-200 flex-col items-left"><h1 className="font-bold text-2xl font-700">Dashboard</h1>
                <p className="leading-3 text-slate-400">14th Aug 2024</p></div> 
                
                <div className="actions flex basis-2/5 bg-slate-200 justify-end items-center flex-row relative">
                    <div className="action-item flex justify-center items-center h-[100%] gap-2">
                        <button className="rounded-xl border-1 border-slate-200 w-[35px] h-[35px] shadow-slate-300 shadow flex items-center justify-center">
                        <span className="material-icons text-slate-500">notifications</span>                        </button>
                        <button className="rounded-xl border-1 border-slate-200 w-[35px] h-[35px] shadow-slate-300 shadow flex items-center justify-center">
                            <span className="material-icons text-slate-500">
                                mark_email_unread
                                </span>
                        </button>
                        <div onClick={toggleMenu} className="grow-1 flex justify-center cursor-pointer items-center  min-w-0 p-2"> 
                           <div className="avatar-item flex flex-row gap-2 relative">
                            <div className="image relative">
                                <Image src={imgAsim}
                                alt="test"
                                width={50}
                                height={50}
                                className="w-[50px] h-[50px] rounded-[50%] object-cover"/>
                            </div>
                            <div className="info flex-col flex justify-center leading-tight relative">
                                <h2 className="font-semibold">Asim Ghimire</h2>
                                <p className="text-sm">Designer</p>
                            </div>
                            
                           </div> 
                           
                        </div>
                    </div>
                </div> 
                <div ref={menuItem} style={{top:`${height}px`,display:'none'}} className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                              <div className="py-1" role="none">
                                  <a href="#"  className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                                  <a href="#" onClick={logout} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Logout</a>
                                  <a href="#"  className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                                </div>
                            </div>   
            </div>
            <div className="main min-w-100vh gap-2 flex flex-col">
              {children}
            </div>
            
        </div>
    </div>
    </body>
    </html>
  );
}
