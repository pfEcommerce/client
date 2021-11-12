import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./carouselButtons.jsx";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
import "./carousel.css";

const EmblaCarousel = ({ array }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [slides, setSlides] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (slides.length === 0) {
      setSlides(array)
    }
  }, [array])

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);



  // const displaySlides = slides.map(e => {
  //   return (
  //     <div className="embla__slide" key={e.id}>
  //       <div className="embla__slide__inner">
  //         <img
  //           className="embla__slide__img"
  //           src={e.image}
  //           alt="A cool cat."
  //         />
  //       </div>
  //     </div>
  //   )
  // }
  // )

  // console.log('s',displaySlides)

  return (
    <div>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides && slides.map(e => {
              return (
                <div className="embla__slide" key={e.id}>
                  <div className="embla__slide__inner">
                    <img
                      className="embla__slide__img"
                      src={e.image}
                      alt="A cool cat."
                    />
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
