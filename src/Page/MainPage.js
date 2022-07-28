import React from 'react'
import CarouselItem from '../components/CarouselItem'
import {Row, Col, Card, Button} from 'react-bootstrap'
import '../css/mainPage.css'
import RecipeCard from '../components/RecipeCard'

const MainPage = () => {
  return (
    <div className='main-page'>
      <div className='section1'>
        <CarouselItem />
      </div>
      <div className='section2'>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <RecipeCard />
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