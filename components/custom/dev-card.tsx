import { Icon } from '@iconify/react/dist/iconify.js'

import {devsDataType} from '@/constant/index'

const DevCard = ({name , title , description , ability , img} : devsDataType)  => {
  return (
    <div className="card-client mt-16">
        <div className="user-picture">
            <img src={img}/>
        </div>
        <p className="name-client"> {name}
            <span>{title}</span>
        </p>
         <div className='text-sm text-gray-600'>
            {description}
        </div>
        <div className='text-sm text-start uu'>
            {ability.map(item => <p>{item}</p>)}
        </div>
       
        <div className="flex justify-evenly border-t border-t-white mt-2 pt-2">
           <Icon className='cursor-pointer' icon="mdi:linkedin" width={30}/>
           <Icon className='cursor-pointer' icon="mdi:github" width={30}/>
           <Icon className='cursor-pointer' icon="ic:baseline-telegram"  width={30}/>
        </div>
    </div>
  )
}

export default DevCard