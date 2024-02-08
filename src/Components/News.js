import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
      constructor() {
            super();
            this.state = {
                  articles: [],
                  loading: false
            }
      }
      async componentDidMount() {
            let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ad45d68901394d7eab1278d39aa86d71";
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles })
      }
      render() {
            return (
                  <div>
                        <div className="container my-3">
                              <h2>NewsMonkey - Top Headlines</h2>
                              <div className="row">
                                    {this.state.articles.map((element) => {
                                          return <div className="col-md-4" key={element.url}>
                                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                          </div>
                                    })}

                              </div>
                        </div>
                  </div>
            )
      }
}

export default News
