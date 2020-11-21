import React, { Component } from "react";
import { bookApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null,
            error: null,
            loading: true,
        };
    }

    async componentDidMount() {
        const { match: { params: { isbn } }, history: { push } } = this.props;
        const parsedISBN = parseInt(isbn);
        console.log("ISBN : ", isbn);
        let result = null;
        try{
            ({data: result} = await bookApi.bookDetail(parsedISBN));
        }catch{
            this.setState({error: "Can't find anything."});
        }finally{
            this.setState({loading: false, result})
        }
    }

    render() {
        const { result, error, loading } = this.state;
        console.log("result : ", result);
        return <DetailPresenter 
                    result = { result }
                    error = { error }
                    loading = { loading }
               />
    }

}