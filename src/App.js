import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of res, Star rating, cuisine, delivery time
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 */

// React.createElement => Object => HTMLElement(render)
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTo7Sb8iYLjFeTf-I8Rnz7qnVpPzr6EvSUQ&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>

          <img
            className="cart-logo"
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
          />
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { img_url, name, cuisine, rating, delivery_time } = resData;

  return (
    <div className="res-card">
      <img className="res-img" src={img_url} alt="res-img" />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} stars</h4>
      <h4>{delivery_time} mins</h4>
    </div>
  );
};

const resList = [
  {
    id: 1,
    name: 'Golden Gate Grill',
    address: {
      street: '123 Market St',
      city: 'San Francisco',
      state: 'CA',
      zip: '94103',
    },
    img_url:
      'https://images.squarespace-cdn.com/content/v1/5de7e88257d35f456747fad5/1595789963589-INVC84RWZVSDYNQ1VK6H/Screenshot+2020-05-04+at+11.34.18+PM.png?format=2500w',
    full_address: '123 Market St, San Francisco, CA 94103',
    cuisine: 'American',
    is_veg: false,
    rating: 4.5,
    phone: '(415) 555-1234',
    website: 'https://goldengategrill.com',
    opening_hours: {
      'mon-fri': '11:00 AM - 10:00 PM',
      'sat-sun': '9:00 AM - 11:00 PM',
    },
    price_range: '$$',
    cost_for_two: 50,
    delivery_available: true,
    delivery_time: 35,
    reviews: [
      {
        user: 'JaneD',
        comment: 'Amazing burgers and great service!',
        rating: 5,
      },
      {
        user: 'FoodieLA',
        comment: 'Nice atmosphere but a bit pricey.',
        rating: 4,
      },
    ],
  },
  {
    id: 2,
    name: 'Sakura Sushi',
    address: {
      street: '456 Sunset Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90028',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/photosV2/3cbebaf4-6efa-4b63-81ca-91fa6db3a1a9-retina-large.png',
    full_address: '456 Sunset Blvd, Los Angeles, CA 90028',
    cuisine: 'Japanese',
    is_veg: false,
    rating: 4.7,
    phone: '(323) 555-5678',
    website: 'https://sakurarestaurantla.com',
    opening_hours: {
      'mon-thu': '12:00 PM - 9:00 PM',
      'fri-sat': '12:00 PM - 10:30 PM',
      sun: '12:00 PM - 8:00 PM',
    },
    price_range: '$$$',
    cost_for_two: 85,
    delivery_available: false,
    delivery_time: null,
    reviews: [
      {
        user: 'SushiLover88',
        comment: 'Best omakase experience in LA!',
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    name: 'Taco Fiesta',
    address: {
      street: '789 Elm St',
      city: 'San Diego',
      state: 'CA',
      zip: '92101',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/8da2cfc1-312e-483a-bfc6-9c5d99d8e0f6.',
    full_address: '789 Elm St, San Diego, CA 92101',
    cuisine: 'Mexican',
    is_veg: false,
    rating: 4.2,
    phone: '(619) 555-9012',
    website: null,
    opening_hours: {
      everyday: '10:00 AM - 9:00 PM',
    },
    price_range: '$',
    cost_for_two: 25,
    delivery_available: true,
    delivery_time: 20,
    reviews: [
      {
        user: 'NomNomSD',
        comment: 'Delicious and affordable street tacos!',
        rating: 4,
      },
      {
        user: 'TravelEater',
        comment: 'Great place for a quick bite!',
        rating: 4.5,
      },
    ],
  },
  {
    id: 4,
    name: 'Green Earth Cafe',
    address: {
      street: '321 Palm Dr',
      city: 'Santa Barbara',
      state: 'CA',
      zip: '93101',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/6fbe74f5-4d51-4de3-92f7-cd642a095262.png',
    full_address: '321 Palm Dr, Santa Barbara, CA 93101',
    cuisine: 'Vegan',
    is_veg: true,
    rating: 4.8,
    phone: '(805) 555-7890',
    website: 'https://greenearthcafe.com',
    opening_hours: {
      'mon-sun': '8:00 AM - 8:00 PM',
    },
    price_range: '$$',
    cost_for_two: 40,
    delivery_available: true,
    delivery_time: 30,
    reviews: [
      {
        user: 'HealthyLife',
        comment: 'So fresh and flavorful! Love the smoothies!',
        rating: 5,
      },
    ],
  },
  {
    id: 5,
    name: 'Ocean Breeze Bistro',
    address: {
      street: '222 Seaside Ave',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90401',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/fef1bae1-e5cc-4134-8cdf-91f11239be8d.jpeg',
    full_address: '222 Seaside Ave, Santa Monica, CA 90401',
    cuisine: 'Seafood',
    is_veg: false,
    rating: 4.6,
    phone: '(310) 555-3456',
    website: 'https://oceanbreezebistro.com',
    opening_hours: {
      'mon-fri': '11:00 AM - 10:00 PM',
      'sat-sun': '10:00 AM - 11:00 PM',
    },
    price_range: '$$$',
    cost_for_two: 90,
    delivery_available: true,
    delivery_time: 40,
    reviews: [
      {
        user: 'SeafoodFan',
        comment: 'Fresh fish and beautiful views!',
        rating: 5,
      },
      {
        user: 'DineOutLA',
        comment: 'A bit pricey but worth it for the quality.',
        rating: 4,
      },
    ],
  },
  {
    id: 6,
    name: 'Bella Pasta',
    address: {
      street: '555 Olive St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90015',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/f2e77648-06a7-4d60-b5cf-f5775ab1d794.jpg',
    full_address: '555 Olive St, Los Angeles, CA 90015',
    cuisine: 'Italian',
    is_veg: false,
    rating: 4.3,
    phone: '(213) 555-7890',
    website: 'https://bellapastala.com',
    opening_hours: {
      'mon-thu': '12:00 PM - 9:00 PM',
      'fri-sun': '12:00 PM - 10:00 PM',
    },
    price_range: '$$',
    cost_for_two: 60,
    delivery_available: false,
    delivery_time: null,
    reviews: [
      {
        user: 'PastaLover',
        comment: 'Authentic flavors, great pasta dishes.',
        rating: 5,
      },
      {
        user: 'CityEats',
        comment: 'Cozy spot but often busy.',
        rating: 4,
      },
    ],
  },
  {
    id: 7,
    name: 'Spice Route',
    address: {
      street: '900 Curry Ln',
      city: 'Fresno',
      state: 'CA',
      zip: '93721',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/1268ffc0-3cef-4b9f-b8af-dbed0a850127.png',
    full_address: '900 Curry Ln, Fresno, CA 93721',
    cuisine: 'Indian',
    is_veg: true,
    rating: 4.7,
    phone: '(559) 555-3344',
    website: 'https://spiceroutefresno.com',
    opening_hours: {
      'mon-sun': '11:00 AM - 10:00 PM',
    },
    price_range: '$$',
    cost_for_two: 45,
    delivery_available: true,
    delivery_time: 30,
    reviews: [
      {
        user: 'CurryLover',
        comment: 'Best butter chicken in town!',
        rating: 5,
      },
      {
        user: 'VeggieFan',
        comment: 'Great vegetarian options.',
        rating: 4.5,
      },
    ],
  },
  {
    id: 8,
    name: 'The Vegan Delight',
    address: {
      street: '110 Green Way',
      city: 'Sacramento',
      state: 'CA',
      zip: '95814',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/photos/0798da29-a89f-42b7-a9eb-be28e7d7a459-retina-large.jpg',
    full_address: '110 Green Way, Sacramento, CA 95814',
    cuisine: 'Vegan',
    is_veg: true,
    rating: 4.9,
    phone: '(916) 555-1212',
    website: 'https://vegandelightsac.com',
    opening_hours: {
      'mon-sun': '9:00 AM - 9:00 PM',
    },
    price_range: '$$',
    cost_for_two: 40,
    delivery_available: true,
    delivery_time: 25,
    reviews: [
      {
        user: 'PlantBased',
        comment: 'Amazing vegan options, fresh ingredients!',
        rating: 5,
      },
    ],
  },
  {
    id: 9,
    name: 'BBQ Pit Masters',
    address: {
      street: '77 Smoke Rd',
      city: 'Bakersfield',
      state: 'CA',
      zip: '93301',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/photosV2/963ea549-89a8-41df-ae54-763e0c722a2f-retina-large.jpg',
    full_address: '77 Smoke Rd, Bakersfield, CA 93301',
    cuisine: 'Barbecue',
    is_veg: false,
    rating: 4.4,
    phone: '(661) 555-6767',
    website: 'https://bbqpitmasters.com',
    opening_hours: {
      'tue-sun': '11:00 AM - 10:00 PM',
      mon: 'Closed',
    },
    price_range: '$$',
    cost_for_two: 55,
    delivery_available: true,
    delivery_time: 35,
    reviews: [
      {
        user: 'MeatLover',
        comment: 'Juicy ribs and great sauces!',
        rating: 5,
      },
      {
        user: 'LocalEats',
        comment: 'Good portions, friendly staff.',
        rating: 4,
      },
    ],
  },
  {
    id: 10,
    name: 'Mediterranean Magic',
    address: {
      street: '300 Olive St',
      city: 'Long Beach',
      state: 'CA',
      zip: '90802',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/e2edfc03-637e-4a1c-bc31-a27db1f351f6.jpg',
    full_address: '300 Olive St, Long Beach, CA 90802',
    cuisine: 'Mediterranean',
    is_veg: true,
    rating: 4.6,
    phone: '(562) 555-2345',
    website: 'https://medmagiclb.com',
    opening_hours: {
      'mon-sat': '11:00 AM - 9:00 PM',
      sun: '12:00 PM - 8:00 PM',
    },
    price_range: '$$',
    cost_for_two: 50,
    delivery_available: true,
    delivery_time: 30,
    reviews: [
      {
        user: 'HealthyEater',
        comment: 'Great hummus and fresh ingredients.',
        rating: 5,
      },
      {
        user: 'BeachBites',
        comment: 'Perfect spot for a light meal.',
        rating: 4,
      },
    ],
  },
  {
    id: 11,
    name: 'Burger Haven',
    address: {
      street: '101 Burger Blvd',
      city: 'Oakland',
      state: 'CA',
      zip: '94607',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/437b77da-1a69-4082-a8e2-5eed1ace17c4.png',
    full_address: '101 Burger Blvd, Oakland, CA 94607',
    cuisine: 'American',
    is_veg: false,
    rating: 4.3,
    phone: '(510) 555-6677',
    website: 'https://burgerhavenoakland.com',
    opening_hours: {
      'mon-fri': '11:00 AM - 11:00 PM',
      'sat-sun': '10:00 AM - 12:00 AM',
    },
    price_range: '$',
    cost_for_two: 30,
    delivery_available: true,
    delivery_time: 25,
    reviews: [
      {
        user: 'BurgerFan',
        comment: 'Best burgers in Oakland!',
        rating: 5,
      },
      {
        user: 'QuickBites',
        comment: 'Fast service and tasty fries.',
        rating: 4,
      },
    ],
  },
  {
    id: 12,
    name: 'Pho Saigon',
    address: {
      street: '204 Little Saigon St',
      city: 'Irvine',
      state: 'CA',
      zip: '92618',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/25286bbd-21b3-4d56-b5f6-bd0a6cb2fe7a.jpg',
    full_address: '204 Little Saigon St, Irvine, CA 92618',
    cuisine: 'Vietnamese',
    is_veg: false,
    rating: 4.5,
    phone: '(949) 555-1234',
    website: 'https://phosaigonirvine.com',
    opening_hours: {
      'mon-sun': '10:00 AM - 9:00 PM',
    },
    price_range: '$$',
    cost_for_two: 40,
    delivery_available: true,
    delivery_time: 30,
    reviews: [
      {
        user: 'PhoLover',
        comment: 'Rich broth and fresh herbs.',
        rating: 5,
      },
      {
        user: 'AsianEats',
        comment: 'Great noodle soups.',
        rating: 4,
      },
    ],
  },
  {
    id: 13,
    name: 'Crepe Corner',
    address: {
      street: '12 Maple St',
      city: 'Berkeley',
      state: 'CA',
      zip: '94704',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/b2c29c8b-52e8-4bcb-935a-4c60a1edbc69.jpg',
    full_address: '12 Maple St, Berkeley, CA 94704',
    cuisine: 'French',
    is_veg: true,
    rating: 4.2,
    phone: '(510) 555-4321',
    website: 'https://crepecornerberkeley.com',
    opening_hours: {
      'wed-sun': '9:00 AM - 8:00 PM',
      'mon-tue': 'Closed',
    },
    price_range: '$$',
    cost_for_two: 45,
    delivery_available: false,
    delivery_time: null,
    reviews: [
      {
        user: 'SweetTooth',
        comment: 'Lovely crepes and cozy vibe.',
        rating: 4,
      },
      {
        user: 'CafeGoer',
        comment: 'Perfect spot for brunch.',
        rating: 4.5,
      },
    ],
  },
  {
    id: 14,
    name: 'Curry House',
    address: {
      street: '808 Spice Rd',
      city: 'San Jose',
      state: 'CA',
      zip: '95112',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/c695dd37-95e7-42bd-aa9d-4fd02e7b730a.jpg',
    full_address: '808 Spice Rd, San Jose, CA 95112',
    cuisine: 'Indian',
    is_veg: true,
    rating: 4.4,
    phone: '(408) 555-6789',
    website: 'https://curryhouse.com',
    opening_hours: {
      'mon-sun': '11:00 AM - 9:00 PM',
    },
    price_range: '$$',
    cost_for_two: 50,
    delivery_available: true,
    delivery_time: 30,
    reviews: [
      {
        user: 'SpiceLover',
        comment: 'Rich flavors and generous portions.',
        rating: 5,
      },
      {
        user: 'FamilyDiner',
        comment: 'Great for group dinners.',
        rating: 4,
      },
    ],
  },
  {
    id: 15,
    name: 'Sunset Tacos',
    address: {
      street: '456 Beach Blvd',
      city: 'Huntington Beach',
      state: 'CA',
      zip: '92648',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/98d38efc-cc25-40ed-b369-7821e9a50633.JPG',
    full_address: '456 Beach Blvd, Huntington Beach, CA 92648',
    cuisine: 'Mexican',
    is_veg: false,
    rating: 4.3,
    phone: '(714) 555-1212',
    website: null,
    opening_hours: {
      'mon-sun': '10:00 AM - 10:00 PM',
    },
    price_range: '$',
    cost_for_two: 30,
    delivery_available: true,
    delivery_time: 20,
    reviews: [
      {
        user: 'TacoLover',
        comment: 'Great flavors and fast service!',
        rating: 4,
      },
      {
        user: 'BeachEats',
        comment: 'Perfect for a casual meal.',
        rating: 4.5,
      },
    ],
  },
  {
    id: 16,
    name: 'The Breakfast Nook',
    address: {
      street: '78 Morning St',
      city: 'Palm Springs',
      state: 'CA',
      zip: '92262',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/26afb16f-da89-4926-b3ac-1690c6299b25.jpg',
    full_address: '78 Morning St, Palm Springs, CA 92262',
    cuisine: 'Breakfast & Brunch',
    is_veg: true,
    rating: 4.7,
    phone: '(760) 555-7890',
    website: 'https://breakfastnookps.com',
    opening_hours: {
      'mon-sun': '7:00 AM - 2:00 PM',
    },
    price_range: '$$',
    cost_for_two: 35,
    delivery_available: false,
    delivery_time: null,
    reviews: [
      {
        user: 'EarlyBird',
        comment: 'Best pancakes and coffee in town!',
        rating: 5,
      },
    ],
  },
  {
    id: 17,
    name: 'Dragon Express',
    address: {
      street: '101 Chinatown St',
      city: 'San Francisco',
      state: 'CA',
      zip: '94108',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/82c72b7f-3a96-4688-a4b7-d23c227c0cb5.JPG',
    full_address: '101 Chinatown St, San Francisco, CA 94108',
    cuisine: 'Chinese',
    is_veg: false,
    rating: 4.1,
    phone: '(415) 555-1111',
    website: 'https://dragonexpresssf.com',
    opening_hours: {
      'mon-sun': '10:00 AM - 9:00 PM',
    },
    price_range: '$',
    cost_for_two: 30,
    delivery_available: true,
    delivery_time: 25,
    reviews: [
      {
        user: 'DimSumFan',
        comment: 'Quick delivery and tasty dumplings.',
        rating: 4,
      },
      {
        user: 'FoodCritic',
        comment: 'Good for casual meals.',
        rating: 4,
      },
    ],
  },
  {
    id: 18,
    name: 'Bella Roma Pizzeria',
    address: {
      street: '500 Vine St',
      city: 'Fresno',
      state: 'CA',
      zip: '93721',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/photosV2/49c3d870-6482-40db-97bd-287b8a5b91b8-retina-large.jpg',
    full_address: '500 Vine St, Fresno, CA 93721',
    cuisine: 'Italian',
    is_veg: false,
    rating: 4.5,
    phone: '(559) 555-2233',
    website: 'https://bellaromapizzeria.com',
    opening_hours: {
      'mon-thu': '11:00 AM - 10:00 PM',
      'fri-sat': '11:00 AM - 11:00 PM',
      sun: '12:00 PM - 9:00 PM',
    },
    price_range: '$$',
    cost_for_two: 55,
    delivery_available: true,
    delivery_time: 30,
    reviews: [
      {
        user: 'PizzaFan',
        comment: 'Authentic Italian pizza and great crust.',
        rating: 5,
      },
      {
        user: 'FamilyEats',
        comment: 'Friendly service and good portion sizes.',
        rating: 4,
      },
    ],
  },
  {
    id: 19,
    name: 'Cafe Mocha',
    address: {
      street: '88 Coffee Lane',
      city: 'Santa Cruz',
      state: 'CA',
      zip: '95060',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/74dc5dd6-e072-423f-9729-e6a559301372.jpg',
    full_address: '88 Coffee Lane, Santa Cruz, CA 95060',
    cuisine: 'Cafe',
    is_veg: true,
    rating: 4.4,
    phone: '(831) 555-4455',
    website: 'https://cafemochasc.com',
    opening_hours: {
      'mon-sun': '7:00 AM - 7:00 PM',
    },
    price_range: '$',
    cost_for_two: 20,
    delivery_available: false,
    delivery_time: null,
    reviews: [
      {
        user: 'CoffeeAddict',
        comment: 'Best lattes and pastries.',
        rating: 5,
      },
      {
        user: 'ChillSpot',
        comment: 'Cozy atmosphere for work and hangouts.',
        rating: 4,
      },
    ],
  },
  {
    id: 20,
    name: 'Urban Vegan',
    address: {
      street: '210 Main St',
      city: 'San Diego',
      state: 'CA',
      zip: '92101',
    },
    img_url:
      'https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/2be570a9-24b6-44ae-b5f9-cbb70cac666e.jpg',
    full_address: '210 Main St, San Diego, CA 92101',
    cuisine: 'Vegan',
    is_veg: true,
    rating: 4.8,
    phone: '(619) 555-7788',
    website: 'https://urbanvegan.com',
    opening_hours: {
      'mon-sun': '8:00 AM - 9:00 PM',
    },
    price_range: '$$',
    cost_for_two: 45,
    delivery_available: true,
    delivery_time: 25,
    reviews: [
      {
        user: 'HealthyEats',
        comment: 'Delicious and healthy vegan meals.',
        rating: 5,
      },
    ],
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
