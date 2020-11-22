import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Poster from "./Poster";

const ImageSlider = styled(Slider)`
    width: 95vw;
    height: 35vh;
    background-color: rgba(30,144,255, 0.3);
    margin: 10px;
    padding: 0 55px;
    display: flex;
    align-items: center;
`;

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    const bestSeller = this.props.bestSeller;
    return (
      <>
        <h2>이달의 베스트샐러</h2>
        <ImageSlider {...settings}>
            { bestSeller.map(book => (
                <Poster 
                key={book.itemId}
                itemId={book.itemId}
                imageUrl={book.coverSmallUrl}
                title={book.title}
                rating={book.customerReviewRank}
                year={book.pubDate.substring(0,4)}
                author={book.author}
                isbn={book.isbn}
            />
            ))}
        </ImageSlider>
      </>
    );
  }
}