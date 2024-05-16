import './index.css'

const NavBar = props => {
  const {scoreData, timerData} = props
  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="nav-logo"
      />
      <ul className="nav-items">
        <li className="nav-score-item">
          <p>
            Score: <span className="nav-item">{scoreData}</span>
          </p>
        </li>
        <li className="nav-timer-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="nav-timer-image"
          />
          <p className="nav-item">{timerData} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
