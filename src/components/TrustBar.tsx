import React from 'react';
import Marquee from 'react-fast-marquee';

interface TrustBarProps {
    images: string[];
}

const TrustBar: React.FC<TrustBarProps> = ({ images }) => (
    <Marquee>
        {images?.map((image) => (
            <img
                width={100}
                key={image}
                src={image}
                className="mx-10"
                alt={`Trust Image`}
            />
        ))}
    </Marquee>
);

export default TrustBar;
