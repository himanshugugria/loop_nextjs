"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import CoverOptions from '../_shared/CoverOptions'
import { Button } from '@/components/ui/button'
  
function Coverpicker({children,setnewCover}) {

    const [selectedCover,setselectedCover]=useState(null)
  return (
    <div>
        <Dialog>
            <DialogTrigger className='w-full'>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-white'>Update CoverImage</DialogTitle>
                        <DialogDescription>
                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3'>
                                {CoverOptions.map((cover, index) => (
                                    <div key={index} 
                                        onClick={()=>setselectedCover(cover?.imageUrl)}
                                        className={`${selectedCover==cover?.imageUrl
                                        &&'border-white border-2'} p-1 rounded-xl`}>

                                        <Image src={cover?.imageUrl} width={200} height={150} alt={`Cover ${index}`}
                                            className='h-[100px] w-full rounded-xl' />

                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type='button' onClick={()=>setnewCover(selectedCover)}>
                            Update
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type='button' variant={'secondary'}>
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
    </Dialog>

    </div>
  )
}

export default Coverpicker