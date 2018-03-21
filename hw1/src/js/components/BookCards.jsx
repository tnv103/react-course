import React from 'react';
import { string, number, array, oneOf } from 'prop-types';

const books = {
  "The adventures of Tom Sawyer": {
    isbn: "0451526538",
  },
  "Tom Sawyer abroad": {
    isbn: "0451519612",
  },
  "Leonardo": {
    isbn: "0517249529",
  }
};

let counter = 0;

class BookCards extends React.Component {
  constructor(props) {
    super(props);

    this.loadBook = this.loadBook.bind(this);

    this.state = {
      books: [],
    };
  }

  loadBook(event) {
    const { titles } = this.props;
    const { isbn } = books[titles[counter]];
    const getBook = (isbn) => {
      return fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
    };

    getBook(isbn)
      .then(response => response.json())
      .then(book => this.setState({
        books: [...this.state.books, book[`ISBN:${isbn}`]],
      }))
      .then(() => counter++)
      .catch(error => console.error(error));
  }

  render() {
    const { books } = this.state;
    const buttonText = books.length ? "Load more books" : "Load Book";

    return (
      <div className="book-cards">
        Here are some book cards

        <hr/>
       
          {
            books.map((book, i) => <Book 
                key={i}
                title={book.title}
                author = {book.authors[0].name}
                url= {book.url}
                publishDate={book.publish_date}
                publisher = {book.publishers[0].name}
                pages = {book.number_of_pages}
            />)
          }

        <button onClick={this.loadBook}>{buttonText}</button>
      </div>
    );
  }
}

BookCards.propTypes = {
  titles: array.isRequired,
};

function Book({ title, author, url, publishDate, publisher, pages }) {
  return (
    <ul>
      <li><strong>Title</strong>: {title}</li>
      <li><strong>Author</strong>: {author}</li>
      <li><strong>URL</strong>: {url}</li>
      <li><strong>PublishDate</strong>: {publishDate}</li>
      <li><strong>Published By</strong>: {publisher}</li>
      <li><strong>Pages</strong>: {pages}</li>
    </ul>
  )
}

Book.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  url: string.isRequired,
  publisher: string.isRequired,
  pages: number.isRequired,
  publishDate: string.isRequired,
};

export default BookCards;
