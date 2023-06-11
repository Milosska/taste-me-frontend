import { Container, Title, List } from "./CitiesList.styled";

export const CitiesList = () => {
  const cities = [
    "Kyiv",
    "Kharkiv",
    "Lviv",
    "Dnipro",
    "Odessa",
    "New York",
    "Miami",
    "Seatle",
    "Los Angeles",
    "Chicago",
    "London",
    "Birmingham",
    "Liverpool",
    "Glasgow",
    "Manchester",
    "Paris",
    "Bordeaux",
    "Nice",
    "Lyon",
    "Strasbourg",
    "Warsaw",
    "Wrocław",
    "Kraków",
    "Poznań",
    "Gdańsk",
  ];

  return (
    <Container>
      <Title>Our top cities</Title>
      <List>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </List>
    </Container>
  );
};
