import React from 'react'
import CarouselItem from '../components/CarouselItem'
import {Row, Col, Card, Button} from 'react-bootstrap'
import '../css/mainPage.css'
import RecipeCard from '../components/RecipeCard'
import VideoCard from '../components/VideoCard'
import NoticeBoardCard from '../components/NoticeBoardCard'
import CategoryCard from '../components/CategoryCard'

const MainPage = () => {
  let i = [1,2,3,4]
  let j = [1,2,3,4,5,6,7,8]
  let k = [1,2]
  let l = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div className='main-page'>
      <div className='section1'>
        <CarouselItem />
      </div>
      <div className="section2">
        <div className="inner">
          <h2>[레시피 분류]</h2>
          <Row>
            {l?.map(()=>(
              <Col xs={2} xl={1}>
                <CategoryCard />
              </Col>
            ))}
          </Row>
        </div>

      </div>
      <div className='section3'>
        <div className="inner">
          <h2>[업로드된 레시피]</h2>
          <Row>
            {i?.map((i)=>(
              <Col xs={12} md={6} lg={3}>
              <RecipeCard />
            </Col>
            ))}
          </Row>
        </div>

      </div>
      <div className='section4'>
        <div className="inner">
          <h2>[추천 레시피 영상]</h2>
          <Row>
            {j?.map((j)=>(
              <Col xs={6} md={3} lg={3}>
                <VideoCard />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className='section5'>
        <div className="inner">
        <h2>[게시판]</h2>
          <Row>
            {k?.map((k)=>(
              <Col sm={12} md={6}>
                <NoticeBoardCard />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>

  )
}

export default MainPage