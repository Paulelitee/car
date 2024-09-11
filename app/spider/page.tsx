"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import spider from '../../public/assets/pngimg.com - lamborghini_PNG102911.png'
import Car from '../components/Car'

export default function Page() {

    return (
        <motion.div className = 'flex justify-center'>
            <Car src = {spider} name = 'spider'/>
    </motion.div>
    )
}