import { ArrowBigDownDash, ArrowDown, ArrowDown01, ArrowDown10Icon, ArrowUp, Cross, LucideCross, X } from 'lucide-react'


const Control = () => {
  return (
    <div className='flex items-center '>
        <ArrowDown size={15} className='hover:bg-gray-200 hover:cursor-default' />
        <ArrowUp size={15} className='hover:bg-gray-200 hover:cursor-default'/>
        {/* <Cross  className='rotate-45' size={15} /> */}
        <X  size={15} className='hover:bg-gray-200 hover:cursor-default'/>
        
    </div>
  )
}

export default Control