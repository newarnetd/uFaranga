import React from 'react';

const GlassCard = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div
            className={`
        glass rounded-2xl p-6 border border-white/5 
        ${hoverEffect ? 'hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default GlassCard;
