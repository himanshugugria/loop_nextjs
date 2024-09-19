"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function WorkspaceList() {
    const {user}=useUser();
    const [WorkspaceList,setWorkspaceList]=useState([]);
  return (
    <div className='my-10 p-10 md:px-24 lg:px-36 xl:px-52'>
        <div className='flex justify-between'> 
            <h2 className='font-semibold text-xl'>Hello,{user?.fullName}</h2>
            <Link href={'/createworkspace'}>
                <Button>+</Button>
            </Link>
        </div>
        <div className='flex justify-between mt-10'>
            <div>
                <h2 className='font-normal text-gray-600'>Workspaces</h2>
            </div>
            <div className='flex gap-2'>
                <LayoutGrid/>
            </div>
        </div>
        {WorkspaceList?.length==0?
            <div className='flex justify-center flex-col items-center'>
                <Image src={'/workspaceList.png'} alt='workspace' width={100} height={100} className='shadow-sm'/>
                <h2 className='font-semibold mt-2'>create a new workspace</h2>
                <Link href={'/createworkspace'}>
                    <Button variant={'outline'} className='my-2 font-medium shadow-md'> + new workspace</Button>
                </Link>
            </div>
            :
            <div>
                <h2>workspace</h2>
            </div>
        }
    </div>
  )
}

export default WorkspaceList