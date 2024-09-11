import { motion } from 'framer-motion'
import { useState } from 'react'


export default function TopNav() {

    const [active, setActive ] = useState('black')
    return(
        <div className='top-nav'>
           { ['Aventador', 'Murcielago', 'Spider'].map(
            (car, id) => <motion.div
                                     className = 'top-nav-item'>{car}</motion.div>
           )
           }
        </div>
    )
}