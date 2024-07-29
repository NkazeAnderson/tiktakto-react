import React from 'react'
import Box from './MyBox'

function Board({firstId}) {
  return (
    <div className="baord">
            <Box id={Number(firstId)} />
            <Box id={Number(firstId)+1} />
            <Box id={Number(firstId)+1} />
        </div>
  )
}

export default Board