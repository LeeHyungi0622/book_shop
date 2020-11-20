import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

const Container = styled.div `
    padding: 20px 20px;
`;

const BookPresenter = ({bestSeller, recommend, newBook, category, error, loading}) =>
    loading ? (<Loader />) : (
        <Container>
            {bestSeller && bestSeller.length > 0 && (
                <Section title="베스트샐러">
                    {bestSeller.map((book) => (
                        <Poster 
                            itemId={book.itemId}
                            imageUrl={book.coverSmallUrl}
                            title={book.title}
                            rating={book.customerReviewRank}
                            year={book.pubDate.substring(0,4)}
                            author={book.author}
                        />
                    ))}
                </Section>
            )}
            {recommend && recommend.length > 0 && (
                <Section title="추천도서">
                    {recommend.map(book => (
                        <Poster 
                            itemId={book.itemId}
                            imageUrl={book.coverSmallUrl}
                            title={book.title}
                            rating={book.customerReviewRank}
                            year={book.pubDate.substring(0,4)}
                            author={book.author}
                        />
                    ))}
                </Section>
             )
            }
            {newBook && newBook.length > 0 && (
                <Section title="신간도서">
                    {newBook.map(book => (
                        <Poster 
                            itemId={book.itemId}
                            imageUrl={book.coverSmallUrl}
                            title={book.title}
                            rating={book.customerReviewRank}
                            year={book.pubDate.substring(0,4)}
                            author={book.author}
                        />
                    ))}
                </Section>
            )
            }
        </Container>
    );

BookPresenter.propTypes = {
    bestSeller: PropTypes.array,
    recommend: PropTypes.array,
    newBook: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default BookPresenter;