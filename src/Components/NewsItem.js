import React, { Component } from 'react'

export class NewsItem extends Component {
      render() {
            let {title, description} = this.props;
            return (
                  <div>
                        <div className="card" style={{width: "18rem"}}>
                              <img src="https://www.aljazeera.com/wp-content/uploads/2024/02/Naman-Tiwari-of-India-in-bowling-action-during-the-ICC-U19-Mens-Cricket-World-Cup-South-Africa-2024-Semi-Final-match-between-India-and-South-Africa-at-Willowmoore-Park-on-February-06-2024-in-Benoni-South-Africa-1707209612.jpg?resize=1920%2C1440" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                          <h5 className="card-title">{title}</h5>
                                          <p className="card-text">{description}</p>
                                          <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
                                    </div>
                        </div>
                  </div>
            )
      }
}

export default NewsItem
