
"use client"
import React from 'react';
import Title from '@/app/component/Title';
import Card from '@/app/component/Card';
import ChartComponent from '@/app/component/ChartComponent';
import { Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import  MenuButtonUI  from '@/app/component/MenuButtonUI';
import  IconIntro  from '@/app/component/IconIntro';
import Table from '@/app/component/Table';
const Page = () => {
    ChartJS.register(BarElement,BarController, CategoryScale, LinearScale, Tooltip, Legend);

    
    
    const componentStack=[[  <Title title="Total Earnings" bgColor="slate" key={0}/>
                            ,<p className='w-full flex justify-center items-center text-[30px] font-bold' key={1}>242.3K</p> ,
                            <p className='w-full flex justify-center items-center text-[12px] text-slate-500' key={2}>Overall rating</p>
                        ],[  <Title title="Average Ratings" bgColor="slate" key={0}/>
                            ,<p  className='w-full flex justify-center items-center text-[30px] font-bold' key={1}>242.3K</p> ,
                            <p className='w-full flex justify-center items-center text-[12px] text-slate-500' key={2}>Overall rating</p>
                        ],[  <Title title="Conversion Rate" bgColor="slate" key={0}/>
                            ,<p  className='w-full flex justify-center items-center text-[30px] font-bold' key={1}>242.3K</p> ,
                            <p className='w-full flex justify-center items-center text-[12px] text-slate-500' key={2}>Overall rating</p>
                        ]];
    const upgradeCard=[[<p key={0} className='text-2xl text-white font-extrabold'>Upgrade to pro</p>,
                        <p key={1} className='text-lg leading-[10px] text-white'><span className='text-3xl text-white'>$4.5/</span>month</p>,
                        <p key={2} className='text-md text-white '>$80 billed Annually</p>,
                        <button className=' shadow-md p-2 rounded-xl bg-green-300 font-bold text-sm' key={3}>Upgrade Now</button>   ],
                        [<p key={0} className='text-2xl text-white font-extrabold'>Team Members</p>,
                         <MenuButtonUI key={1}/>  , <MenuButtonUI key={2}/>,
                         <MenuButtonUI key={3}/>
                        ]
                    ]
    return (
        <div>
            
            <div className="flex flex-row">
          <div className="flex basis-3/4 m-h-100vh flex-col">
            <div className="grid grid-row-3 grid-flow-col gap-4 m-10">
                <Card componentStack={componentStack[0]} color="yellow" stackGap="4" stackAlignment="start" />
                <Card componentStack={componentStack[1]} color="red" stackGap="4" stackAlignment="start" />
                <Card componentStack={componentStack[2]} color="green" stackGap="4" stackAlignment="start" />
            </div>

         
        <div className="flex m-h-100vh flex-row m-10 mt-0 gap-5">
        <ChartComponent/>  
        <div className="flex flex-col gap-5 p-3 w-2/5">
            <p className='title-1 text-2xl font-bold leading-[10px]'>More Analysis</p>
            <p className='text-sm text-slate-400 leading-[10px]'>These are the name list</p>
            <MenuButtonUI/>
            <MenuButtonUI/>
            <IconIntro/>
            
        </div>
       
          </div>

          <Table/>
          </div>
          <div className="flex basis-1/4 flex-col gap-5 m-10">
          <Card  componentStack={upgradeCard[0]} stackGap={2} color="blue" pad={`30px`}/>
          <Card  componentStack={upgradeCard[1]} stackGap={2} color="slate" pad={`20px`}/>
          <Card  componentStack={upgradeCard[2]} stackGap={2} color="slate" pad={`30px`}/>
          </div>
          </div>
        </div>
    );
};

export default Page;