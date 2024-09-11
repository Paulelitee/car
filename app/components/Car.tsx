import { motion } from 'framer-motion'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
    src: string | StaticImageData,
    name: string
}

export default function Car({src, name}: Props) {

    const [active, setActive ] = useState('black')
    return(
        <motion.div className = 'flex flex-col items-center justify-center'>
            <motion.div
                initial = {{
                    x: '-100vh'
                }}
                animate = {{
                    x: 0
                }}
                transition = {{
                    duration: 0.5
                }}
                exit = {{
                    x: '100vh'
                }}
            >
                <Image src = {src} width={800} height={600} alt = 'car image'/>
            </motion.div>
            <motion.h1 className = 'title'
                        initial = {{
                            y: '50vh',
                            scale: 3,
                            z: -50
                        }}
                        animate = {{
                            y: 0,
                            scale: 1,
                            z: 0
                        }}
                        transition = {{
                            duration: 0.2,
                            delay: 0.3
                        }}
                        
                        exit = {{
                            y: '50vh'
                        }}>{name}</motion.h1>
    </motion.div>
    )
}