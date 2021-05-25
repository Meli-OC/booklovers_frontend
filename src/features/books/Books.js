import './Books.scss';
import React, { useState, useEffect } from 'react';
import axiosBooksInstance, { apiBooksMaps } from "../../conf/api.books";


const Books = () =>{
    const [bookInfo, setBookInfo] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const getBooksList= () => {
        axiosBooksInstance
            .get('books-list')
            .then(resp => resp.data
            )
            .then(books => {
                setBookInfo(books)
                setIsLoading(true)
            })
            .catch(error => console.error(error))
    }


    useEffect(() => {
        getBooksList()
    }, [isLoading])

    return(
        <div className="container">
            {isLoading ? (
                <div className="booksContainer">
                    {
                        bookInfo.slice(0, 3).map(book =>(
                            <div className="bookDiv" key={book.id}>
                                <img src={book.image_url} alt={book.title}/>
                                <div className="bookInfo">
                                    <p className="title" >{book.title}</p>
                                    {book.authors.map(author =>(
                                        <p className="author" key={book.id}>
                                            {author.author_name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div>Loading ... </div>
                )

            }


        </div>
    )
}

export default Books;
