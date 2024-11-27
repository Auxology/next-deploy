"use client";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CountUpCardProps {
    number: string;
    label: string;
    delay?: number;
}

export const CountUpCard: React.FC<CountUpCardProps> = ({ number, label, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay }
            });
            const num = parseInt(number.replace(/\D/g, ''));
            let start = 0;
            const end = num;
            const duration = 2000;
            const increment = Math.ceil(end / (duration / 16));

            const timer = setInterval(() => {
                start += increment;
                if (start > end) {
                    clearInterval(timer);
                    setCount(end);
                } else {
                    setCount(start);
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, number, controls, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
        >
            <h3 className="text-4xl font-bold text-accentColor mb-2">
                {count}
                {number.includes('+') && '+'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{label}</p>
        </motion.div>
    );
}; 