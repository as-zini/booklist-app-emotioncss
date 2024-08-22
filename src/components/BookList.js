import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({book}) => {
  return(
    <li>
      <div>
        <img alt={`$book.volumeInfo.title`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs _api`}book/>
      </div>
      <div>
        <Link to={`/book/${book.id}`}>
          <h3>{book.volumeInfo.title}</h3>
        </Link>
        <p>formatAuthors({book.volumeInfo.authors})</p>
        <p>{book.volumeInfo.publishedData}</p>
      </div>
    </li>
  )
}

const BookList = ({books}) => {
  if(!books.totalItems){
    return <div>책 이름을 검색해주세요.</div>
  } else if(books.totalItems === 0){
    return <div>찾으시는 책이 없습니다.</div>
  } else{
    return(
      <ul>
        {books.items.map(book => {
          return <Book book={book} key={book.id} />

        })}
      </ul>
    )
  }
}

export default BookList