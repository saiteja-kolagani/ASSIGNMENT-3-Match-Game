import './index.css'

const TabItem = props => {
  const {details, onTap, tab} = props
  const {tabId, displayText} = details
  const btnStyle = tab === tabId ? 'active-btn' : 'tab-button'
  const onClickBtn = () => {
    onTap(tabId)
  }
  return (
    <li>
      <button
        type="button"
        id={tabId}
        className={btnStyle}
        onClick={onClickBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
