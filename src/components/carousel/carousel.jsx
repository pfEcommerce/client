import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./carouselButtons.jsx";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
import "./carousel.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDetail } from "../../Redux/actions/detailActions.js";

const EmblaCarousel = ({ array, id }) => {
  console.log(array);
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [game, setGame] = useState(array);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.rootReducer.games);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);


  useEffect(() => {
    setTimeout(() => {
      if (!embla) return;
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
    }, 250);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {array
              ? array.map((e) => {
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
                  );
                })
              : ""}
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
