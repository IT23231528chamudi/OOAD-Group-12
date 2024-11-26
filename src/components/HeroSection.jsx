import React from 'react';
import { Carousel, Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const slides = [
    {
        key: 1,
        title: 'Bedding',
        description: 'Explore our cozy and stylish bedding collection for a perfect night sleep!',
        imageUrl: 'https://oaktreeathome.co.uk/cdn/shop/files/Duvet-Set_white_5acf074b-6673-451f-914c-3e85ea200942.jpg?v=1720425950',

    },
    {
        key: 2,
        title: 'Bath Linen',
        description: 'Wrap yourself in luxury with our soft and stylish bath linen',
        imageUrl: 'https://www.countryandtownhouse.com/wp-content/uploads/2017/11/16.03.11_COZE_BED_BATHROOM_010.jpg',
    },
    {
        key: 3,
        title: 'Bed Linen',
        description: 'Explore our premium bed linen collection for ultimate comfort and timeless style!',
        imageUrl: 'https://www.ulapbedsheetus.com/cdn/shop/files/Black_Minimalist_Bedding_Set_100_Cotton.webp?v=1726624603&width=2000',
    },
];

const HeroSection = () => {
    const onChange = (currentSlide) => {
        console.log('Current slide:', currentSlide);
    };

    return (
        <Carousel afterChange={onChange} autoplay>
            {slides.map((slide) => (
                <div key={slide.key} className="carousel-slide">
                    <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="carousel-image"
                    />
                    <div className="carousel-content">
                        <Title level={1} className="carousel-title">{slide.title}</Title>
                        <Paragraph className="carousel-description">{slide.description}</Paragraph>

                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default HeroSection;
