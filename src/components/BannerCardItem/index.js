// Write your code here.
import './index.css'

const Carditem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button>Show More</button>
      </div>
    </li>
  )
}

export default Carditem
