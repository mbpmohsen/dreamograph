import { motion } from 'framer-motion';
import { useState } from 'react';

const Accordion = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const variants = {
        open: {
            opacity: 1,
            height: 'auto',
        },
        closed: {
            opacity: 0,
            height: 0,
        },
    };

    return (
        <div
            className={`rounded-xl mb-4 shadow-sm overflow-hidden transition-colors ${isOpen ? 'bg-[#8366A31A]' : 'bg-[#FAF7F2]'}}`}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-800"
            >
                <span className="text-lg font-medium">{title}</span>
                <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <motion.div
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={variants}
                transition={{
                    duration: 0.3,
                }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-4 text-gray-600">{children}</div>
            </motion.div>
        </div>
    );
};

export default Accordion;
