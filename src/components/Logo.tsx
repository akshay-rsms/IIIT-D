import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => (
    <img
        src="/logo.png"
        alt="IIIT Dharwad Logo"
        className={className}
        style={{ objectFit: 'contain' }}
    />
);

export default Logo;