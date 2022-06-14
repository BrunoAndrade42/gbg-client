import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { api } from '../service/api';


function PopupAvaliar(avaliarJogo) {
    const [show, setShow] = useState(false);
    const [stars, setStars] = useState("");
    const [autor, setAutor] = useState("");
    const [email, setEmail] = useState("");
    const [conteudo, setConteudo] = useState("");

    const [validated, setValidated] = useState(false);

    const value = Object.values(avaliarJogo);
  
    const handleSubmit = async (e) => {
      try {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        } else {
          setValidated(true);
          const formModal = {
            stars: stars == "" ? 4 : parseInt(stars),
            autor: autor,
            email: email,
            conteudo: conteudo,
            idJogo: value[0]
          } 
          if(autor == "" && email == "") {
            return
          } else {
            setShow(false);
            const { data } = await api.post('/avaliacao', formModal) 
          }
        }
      } catch(err) {
        console.log(err)
      }
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    return (
      <>
        <Button className="modal-form-btn" onClick={handleShow}>
          Avaliar Jogo
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Avalie o jogo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} >
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label  className="label-top" column sm={2}> Avaliação</Form.Label>
                    <Col sm={10}>
                        <Rating name="size-large" size="large" defaultValue={4} precision={1}
                        onChange={(e) => setStars(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group data-validate = "Requer um nome válido" controlId="formHorizontalEmail">
                    <Form.Label className="label-bold" column sm={2}> Autor </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" onChange={(e) => setAutor(e.target.value)} 
                              placeholder="Fulano..." required />
                    <Form.Control.Feedback type="invalid">
                      Coloque o nome do autor
                    </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group data-validate = "Requer um email válido: ex@abc.xyz" controlId="formHorizontalEmail">
                    <Form.Label className="label-bold " column sm={2}> Email </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} 
                              placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                      Coloque o email
                    </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group controlId="formHorizontalEmail">
                    <Form.Label className="label-bold " column sm={2}> Conteúdo </Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" onChange={(e) => setConteudo(e.target.value)}
                                  placeholder="Digite algo..." rows={3} />
                    </Col>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="modal-form-btn" type="submit" onClick={handleSubmit}>
                Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default PopupAvaliar;