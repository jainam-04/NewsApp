import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
      capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
      }
      constructor(props) {
            super(props);
            this.state = {
                  articles: [],
                  loading: false,
                  page: 1,
            };
            document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
      }
      async updateNews() {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad45d68901394d7eab1278d39aa86d71&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                  articles: parsedData.articles,
                  totalResults: parsedData.totalResults,
                  loading: false,
            });
      }
      async componentDidMount() {
            this.updateNews();
      }
      handlePrevClick = async () => {
            this.setState({
                  page: this.state.page - 1
            });
            this.updateNews();
      };
      handleNextClick = async () => {
            this.setState({
                  page: this.state.page + 1
            });
            this.updateNews();
      };
      render() {
            return (
                  <div>
                        <div className="container my-3">
                              <h1 className="text-center" style={{ margin: "2vw 0" }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                              {this.state.loading && <Spinner />}
                              <div className="row">
                                    {!this.state.loading &&
                                          this.state.articles.map((element) => {
                                                return (
                                                      <div className="col-md-4" key={element.url}>
                                                            <NewsItem
                                                                  title={element.title ? element.title : ""}
                                                                  description={
                                                                        element.description ? element.description : ""
                                                                  }
                                                                  imageUrl={element.urlToImage}
                                                                  newsUrl={element.url}
                                                                  author={element.author}
                                                                  date={element.publishedAt}
                                                                  source={element.source.name}
                                                            />
                                                      </div>
                                                );
                                          })}
                              </div>
                              <div className="container d-flex justify-content-between">
                                    <button
                                          disabled={this.state.page <= 1}
                                          type="button"
                                          className="btn btn-dark"
                                          onClick={this.handlePrevClick}
                                    >
                                          &larr; Previous
                                    </button>
                                    <button
                                          disabled={
                                                this.state.page + 1 >
                                                Math.ceil(this.state.totalResults / this.props.pageSize)
                                          }
                                          type="button"
                                          className="btn btn-dark"
                                          onClick={this.handleNextClick}
                                    >
                                          Next &rarr;
                                    </button>
                              </div>
                        </div>
                  </div>
            );
      }
}

export default News;
