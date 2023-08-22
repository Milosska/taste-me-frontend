import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { current_restaurant } from "src/redux/restaurant/selectors";
import { cathegory } from "src/redux/fliters/selectors";
import { fetchFoodsByRestaurant } from "src/utils/serverAPI/foodsAPI";

import { FoodsCard } from "../FoodsCard/FoodsCard";
import { Container, List, ObserverDiv } from "./FoodsList.styled";

export const FoodsList = () => {
  const [foods, setFoods] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCathegory, setSearchCathegory] = useState(null);
  const restaurant = useSelector(current_restaurant);
  const currentCathegory = useSelector(cathegory);
  const observerRef = useRef();

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);

    fetchFoodsByRestaurant(
      restaurant,
      page,
      15,
      abortController.signal,
      searchCathegory
    )
      .then((res) => {
        if (res) {
          page === 1
            ? setFoods([...res.results])
            : setFoods((prevState) => [...prevState, ...res.results]);
          setTotalCount(res.totalCount);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, [restaurant, page, searchCathegory]);

  useEffect(() => {
    setPage(1);
  }, [restaurant]);

  useEffect(() => {
    if (searchCathegory !== currentCathegory) {
      setSearchCathegory(currentCathegory);
      setPage(1);
    }
  }, [currentCathegory, searchCathegory]);

  useEffect(() => {
    // Endless scroll
    if (foods.length >= totalCount) {
      return;
    }

    const observerElem = observerRef.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    let observer = new IntersectionObserver(handleScroll, observerOptions);

    if (observerElem) {
      observer.observe(observerElem);
    }

    function handleScroll(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPage((prevState) => prevState + 1);
          return;
        }
      });

      // window.scrollBy(0, -100);
    }

    return () => {
      observer.unobserve(observerElem);
    };
  }, [setPage, foods, totalCount]);

  return (
    <Container>
      <List>
        {foods.map((food) => {
          return <FoodsCard key={food._id} food={food} isLoading={isLoading} />;
        })}
      </List>
      <ObserverDiv ref={observerRef}></ObserverDiv>
    </Container>
  );
};
