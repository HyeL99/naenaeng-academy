import React from 'react'

// 작성 필요한 함수 리스트
// hover : 영상 제목 노출
//
// 클릭하면 해당 영상 페이지로 옮겨진다. 
const VideoCard = ({video}) => {
  return (
    <button id="videoCard">
      <p>{`${video.title}`}</p>
    </button>
  )
}

export default VideoCard