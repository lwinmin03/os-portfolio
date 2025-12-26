import { sideItems } from '@/constant'
import {  SidebarType } from '@/type'


const Sidebar = ({current="About Me",onClick}:SidebarType) => {


  
  return (
  <nav className='flex flex-col w-36 h-full  '>
    {
        sideItems.map((item)=>(
            <button  key={item.id} 
            onClick={onClick}
            
            className={`flex transition-all ease-in-out  cursor-pointer px-1.5 py-1 m-2 rounded-sm  select-none text-sm  items-center gap-x-3 ${current=== item.name ? "bg-gray-900/10" :" hover:bg-gray-200"  } `}   >

                  <span className='size-6'>
                   < item.icon />
                  </span>

                  <span>
                    {item.name}
                  </span>

            </button>
        ))
    }
  </nav>
  )
}

export default Sidebar