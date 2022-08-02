import React, { useEffect, useState } from 'react'
import CarouselItem from '../components/CarouselItem'
import {Row, Col, Card, Button} from 'react-bootstrap'
import '../css/mainPage.css'
import RecipeCard from '../components/RecipeCard'
import VideoCard from '../components/VideoCard'
import NoticeBoardCard from '../components/NoticeBoardCard'
import CategoryCard from '../components/CategoryCard'
import data from "../db.json"

const MainPage = () => {
  let i = [1,2,3,4]
  let j = [1,2,3,4]
  let k = [1,2]
  let l = [1,2,3,4,5,6,7,8,9,10,11,12]
  let [board, setBoard] = useState(data);

  // useEffect(()=>{
  //   fetch('http://localhost:8000/recipe.json')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .then(data => setBoard(data))
  //   .then(console.log(board));
  // },[])

  console.log(board);
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
            {board?.recipe.map((recipe)=>(
              <Col xs={12} md={6} key={recipe.index}>
                <RecipeCard  recipe={recipe}/>
              </Col>
            ))}
          </Row>
        </div>

      </div>
      <div className='section4'>
        <div className="inner">
          <h2>[추천 레시피 영상]</h2>
          <Row>
            {board?.video.map((video)=>(
              <Col xs={12} md={3} key={video.index}>
                <VideoCard video={video}/>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      {/* <div className='section5'>
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
      </div> */}
    </div>

  )
}

export default MainPage