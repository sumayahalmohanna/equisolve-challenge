import { useEffect, useState } from 'react';
import { Container, Row} from 'reactstrap';
import CardList from './CardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    fetch('https://bensdemo.prod.equisolve-dev.com/api/v1/eq-test')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setCardData(data);
    })
  }, [])


  return (
    <div className="App">
      <Container>
        <Row><h1 className="pageHeading">Executive Leadership</h1></Row>
        {cardData && <CardList cards={cardData} />}
      </Container>

    </div>
  );
}

export default App;
