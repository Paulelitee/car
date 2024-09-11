"use client"

import black from '../public/assets/pngimg.com - lamborghini_PNG102898.png'
import Car from './components/Car';

export default function Home() {
 


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