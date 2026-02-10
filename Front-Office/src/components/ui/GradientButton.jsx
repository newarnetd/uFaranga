import React from 'react';

const GradientButton = ({
    children,
    onClick,
    variant = 'primary', // primary, secondary, outline
    className = '',
    icon: Icon,
    fullWidth = false
}) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-poppins font-semibold rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";

    const variants = {
        primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5",
        secondary: "bg-surface-800 text-black hover:bg-white hover:text-primary hover:shadow-lg hover:-translate-y-0.5",
        outline: "bg-transparent border-2 border-white/20 text-white hover:border-primary hover:text-primary hover:bg-primary/5",
        ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
        accent: "bg-gradient-to-r from-secondary to-secondary-400 text-white shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:-translate-y-0.5"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            onClick={onClick}
        >
            {variant === 'primary' && (
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            )}

            {Icon && <Icon className={`w-5 h-5 mr-2 ${variant === 'outline' ? 'group-hover:text-primary' : ''}`} />}
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default GradientButton;
