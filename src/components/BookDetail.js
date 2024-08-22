import formatAuthors from "../helpers/formatAuthors";


const BookDetail = ({book}) => {
  const IMG_BASE_URL = `http://books.google.com/books`;
  console.log(book)

  return(
    <section>
      <div>
        <img
          src={`${IMG_BASE_URL}/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
      </div>
      <div>
        <h3>
          <strong>책 이름:</strong>{book.volumeInfo.title}
        </h3>
        <p>
          <strong>저자:</strong>{formatAuthors(book.volumeInfo.authors)}
           
        </p>
        <p>
          <strong>출판 날짜:</strong>{book.volumeInfo.publishedDate}
        </p>
        <p>
          <strong>출판사:</strong>{book.volumeInfo.publisher}
        </p>
        <p>
          <strong>설명:</strong>{book.volumeInfo.description}
        </p>
      </div>
    </section>
  )
}

export default BookDetail