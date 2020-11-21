import React, { Component } from "react";
import { bookApi } from "../../api";
import ITBookPresenter from "./ITBookPresenter";

export default class extends Component {

    state = {
        bestSeller: null,
        recommend: null,
        newBook: null,
        category: 122,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const { data: { item: bestSeller } } = await bookApi.bestSeller(122);
            const { data: { item: recommend } } = await bookApi.recommend(122);
            const { data: { item: newBook } } = await bookApi.newBook(122);
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
        console.log("best seller : ", bestSeller);
        console.log("recommend : ", recommend);
        console.log("new book : ", newBook);
        console.log("category_id : ", category);
        return ( <
            ITBookPresenter bestSeller = { bestSeller }
            recommend = { recommend }
            newBook = { newBook }
            categoryId = { category }
            error = { error }
            loading = { loading }
            />
        );
    }

}