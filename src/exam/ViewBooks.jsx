function ViewBooks(){


  const books = JSON.parse(localStorage.getItem("books")) || [];

  return(
    <div>

      <h3>Registered Books</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Genre</th>
            <th>Total Books</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {books.map((b,i)=>(
            <tr key={i}>
              <td>{b.bookname}</td>
              <td>{b.authorname}</td>
               <td>{b.bookgenre}</td>
              <td>{b.numberofbooks}</td>
               <td>{b.date}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}

export default ViewBooks