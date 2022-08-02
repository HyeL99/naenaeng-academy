import React from 'react'
import { Link } from 'react-router-dom'
import '../css/uploadPage.css'

const UploadCard = () => {
  return (
    <div className='inner flex alnStr fWrap jusSpaBet' id='uploadPage'>
      <Link to={`/`}><button className='close'>X</button></Link>
      <h2>레시피 업로드</h2>
      <div className="recipeTitle flex jusSpaBet alnCen">
        <h3>레시피 제목</h3>
        <input type="text" placeholder='~자 이내로 입력해주세요!'/>
      </div>
      <div className="recipeCategory flex jusSpaBet alnCen">
        <h3>카테고리</h3>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="recipeTime flex jusSpaBet alnCen">
        <h3>소요시간</h3>
        <input type="text" />
      </div>
      <div className="recipeUse">
        <h3>사용재료</h3>
        <input type="text" placeholder=',로 구분해주세요!'/>
      </div>
      <div className="recipeTag">
        <h3>태그</h3>
        <input type="text" placeholder='#으로 구분해주세요! /최대 5개 추가 가능'/>
      </div>
      <div className="recipePicture flex jusSpaBet alnCen">
        <h3>사진 추가</h3>
        <form action="">
          <button className='findPicture'>파일 찾기</button>
        </form>
      </div>
      <div className="recipeText">
        <h3>내용</h3>
        <textarea name="" id="" placeholder='레시피를 자세하게 기록해주세요 :D'></textarea>
        {/* <input type="text" placeholder='레시피를 자세하게 기록해주세요 :D'/> */}
      </div>
      <button className="recipeUpload">업로드하기</button>
    </div>
  )
}

export default UploadCard