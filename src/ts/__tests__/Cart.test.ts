import Cart from '../service/Cart';
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('card should be filled', () => {
  const cart = new Cart();
  cart.add(new Movie(
    9999,
    'Мстители',
    'The Avengers',
    100,
    2012,
    'США',
    'Avengers Assemble',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137'));
  expect(cart.items).toEqual([
  { "id": 9999,
    "name": "Мстители",
    "author": "The Avengers",
    "price": 100,
    "year": 2012,
    "city": "США",
    "tagline": "Avengers Assemble",
    "genre": ["фантастика", "боевик", "фэнтези", "приключения"], 
    "time": "137 мин. /2:17"
    }
    ]);
});