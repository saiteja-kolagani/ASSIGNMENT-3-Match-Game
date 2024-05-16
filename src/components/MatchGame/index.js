import {Component} from 'react'

import ImageItem from '../ImageItem'

import NavBar from '../NavBar'

import TabItem from '../TabItem'

import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList} = this.props
    this.state = {
      activeTab: 'FRUIT',
      matchImgData: imagesList[0],
      score: 0,
      timer: 60,
      intervalId: null,
      isRunning: true,
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  startTimer = () => {
    const intervalId = setInterval(this.tick, 1000)
    this.setState({intervalId})
  }

  onClickResetBtn = () => {
    this.setState({
      isRunning: true,
      activeTab: 'FRUIT',
      score: 0,
      timer: 60,
    })
    this.startTimer()
  }

  tick = () => {
    const {timer} = this.state
    if (timer > 0) {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }))
    } else {
      this.clearInterval()
    }
  }

  clearInterval = () => {
    const {intervalId} = this.state
    clearInterval(intervalId)
  }

  onTap = id => {
    this.setState({
      activeTab: id,
    })
  }

  onTabThumbnail = uniqueId => {
    const {imagesList} = this.props
    const {matchImgData} = this.state
    const {id} = matchImgData
    if (uniqueId === id) {
      this.setState(prevState => ({
        matchImgData: imagesList[Math.floor(Math.random() * imagesList.length)],
        score: prevState.score + 1,
      }))
    } else {
      this.clearInterval()
      this.setState({
        isRunning: false,
      })
    }
  }

  render() {
    const {activeTab, matchImgData, score, timer, isRunning} = this.state
    const {tabsList, imagesList} = this.props
    const thumbnailList = imagesList.filter(each => each.category === activeTab)

    return (
      <div className="bg-container">
        <NavBar scoreData={score} timerData={timer} />
        {isRunning && timer > 0 && (
          <main className="main-container">
            <section className="section-container">
              <figure className="figure-container">
                <img
                  src={matchImgData.imageUrl}
                  alt="match"
                  className="figure"
                />
              </figure>
              <ul className="tabs-container">
                {tabsList.map(each => (
                  <TabItem
                    details={each}
                    key={each.tabId}
                    onTap={this.onTap}
                    tab={activeTab}
                  />
                ))}
              </ul>
              <ul className="unordered-list-container">
                {thumbnailList.map(each => (
                  <ImageItem
                    key={each.id}
                    eachData={each}
                    onTabThumbnail={this.onTabThumbnail}
                  />
                ))}
              </ul>
            </section>
          </main>
        )}
        {(!isRunning || timer === 0) && (
          <main className="main-container-scorecard">
            <section className="scorecard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
                className="trophy"
              />
              <div>
                <p className="score-heading">YOUR SCORE</p>
                <p className="scorecard-score">{score}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="play-again-btn"
                  onClick={this.onClickResetBtn}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                    alt="reset"
                    className="reset"
                  />
                  PLAY AGAIN
                </button>
              </div>
            </section>
          </main>
        )}
      </div>
    )
  }
}

export default MatchGame
