import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="UPCOMING" fetchUrl={requests.fetchUpComing} isLargeRow/>
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Films" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Chick-flix" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
