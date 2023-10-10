import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="mocklogo-optimum.png" alt="Mock optimum logo" />
        <span>Optimum Services</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="Search icon" className="icon" />
        <img src="/app.svg" alt="App icon" className="icon" />
        <img src="/expand.svg" alt="Expand icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="Notification icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://randomuser.me/api/portraits/men/11.jpg"
            alt="User photo"
          />
          <span>Niels</span>
        </div>
        <img src="/settings.svg" alt="Settings icon" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
