'use client';

import { default as SLIDER1, default as SLIDER2, default as SLIDER3 } from '@/public/images/sliders/slider1.png';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

export default function Slider() {
    return (
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100" src={SLIDER1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={SLIDER2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={SLIDER3} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    );
}