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
            <div className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="card is-flex is-flex-direction-column is-align-items-center p-6">
                                <i className="card-image fas fa-search fa-6x"></i>
                                <div className="card-header">
                                    <p className="card-header-title has-text-centered is-size-5">Search for a book</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card is-flex is-flex-direction-column is-align-items-center p-6">
                                <i className="card-image fas fa-plus fa-6x"></i>
                                <div className="card-header">
                                    <p className="card-header-title has-text-centered is-size-5">Add it to your reading list</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card is-flex is-flex-direction-column is-align-items-center p-6">
                                <i className="card-image fas fa-book fa-6x"></i>
                                <div className="card-header">
                                    <p className="card-header-title has-text-centered is-size-5">Track your reading journey</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home