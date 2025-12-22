import { Drag } from '@/type'
import React from 'react'

const DragFolder = ({ img, placeholder }: Drag) => {
    return (
        <div className=' flex flex-col w-20 hover:bg-white/20 px-3 py-1'>
            <div className='flex items-center justify-center size'>
                <img src={img} className='size-10' />
            </div>
            <span className='overflow-hidden w-full font-light text-white text-center'>
                {placeholder}
            </span>

        </div>
    )
}

export default DragFolder