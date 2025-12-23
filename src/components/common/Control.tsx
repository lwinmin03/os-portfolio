import { ArrowBigDownDash, ArrowDown, ArrowDown01, ArrowDown10Icon, ArrowUp, Cross, LucideCross } from 'lucide-react'


const Control = () => {
  return (
    <div className='flex items-center gap-2'>
        <ArrowDown size={15} />
        <ArrowUp size={15}/>
        <Cross  className='rotate-45' size={15} />
        
    </div>
  )
}

export default Control