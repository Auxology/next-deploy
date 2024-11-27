"use client";
import { motion } from 'framer-motion';

interface SectionTitleProps {
    subtitle?: string;
    title: string;
    description?: string;
    alignment?: 'left' | 'center' | 'right';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
    subtitle, 
    title, 
    description, 
    alignment = 'left' 
}) => {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <motion.div 
            className={`mb-12 ${alignmentClasses[alignment]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {subtitle && (
                <span className="text-accentColor text-sm uppercase tracking-wider mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </motion.div>
    );
}; 