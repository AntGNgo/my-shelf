import Search from '../../components/search/Search'

const Home = ({ setSearchList }) => {
    return(
        <div>
            <div className='hero is-dark'>
                <div className="hero-body">
                    <p className="title">Find your favorite books and track your reading progress.</p>
                    <p className="subtitle">Start searching now:</p>
                    <Search setSearchList={setSearchList}/>
                </div>           
            </div>
            <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="card is-flex is-flex-direction-column is-align-items-center p-6">
                        <i className="card-image fas fa-search fa-7x"></i>
                        <div className="card-header">
                            <p className="card-header-title is-size-4">Search for a book</p>
                        </div>

                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        .card-image
                        <div className="is-size-3">HELLo</div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="is-size-3">HELLo</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home