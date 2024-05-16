import './index.css'

const ImageItem = props => {
  const {eachData, onTabThumbnail} = props
  const {thumbnailUrl, id} = eachData
  const onThumbnailBtn = () => {
    onTabThumbnail(id)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onThumbnailBtn}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="list-thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
