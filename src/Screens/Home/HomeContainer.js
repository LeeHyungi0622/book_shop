import React, { Component } from "react";
import { bookApi } from "../../api";
import HomePresenter from "./HomePresenter";

export default class extends Component {

    state = {
        bestSeller: null,
        recommend: null,
        newBook: null,
        categoryId: 100,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const { data: { item: bestSeller } } = await bookApi.bestSeller(100);
            const { data: { item: recommend } } = await bookApi.recommend(100);
            const { data: { item: newBook } } = await bookApi.newBook(100);
            this.setState({
                bestSeller,
                recommend,
                newBook
            });
        } catch (error) {
            this.setState({
                error: "Can't find books information."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { bestSeller, recommend, newBook, categoryId, error, loading } = this.state;
        return ( < HomePresenter bestSeller = { bestSeller }
            recommend = { recommend }
            newBook = { newBook }
            categoryId = { categoryId }
            error = { error }
            loading = { loading }
            />
        );
    }

}