
'use client'
import { loginWithPassword,loginWithGoogle } from '@/app/actions/auth'
import { useRouter } from 'next/navigation';
import {  useState } from 'react';
import Link from 'next/link';
export function SignupForm() {
    const[email,setEmail]=useState('');
    const[password,setPassWord]=useState('');
    const router=useRouter();
  //@ts-expect-error/asd
    const handlemail=(event)=>{
     
        setEmail(event.target.value);
    }
   //@ts-expect-error/asd
    const handlpassword=(event)=>{
     
        setPassWord(event.target.value);
    }
    //@ts-expect-error/asd
    const login=async (event)=>{
      event.preventDefault();
      const user=  await loginWithPassword(email,password);
      if(user) router.push("/views");
    }
    //@ts-expect-error/asd
    const googleLogin=async (event)=>{
      event.preventDefault();
      const user=  await loginWithGoogle();
      if(user) {
        console.log(user);
        router.push("/views");}
    }
    return (
      <div className="wrapper bg-slate-300">
        <head>
                 <Link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <Link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
            </head> 
        <div className="flex flex-row w-full h-full">
            <div className="flex flex-col basis-3/4 p-4">
                <h1 className="text-3xl font-bold">Welcome to Nepal retail search <strong>Asim Ghimire</strong></h1>
                <p>This is a prototype for ongoing research project with retails store analysis</p>
            </div>
            <div className="flex basis-1/4 flex-col h-[130px]  justify-end items-end">
                <div className="stripe bg-green-400 opacity-80 w-full basis-1/2 transform -rotate-12  mr-[-5px] -skew-x-12"></div>
                <div className="stripe bg-blue-400 opacity-80  w-5/6 basis-1/2 mt-[-15px] mr-[-15px] transform -rotate-12 -skew-x-12"></div>
              </div>
              
        </div>
        <div className="bg-white rounded-xl h-[100%] flex flex-col items-center justify-center">
      <form className='bg-green-200 flex flex-col h-[100%]  mt-[10%] p-5 gap-4 rounded-lg shadow-md' onSubmit={(e)=>login(e)}>
       <div className='gap-11 flex flex-row items-center '>
          <label htmlFor="email" className='items-center'>Email</label>
          <input
          className='p-2 w-full rounded-md'
          onChange={handlemail}
         value={email}
          id="email" name="email" type="email" placeholder="Email" />
       </div>
        <div className='gap-4 flex flex-row items-center'>
         <label htmlFor="password">Password</label>
         <input
          className='p-2 w-full rounded-md'
           onChange={handlpassword}
            value={password}
           id="password" name="password" type="password" />
         </div>
         <button className='bg-slate-200 p-1 shadow-md hover:shadow-none' type="submit"><span className='flex items-center justify-center gap-3 text-xl'>Login <span className='material-icons text-slate-400'>lock</span></span></button>
         <button  onClick={googleLogin} className=" shadow-md hover:shadow-none rounded-md cursor-pointer h-10 bg-red-400 w-full p-2 h-5 text-white">Login with Google</button>
       
       </form>
       </div>
    </div>
       
    )
  }
