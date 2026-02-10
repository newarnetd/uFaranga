import React from 'react';

const Section = ({
    children,
    className = '',
    id = '',
    background = 'default', // default (black), glass, gradient
    centered = false
}) => {
    const backgrounds = {
        default: 'bg-black',
        glass: 'bg-black/50 backdrop-blur-sm',
        gradient: 'bg-gradient-to-b from-surface-50 to-black',
        none: ''
    };

    return (
        <section
            id={id}
            className={`py-20 lg:py-32 relative overflow-hidden ${backgrounds[background]} ${className}`}
        >
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${centered ? 'text-center' : ''} relative z-10`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
