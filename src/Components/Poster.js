import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div `
    font-size: 12px;
    padding: 5px;
`;

const Image = styled.div `
    background-image: url(${(props) => props.bgUrl});
    height: 280px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right: 5px;
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
    -webkit-box-shadow: 3px 11px 22px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 11px 22px 5px rgba(0,0,0,0.75);
    box-shadow: 3px 11px 22px 5px rgba(0,0,0,0.75);
`;

const Title = styled.span`
    display: block;
    font-size: 15px;
    margin-bottom: 3px;
    color:#0d1c45;
    font-weight: 600;
    padding-top: 10px;
`;

const Author = styled.span`
    display: block;
    font-size: 11px;
    margin-bottom: 3px;
    color: #0d1c45;
`;

const Year = styled.span`
    font-size: 10px;
    color:#0d1c45;
`;

const Poster = ({ itemId, imageUrl, title, rating, year, author, categoryId, isbn }) => {
    return (
        <Link to={`/book/${isbn}`}>
            <Container>
                <ImageContainer>
                    <Image bgUrl={imageUrl? imageUrl : ""}/>
                    <Rating>
                        <span role="img" aria-label="rating">
                          🌟
                        </span>{" "}
                        {rating}/10
                    </Rating>
                </ImageContainer>
                <Title>
                    {title.length > 18 ? `${title.substring(0, 15)}...`: title}
                </Title>
                <Author>
                    {author}
                </Author>
                <Year>{year}</Year>
            </Container>
        </Link>
    )
}

Poster.propTypes = {
    itemId: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    author: PropTypes.string,
    categoryId: PropTypes.number
}

export default Poster;