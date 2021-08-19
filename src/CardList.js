import { useState } from "react";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

const CardList = ({cards}) =>{

    const [modal, setModal] = useState(false);
    const [modalName, setModalName] = useState();
    const [modalTitle, setModalTitle] = useState();
    const [modalImg, setModalImg] = useState();
    const [modalBody, setModalBody] = useState();


    const toggleModal = (card) => {
      setModal(!modal);
      setModalName(card.name);
      setModalTitle(card.title);
      setModalImg(card.photo_url);
      setModalBody(card.bio);
    }
   
    return(
        <Row xs="3">
            {cards.map(card => (
            <Col key={uuidv4()}>
            <Card>
            <CardImg top width="30%" src={card.photo_url} alt="Card image cap" />
          <CardBody>
            <CardTitle className="name" tag="h5">{card.name}</CardTitle>
            <CardSubtitle className="title" tag="h6">{card.title}</CardSubtitle>
            <Button onClick={() => toggleModal(card)}>view bio</Button>
          </CardBody>
            </Card>
            </Col>
          ))}
          <Modal size="lg" isOpen={modal} toggle={toggleModal}>
                      <ModalHeader toggle={toggleModal}>
                      <h4 className="name">{modalName}</h4>
                      <h6 className="title">{modalTitle}</h6>
                      </ModalHeader>
                      <Row xs="2">
                        <Col><ModalBody className="modalBody">{modalBody}</ModalBody></Col>
                        <Col><img className="modalImg" src={modalImg} alt="Profile pic in Modal."/></Col>                    
                      </Row>
                    </Modal>
        </Row>
    );
}

export default CardList;