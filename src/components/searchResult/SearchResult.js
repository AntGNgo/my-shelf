
const searchResult = ({ bookInfo }) => {
    
    return(
        <div>
            <h1>{bookInfo.title}</h1>
            <h2>{bookInfo.author_name ? bookInfo.author_name[0] : null}</h2>
            <p>{bookInfo.first_publish_year ? bookInfo.first_publish_year : null }</p>
            
            <img src={`http://covers.openlibrary.org/b/isbn/${bookInfo.cover}-L.jpg`} alt={`${bookInfo.title} cover`}/>
      </div>
    )
}

export default searchResult