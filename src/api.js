import axios from "axios";

const api = axios.create({
    baseURL: "https://book.interpark.com/api/",
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001',
    },
    params: {
        key: "072D09BB188D7374AE2D562CAABF26486DEE12926759F89362B5548DC5F85CDF",
        output: "json"
    }
});


export const bookApi = {
    bestSeller: (categoryId) => api.get("bestSeller.api", {
        params: {
            categoryId: categoryId
        }
    }),
    recommend: (categoryId) => api.get("recommend.api", {
        params: {
            categoryId: categoryId
        }
    }),
    newBook: (categoryId) => api.get("newBook.api", {
        params: {
            categoryId: categoryId
        }
    }),

    // http://book.interpark.com/api/search.api?key=interpark&query=9788992717199&queryType=isbn
    bookDetail: (isbn) =>
        api.get("search.api", {
            params: {
                query: parseInt(isbn),
                queryType: "isbn"
            }
        }),
    search: (term) =>
        api.get("search.api", {
            params: {
                query: term
            }
        })

};