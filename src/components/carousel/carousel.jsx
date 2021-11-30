import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./carouselButtons.jsx";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
import "./carousel.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDetail } from "../../Redux/actions/detailActions.js";
import { StyledBadge } from "../styles/styled_badge/styledBadge.js";

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);


  const state = useSelector(state => state.rootReducer.games)

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

  // useEffect(() => {
  //   if (slides.length === 0) {
  //     setSlides(array)
  //   }
  // }, [array,slides])

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);



  return (
    <div>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {state.map(e => {
              if (e.discount > 20) {
                return (
                  <div className="embla__slide" key={e.id}>
                    <div className="embla__slide__inner">
                        <h2 className="embla_title">{e.name}</h2>
                        <h2 className="embla_discount">{e.discount}% de descuento!</h2>
                        <img
                          className="embla__slide__img"
                          src={e.image}
                          alt="A cool cat."
                        />
                      
                    </div>
                  </div>
                )
              }
            }
            )}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
