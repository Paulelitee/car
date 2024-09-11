"use client"

import { motion } from 'framer-motion'
import spider from '../../public/assets/Lamborghini-PNG-Clip-Art-HD-Quality.png'
import Car from '../components/Car'

export default function Page() {

    return (
        <motion.div className = 'flex justify-center'>
            <Car src = {spider} name = 'huracan'/>
    </motion.div>
    )
}