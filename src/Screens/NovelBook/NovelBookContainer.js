import React, { Component } from "react";
import { bookApi } from "../../api";
import NovelBookPresenter from "./NovelBookPresenter";

export default class NovelBook extends Component {

    state = {
        bestSeller: null,
        recommend: null,
        newBook: null,
        category: 101,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const { data: { item: bestSeller } } = await bookApi.bestSeller(101);
            const { data: { item: recommend } } = await bookApi.recommend(101);
            const { data: { item: newBook } } = await bookApi.newBook(101);
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
        const { bestSeller, recommend, newBook, category, error, loading } = this.state;
        return ( < NovelBookPresenter 
            bestSeller = { bestSeller }
            recommend = { recommend }
            newBook = { newBook }
            categoryId = { category }
            error = { error }
            loading = { loading }
            />
        );
    }

}