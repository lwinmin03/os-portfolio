import { sideItems } from '@/constant'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
  <nav className='flex flex-col w-36 '>
    {
        sideItems.map((item)=>(
            <NavLink key={item.id}  className={"flex  hover:bg-gray-200 px-1.5 py-1 rounded-sm  select-none text-sm  items-center gap-x-3"} to={"1"}  >

                  <span className='size-6'>
                   < item.icon />
                  </span>

                  <span>
                    {item.name}
                  </span>

            </NavLink>
        ))
    }
  </nav>
  )
}

export default Sidebar