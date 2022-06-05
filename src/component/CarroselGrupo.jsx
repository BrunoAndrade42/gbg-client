import React from 'react'
import { Carousel, Card, Row, Col } from 'react-bootstrap';


class CarroselGrupo extends React.Component {
    render() {
        return (
            <Carousel controls={false} className="carouselGrupoStyle">
                <Carousel.Item interval={5000}>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 2 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={'https://placeimg.com/1080/500/nature'} />
                                    <Carousel.Caption>
                                        <h2>Ação</h2>
                                    </Carousel.Caption>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 2 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={'https://placeimg.com/1080/500/arch'} />
                                    <Carousel.Caption>
                                        <h2>Luta</h2>
                                    </Carousel.Caption>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarroselGrupo;