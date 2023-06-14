import { useState, useEffect, useRef } from "react";
import { fetchRestaurants } from "../../../utils/serverAPI/restaurantsAPI";
import { MdExpandMore } from "react-icons/md";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { Container, List, MoreBtn, ObserverDiv } from "./RestaurantList.styled";

export const RestaurantList = () => {
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
      // observer.unobserve(observerElem);
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
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            restaurant={restaurant}
            isLoading={isLoading}
          />
        ))}
        <ObserverDiv ref={observerRef}></ObserverDiv>
      </List>
      {page <= 1 && (
        <MoreBtn onClick={handleClick}>
          View all <MdExpandMore />
        </MoreBtn>
      )}
    </Container>
  );
};
