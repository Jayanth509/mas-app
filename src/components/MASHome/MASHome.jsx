import { useNavigate } from "react-router-dom";
import "./MASHome.css";

/* ICONS */
const RideIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <circle cx="5" cy="18" r="3" />
    <circle cx="19" cy="18" r="3" />
    <path d="M5 18h4l3-7h4l3 7" />
    <path d="M9 11l2-4h4" />
  </svg>
);
const FoodIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M4 14h16" />
    <path d="M6 14c0 4 12 4 12 0" />
    <path d="M8 10c0-1 1-2 1-3" />
    <path d="M12 10c0-1 1-2 1-3" />
    <path d="M16 10c0-1 1-2 1-3" />
  </svg>
);
const QuizIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M8 10h8" />
    <path d="M8 14h5" />
  </svg>
);
const ParcelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M21 16V8l-9-4-9 4v8l9 4 9-4z" />
    <path d="M3.3 7L12 12l8.7-5" />
    <path d="M12 22V12" />
  </svg>
);
const FashionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M4 6l4-3h8l4 3" />
    <path d="M6 8v13h12V8" />
  </svg>
);
const GroceryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.6 13h12.4l2-8H6" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M3 12l9-9 9 9" />
    <path d="M9 21V9h6v12" />
  </svg>
);
const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
  </svg>
);

const services = [
  { name: "Ride", icon: RideIcon },
  { name: "Food", icon: FoodIcon, path: "/food" },
  { name: "Quiz", icon: QuizIcon },
  { name: "Parcel", icon: ParcelIcon },
  { name: "Fashion", icon: FashionIcon, upcoming: true },
  { name: "Grocery", icon: GroceryIcon, upcoming: true },
];

export default function MASHome() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* HEADER */}
      <div className="header">MAS</div>

      {/* GRID */}
      <div className="content">
        {services.map((item, i) => (
          <div
            key={i}
            className={`card ${item.upcoming ? "disabled" : ""}`}
            onClick={() => item.path && navigate(item.path)}
          >
            <item.icon />
            <span>{item.name}</span>
            {item.upcoming && <div className="upcoming">Upcoming</div>}
          </div>
        ))}
      </div>

      {/* STICKY BOTTOM NAV */}
      <div className="bottom-nav">
        <HomeIcon />
        <ProfileIcon />
      </div>
    </div>
  );
}
