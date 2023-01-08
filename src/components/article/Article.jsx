import React from 'react'
import './article.css'

const Article = ({imgURL, date, title}) => {
  return (
    <div className='gpt3_blog-container_article'>
      <div className='gpt3_blog-container_article-image'>
        <img src={imgURL} alt='blog' />
      </div>
      <div className='gpt3_blog-container_article-content'>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article