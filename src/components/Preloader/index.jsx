import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { opacity, slideUp } from './anim';
// import companylogo from '../../../public/images/favicon.ico'
import Image from 'next/image';

const words = ["STURBBORN GIRL!!", "DO YOU KNOW HOW PRETTY YOU ARE WHEN YOU SMILE?", "WELL, I PLAN ON MAKING THAT SMILE LAST LONG"];
// const logoUrl = companylogo; // Update with your logo URL

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1)
        }, index === 0 ? 1000 : 1500);
        return () => clearTimeout(timeout);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0 }
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 && (
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter" className='text-center lg:text-[42px] text-xl'>
                        {words[index]}
                        {/* {index === 0 && <Image src={logoUrl} alt="Company Logo" className="inline-block ml-2" height={100} width={150} />}  */}
                    </motion.p>
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            )}

        </motion.div>
    )
}
