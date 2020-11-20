import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";
import Slider from "../../Components/Slider";


const Container = styled.div `
    padding: 20px 20px;
`;

const HomePresenter = ({bestSeller, recommend, newBook, category, error, loading, settings}) =>
    loading ? (<Loader />) : (
        <Container>
            <Slider bestSeller={bestSeller}/>
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

HomePresenter.propTypes = {
    bestSeller: PropTypes.array,
    recommend: PropTypes.array,
    newBook: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default HomePresenter;