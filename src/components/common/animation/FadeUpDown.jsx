import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeUpDown = ({
    children,
    className,
    yOffset = -10,
    xOffset = 0,
    duration = 0.6,
    delay = 0,
    rotateZ = 0,
    rotateX = 0,
    rotateY = 0,
}) => {
    const [itemRef, itemInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    })
    return (
        <motion.div
            className={`${className}`}
            animate={{
                y: itemInView ? 0 : yOffset,
                x: itemInView ? 0 : xOffset,
                opacity: itemInView ? 1 : 0,
                rotateZ: itemInView ? 0 : rotateZ,
                rotateX: itemInView ? 0 : rotateX,
                rotateY: itemInView ? 0 : rotateY,
            }}
            transition={{ type: 'tween', duration, delay }}
            ref={itemRef}
        >
            {children}
        </motion.div>
    )
}

export default FadeUpDown
