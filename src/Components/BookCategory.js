import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.span`
    display: block;
    font-size: 12px;
    margin-bottom: 3px;
`;

const Year = styled.span`
    display: block;
    font-size: 12px;
    margin-bottom: 3px;
`;

const Author = styled.span`
    display: block;
    font-size: 12px;
    margin-bottom: 3px;
`;

const BookCategory = ({ id, imageUrl, title, rating, year, author, category }) => (
    <Link to={`/${category}/${id}`}>
        
    
    </Link>
);

BookCategory.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    author: PropTypes.string,
    bookCategory: PropTypes.string.isRequired
}

export default BookCategory;