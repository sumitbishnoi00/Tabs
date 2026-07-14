"use client";
import { TABS_DATA } from '@/utils/helper'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Tabs = ({ activeTab }) => {
     
    const router = useRouter();
    const searchParams = useSearchParams();

    const handTab = (id) => {

        const params = new URLSearchParams(searchParams.toString());

        params.set("tab", id);

        router.push(`?${params.toString()}`);
    };

    const currentTab = TABS_DATA.find((item) => item.id === activeTab) || TABS_DATA[0];
  return (
    <section className='px-3 min-h-screen flex flex-col items-center justify-center'>

        <h1 className='font-normal text-4xl leading-[100%] text-gray mb-10.75'>Tabs</h1>
        <div className='max-w-135 w-full mx-auto bg-white rounded-[20px] shadow-[0px_11px_44px_-10px_#00000040] px-6.25 pb-8.5 pt-7.25'>
            <div className='flex gap-7.5 border-b border-light-gray'>
                {TABS_DATA.map((item) => (

                    <button key={item.id} onClick={() => handTab(item.id)} className={`font-normal text-[16px] leading-[100%] pb-3.25 cursor-pointer ${activeTab === item.id ? "text-black border-b border-blue" : "text-gray"}`}>
                        {item.title}
                    </button>
                ))}
            </div>

            <div className='font-normal text-[14px] sm:text-[16px] leading-[150%] text-gray mt-5.5'>
                {currentTab.content}
            </div>
        </div>
    </section>
  )
}

export default Tabs