import React, { Component } from "react";
import { bookApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default class extends Component {

    state = {
        results: null,
        searchTerm: "",
        loading: false,
        error: null
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    }

    updateTerm = (event) => {
        const { target: { value } } = event;
        this.setState({
            searchTerm: value
        });
    }

    searchByTerm = async() => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const { data: { item } } = await bookApi.search(searchTerm);
            this.setState({ results: item })
        } catch {

        } finally {
            this.setState({ loading: false })
        }
    }



    render() {
        const {
            results,
            searchTerm,
            loading,
            error
        } = this.state;
        return <SearchPresenter
        results = { results }
        loading = { loading }
        error = { error }
        searchTerm = { searchTerm }
        handleSubmit = { this.handleSubmit }
        updateTerm = { this.updateTerm }
        / >
    }

}