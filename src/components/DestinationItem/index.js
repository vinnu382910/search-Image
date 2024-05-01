// Write your code here
import './index.css'

const DestinationItem = props => {
  const {imgDetails} = props
  const {name, imgUrl} = imgDetails
  return (
    <li>
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
