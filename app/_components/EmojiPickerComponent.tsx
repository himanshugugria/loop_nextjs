import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'

function EmojiPickerComponent({children,setEmojiIcon}) {
    const [openEmojiPicker,setopenEmojiPicker]=useState(false)
  return (
    <div>
        <div onClick={()=>setopenEmojiPicker(true)}>
            {children}
        </div>
        {openEmojiPicker&&<div
            className='absolute z-10'>
            <EmojiPicker
                onEmojiClick={(e)=>
                    {setEmojiIcon(e.emoji)
                    setopenEmojiPicker(false)}
                }
            />
        </div>}
    </div>
  )
}

export default EmojiPickerComponent