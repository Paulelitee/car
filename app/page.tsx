"use client"

import { useState } from "react";
import black from '../public/assets/pngimg.com - lamborghini_PNG102898.png'
import Car from './components/Car';

export default function Home() {
 

  const variants = {
    on: {
      x: '100%',
      backgroundColor: '#ffffff'
    },
    off: {
      x: 0,
    },
    bgOn: {
      backgroundColor: '#0033cc'
    },
    bgOff: {
        backgroundColor:  'rgb(236, 236, 236)'
      }    
  }


  return (
    <Car src = {black} name = 'spider'/>
  );
}














// <motion.div className="flex flex-col justify-center">
//         {/* <motion.div className = 'toggle-container'
//                     animate = { isActive ? 'bgOn' : 'bgOff' }
//                     transition = {{ duration: 0.5 }}
//                     variants = {variants}
//                     onClick = {() => setActive(!isActive)}>
//           <motion.div className = 'circle'
//                     animate = { isActive ? 'on' : 'off' }
//                     transition = {{ duration: 0.5 }}
//                     variants = {variants}>
//           </motion.div>
//         </motion.div> */}
//         {/* <TopNav /> */}
//           <motion.div animate = {{x: x}} transition = {{duration: 1.5, type: 'spring'}} className = {'car-div'}>
//             <Image src = {car} width = {500} height = {300} alt = {'image of car'}/>
//           </motion.div>
//           {/* <div className='flex justify-center '>
//             <button onClick={() => setX(x - 100)}>Reverse</button>
//             <button onClick={() => setX(x + 100)}>Accelerate</button>
//           </div> */}
//     </motion.div>