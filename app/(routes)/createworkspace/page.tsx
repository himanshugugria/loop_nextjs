"use client"
import Coverpicker from '@/app/_components/Coverpicker'
import EmojiPickerComponent from '@/app/_components/EmojiPickerComponent'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/config/FirebaseConfig'
import { useAuth, useUser } from '@clerk/nextjs'
import { doc, setDoc } from 'firebase/firestore'
import { LoaderIcon, SmilePlus } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { use, useState } from 'react'

function createworkspace() {
    const [coverImage,setcoverImage]=useState('/cover.png')
    const [workspaceName,setWorkspaceName]=useState('')
    const [Emoji,setEmoji]=useState()
    const {user}=useUser();          // clerk se
    const {orgID}=useAuth();
    const [loading,setloading]=useState(Boolean)
    const router=useRouter();

    const oncreateWorkspace=async()=>{
        setloading(true);
        const docID=Date.now();

        const result=await setDoc(doc(db,'workspace',docID.toString()),{
            workspaceName:workspaceName,
            Emoji:Emoji,
            coverImage:coverImage,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            id:docID,
            orgID:orgID?orgID:user?.primaryEmailAddress?.emailAddress, 
        })
        setloading(false)
        router.replace('/workspace'+docID)
        console.log("data inserted");
    }

  return (
    <div className='p-10 md:px-40 lg:px-64 xl:px-96 py-20 shadow rounded-xl'>
        <div className='shadow-2xl rounded-xl'>
            <Coverpicker setnewCover={(v)=>setcoverImage(v)}>
        <div className='relative group cursor-pointer'>
            <h2 className='hidden absolute w-full h-full justify-center items-center group-hover:flex '>change coverImage</h2>
            <div className='group-hover:opacity-70'>
                <Image src={coverImage} alt='coverImage' width={400} height={400} className='w-full h-[150px] object-cover rounded-t-xl'/>
            </div>
        </div>
        </Coverpicker>
        <div className='p-12'>
            <h2 className='font-medium text-xl'>
                create a workspace here
            </h2>
            <h2 className='text-sm mt-2'>
                This is a shared space to collaborate with your team
            </h2>
            <div className='mt-8 flex gap-2'>
                <EmojiPickerComponent setEmojiIcon={(v)=>setEmoji(v)}>
                    <Button variant={'outline'}>
                        {Emoji?Emoji: <SmilePlus/>}
                    </Button>
                </EmojiPickerComponent> 
                <Input placeholder='workspace name'
                    onChange={(e)=>{setWorkspaceName(e.target.value)}}
                />
            </div>
            <div className='mt-7 flex justify-end gap-4'>
                <Button disabled={!workspaceName?.length||loading}
                    onClick={oncreateWorkspace}>
                    Create  {loading&&<LoaderIcon className='animate-pulse ml-2'/>}      </Button>
                <Button variant={'outline'}>Cancel</Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default createworkspace