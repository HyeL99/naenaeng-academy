import React from 'react'

// 작성 필요한 함수 리스트
// 데이터베이스에서 작성자 이름과 게시물 태그, 소요시간을 받아온다.
// 여러개의 태그를 한 줄에 보여준다.
//
// 클릭하면 해당 레시피 페이지로 옮겨진다. 
const RecipeCard = ({recipe}) => {
  return (
    <button id="recipeCard">
      <div className="cardText flex fCol">
        <h3>{`${recipe.writer}`}</h3>
        <p>게시물 태그</p>
        <p>{`${recipe.hashTag}`}</p>
        <p>{`${recipe.time}분 소요`}</p>
      </div>
    </button>
  )
}

export default RecipeCard