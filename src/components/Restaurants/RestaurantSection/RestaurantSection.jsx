import { useState, useEffect, useRef } from "react";
import { fetchRestaurants } from "../../../utils/serverAPI/restaurantsAPI";
import { MdExpandMore } from "react-icons/md";

import { RestaurantList } from "src/components/Restaurants/RestaurantList/RestaurantList";
import {
  StyledSection,
  Container,
  RestaurantsHeadline,
  MoreBtn,
} from "./RestaurantSection.styled";

export const RestaurantSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef();
  const observerElem = observerRef.current;
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  let observer;

  useEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);
    fetchRestaurants(page, 4, abortController.signal)
      .then((response) => {
        if (response) {
          setRestaurants((prevState) => [...prevState, ...response]);
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, [page]);

  const handleClick = async () => {
    observer = new IntersectionObserver(handleScroll, observerOptions);

    if (observerElem) {
      observer.observe(observerElem);
    }
  };

  function handleScroll(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prevState) => prevState + 1);
        return;
      } else {
        observer.observe(observerElem);
      }
    });
  }

  return (
    <StyledSection>
      <Container>
        {restaurants.length > 0 && (
          <RestaurantsHeadline>Featured Restaurants</RestaurantsHeadline>
        )}
        <RestaurantList
          restaurants={restaurants}
          isLoading={isLoading}
          observerRef={observerRef}
        />
        {restaurants.length > 0 && page <= 1 && (
          <MoreBtn onClick={handleClick}>
            View all <MdExpandMore />
          </MoreBtn>
        )}
      </Container>
    </StyledSection>
  );
};
