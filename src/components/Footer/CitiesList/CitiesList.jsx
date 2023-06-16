import { useState, useEffect } from "react";
import { fetchCities } from "src/utils/serverAPI/citiesAPI";
import { Container, Title, List } from "./CitiesList.styled";

export const CitiesList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getCities() {
      const fetchedCities = await fetchCities();
      if (fetchedCities) {
        setCities(fetchedCities);
      }
    }

    getCities();
  }, []);

  return (
    <>
      {cities.length > 0 && (
        <Container>
          <Title>Our top cities</Title>
          <List>
            {cities.map(({ _id, name }) => (
              <li key={_id}>{name}</li>
            ))}
          </List>
        </Container>
      )}
    </>
  );
};
