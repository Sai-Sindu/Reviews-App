// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  getPreviousReview = () => {
    const {count} = this.state
    if (count > 0 && count <= 3) {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else {
      this.setState(prevState => ({count: prevState.count}))
    }
  }

  getNextReview = () => {
    const {count} = this.state
    console.log(count)
    if (count < 3 && count >= 0) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else {
      this.setState(prevState => ({count: prevState.count}))
    }
  }

  render() {
    const {count} = this.state
    console.log(count)
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <img src={imgUrl} alt={username} className="img-Url" />
        <div className="arrows-container">
          <button
            className="button"
            type="button"
            onClick={this.getPreviousReview}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="user-name">{username}</p>
          <button
            className="button"
            type="button"
            onClick={this.getNextReview}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
