import "./navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
    <div className="logo">
      <img src="logo.png" alt="logo" />
      <span>JumpIn</span>
    </div>
    <div className="icons">
      <img src="/search.svg" alt="" className="icon"/>
      <img src="/app.svg" alt="" className="icon"/>
      <img src="/expand.svg" alt="" className="icon"/>
      <div className="notification">
        <img src="/notifications.svg" alt="" className="icon"/>
        <span>1</span>
      </div>
      <div className="user">
      <img src="https://s.hs-data.com/bilder/spieler/gross/192854.jpg" alt="" className="icon"/>
        <span>Ramón</span>
      </div>
      <img src="/settings.svg" alt="" className="icon" />
    </div>
    </div>
  )
}
