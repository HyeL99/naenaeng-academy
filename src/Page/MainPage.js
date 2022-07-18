import React from 'react'
import CarouselItem from '../components/CarouselItem'
import {Row, Col, Card, Button} from 'react-bootstrap'
import '../css/mainPage.css'

const MainPage = () => {
  return (
    <div className='main-page'>
      <div className='section1'>
        <CarouselItem />
      </div>
      <div className='section2'>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Card>
              <Card.Img variant='top' src="#" />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className='section3'>
        
      </div>
      <div className='section4'>
        
      </div>
    </div>

  )
}

export default MainPage