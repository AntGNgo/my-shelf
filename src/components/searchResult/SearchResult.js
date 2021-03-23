
const searchResult = ({ bookInfo }) => {

    if(bookInfo.cover_i) {
        return(
            <div>
                <h1>{bookInfo.title}</h1>
                <h2>{bookInfo.author_name ? bookInfo.author_name[0] : null}</h2>
                <p>{bookInfo.first_publish_year ? bookInfo.first_publish_year : null }</p>
                
                <img src={`http://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`} alt={`${bookInfo.title} cover`} width="200px" />
          </div>
        )
    } else {
        return (
            null
        )
    }
}

export default searchResult