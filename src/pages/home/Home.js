import Search from '../../components/search/Search'

const Home = ({ setSearchList }) => {
    return(
        <div className='hero is-dark'>
            <div className="hero-body">
                <p className="title">Find your favorite books and track your reading progress.</p>
                <p className="subtitle">Start searching now:</p>
                <Search setSearchList={setSearchList}/>
            </div>
        </div>
    )
}

export default Home