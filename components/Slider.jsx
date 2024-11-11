import { CCarousel } from '@coreui/react'

export default function Slider() {
    return (
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    );
}