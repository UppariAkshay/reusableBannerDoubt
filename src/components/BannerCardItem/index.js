// Write your code here.
import './index.css'

const Carditem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={`listitem-container ${className}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="btn-style">Show More</button>
      </div>
    </li>
  )
}

export default Carditem
