import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Poster from "./Poster";

const HeadTitle = styled.h2`
  padding: 20px 0 20px 0;
  color: #6eb5ff;
  font-weight: 600;
  font-size: 20px;
`;

const ImageSlider = styled(Slider)`
    width: 95vw;
    height: 35vh;
    margin: 30px 0 30px 12px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: center;
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
        <HeadTitle>이달의 베스트샐러</HeadTitle>
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