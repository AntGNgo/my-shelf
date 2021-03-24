
import "./search-result.css"

const SearchResult = ({ bookInfo }) => {
    console.log(bookInfo)
    if(bookInfo.cover_i) {
        return(
            <div className='result'>
                <div className="result__left">
                <img src={`http://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`} alt={`${bookInfo.title} cover`} />
                <div className="result__left__text">
                    <h1>{bookInfo.title}</h1>
                    <h2>{bookInfo.author_name ? bookInfo.author_name[0] : null}</h2>
                </div>
                </div>
                <p className='result__year'>{bookInfo.first_publish_year ? bookInfo.first_publish_year : null }</p>
          </div>
        )
    } else {
        return (
            null
        )
    }
}

export default SearchResult