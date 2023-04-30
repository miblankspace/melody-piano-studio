import React, {useCallback, useState} from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Slider.css';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: '50% 60%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${slides[currentIndex].url})`,
        transition: 'all 0.5s ease',
    };

    const navBefore = () => {
        const isFirstSlide = currentIndex === 0;
        const prevIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    }

    const navNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const nextIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }

    const isActive = (slideIndex) => {
        const active = currentIndex === slideIndex;
        return active;
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='slider-container'>
            <NavigateBeforeIcon fontSize='large' className='left-arrow' 
            onClick={navBefore}/>
            <NavigateNextIcon fontSize='large' className='right-arrow' 
            onClick={navNext}/>
            <div style={slideStyles}></div>
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