"use client"

import { motion } from 'framer-motion'
import urus from '../../public/assets/Lamborghini-Urus-PNG-HD-Quality.png'
import Car from '../components/Car'

export default function Page() {

    return (
        <motion.div className = 'flex justify-center'>
            <Car src = {urus} name = 'spider'/>
    </motion.div>
    )
}