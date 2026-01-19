import { useState, useEffect } from "react";
import "./Food.css";

/* SVG ICONS */
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

const FilterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M3 4h18" />
    <path d="M6 12h12" />
    <path d="M10 20h4" />
  </svg>
);

export default function Food() {
  const [showPopup, setShowPopup] = useState(false);
  const [locationOn, setLocationOn] = useState(false);
  const [location, setLocation] = useState({
    title: "Location Off",
    sub: "Turn on location",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const enableLocation = () => {
    navigator.geolocation.getCurrentPosition(
      () => {
        setLocationOn(true);
        setLocation({
          title: "Home",
          sub: "Vijayawada, Poranki",
        });
        setShowPopup(false);
      },
      () => alert("Location permission denied")
    );
  };
  
  const selectAddress = (title, sub) => {
    if (!locationOn) return;
    setLocation({ title, sub });
    setShowPopup(false);
  };

  const foods = ["Chicken Biryani", "Paneer Butter Masala", "Veg Fried Rice"];
  const restaurants = ["Kumakarna Ruchulu", "McDonald's"];

  const filteredFoods = foods.filter((f) =>
    f.toLowerCase().includes(search.toLowerCase())
  );

  const filteredRestaurants = restaurants.filter((r) =>
    r.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HEADER */}
      <div className="food-header">
        <div className="location" onClick={() => setShowPopup(true)}>
          <LocationIcon />
          <div className="location-text">
            <b>{location.title}</b>
            <span>{location.sub}</span>
          </div>
        </div>

        <div className="top-filters">
          <span>Veg</span>
          <span>Egg</span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-container">
        <div className="search-row">
          <div className="search-bar">
            <SearchIcon />
            <input
              placeholder="Search food or restaurants"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-btn">
            <FilterIcon />
          </div>
        </div>
      </div>

      {/* RECOMMENDED */}
      <div className="section">
        <h3>Recommended For You</h3>
        <div className="recommended">
          {filteredFoods.map((item, i) => (
            <div className="reco-card" key={i}>
              <div className="reco-img" />
              <div className="reco-name">{item}</div>
              <div className="reco-price">₹150</div>
            </div>
          ))}
        </div>
      </div>

      {/* RESTAURANTS */}
      <div className="section">
        <h3>Restaurants</h3>
        {filteredRestaurants.map((r, i) => (
          <div className="restaurant-card" key={i}>
            <div className="restaurant-img" />
            <div className="restaurant-name">{r}</div>
            <div className="restaurant-info">
              10 KM | 30–40 Min | ⭐ 4.4
            </div>
          </div>
        ))}
      </div>

      {/* LOCATION POPUP */}
      {showPopup && (
        <div className="overlay">
          <div className="sheet">
            <h4>Select delivery location</h4>

            {!locationOn && (
              <div className="row location-off" onClick={enableLocation}>
                Turn on location
              </div>
            )}

            {locationOn && (
              <>
                <div
                  className="row"
                  onClick={() =>
                    selectAddress("Home", "Vijayawada, Poranki")
                  }
                >
                  Home
                </div>
                <div
                  className="row"
                  onClick={() =>
                    selectAddress("Office", "Benz Circle")
                  }
                >
                  Office
                </div>
              </>
            )}
          </div>
     </div>
      )}
    </>
  );
}