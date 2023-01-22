import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category:"general"
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  async componentDidMount() {
    this.updateNews();
  }
  // goToPrev = async () => {
  //   this.setState({page:this.state.page-1});
  //   this.updateNews();
  // }
  // goToNext = async () => {
  //   this.setState({page:this.state.page+1});
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9bf42d72c0f4ee8815803c65dd02d22&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
  }; 
  
  render() {
    return (
      <div className="container my3">
        <h1 className="text-center">Top HeadLines on {this.props.category}</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-3">
              <NewsItem title={element.title === undefined || element.title === null ? "" : element.title} description={element.description === undefined || element.description === null ? "" : element.description} imgurl={element.urlToImage === undefined || element.urlToImage === null ? "" : element.urlToImage} newsurl={element.url === undefined || element.url === null ? "https://google.com" : element.url} date={element.publishedAt}/>
            </div>
          })}
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.goToPrev}>&larr; Prev Page</button>
            <button disabled={this.state.page > (Math.ceil(this.state.totalResults / 9))} type="button" class="btn btn-dark" onClick={this.goToNext}>Next Page &rarr;</button>
          </div> */}
        </div>
          </InfiniteScroll>
      </div>
    )
  }
}
