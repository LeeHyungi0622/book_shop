import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 10px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
    color: grey;
`;

const SearchPresenter = ({     
    results,
    loading,
    error,
    searchTerm,
    handleSubmit,
    updateTerm}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input 
                placeholder="Search books..."
                value={searchTerm}
                onChange={updateTerm}
            />
        </Form>
    
    {loading ? (
        <Loader />
    ):(
        <>
            {results && results.length > 0 && (
                <Section title="Book Search Results">
                    {results.map(book => (
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
                </Section>
            )}
        </>
    )}
    </Container>
)

SearchPresenter.propTypes = {
    result: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;