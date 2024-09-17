import React, {useCallback, useEffect, useRef, useState} from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Slider.css';

const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: '50% 60%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const slideContainerStyles = {
    display: 'flex',
    height: '100%',
    transition: 'all 0.5s ease',
}
const Slider = ({slides}) => {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getSlideStyles = (slideIndex) => ({
        ...slideStyles,
        backgroundImage: `url(${slides[slideIndex].url})`,
    });

    const getSlideContainerStyles = () => ({
        ...slideContainerStyles,
        width: `${slides.length * 100}vw`,
        transform: `translateX(${-(currentIndex * 100)}vw)`,
    });

    const slideOverflow = {
        overflow: "hidden",
        height: '100%',
    }

    const navBefore = () => {
        const isFirstSlide = currentIndex === 0;
        const prevIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    };

    const navNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const nextIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }, [currentIndex, slides]);

    const isActive = (slideIndex) => {
        const active = currentIndex === slideIndex;
        return active;
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            navNext();
        }, 15000);

        return () => clearTimeout(timerRef.current);
    }, [navNext])

    return (
        <div className='slider-container'>
            <NavigateBeforeIcon fontSize='large' className='left-arrow' 
            onClick={navBefore}/>
            <NavigateNextIcon fontSize='large' className='right-arrow' 
            onClick={navNext}/>
            <div style={slideOverflow}>
                <div style={getSlideContainerStyles()}>
                    {slides.map((_, slideIndex) => (
                        <div key={slideIndex} 
                        style={getSlideStyles(slideIndex)}>
                        </div>
                    ))}
                </div>
            </div>
            <div className='rectangle-container'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} 
                    className={isActive(slideIndex) ? 'rectangle-active' : 'rectangle'}
                    onClick={(e) => goToSlide(slideIndex)}> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider