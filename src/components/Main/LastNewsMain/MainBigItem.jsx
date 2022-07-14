import React from "react"
import { Link } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"

import styles from "./LastNewsMain.module.css"

function MainBigItem({ news, idx }) {
  console.log(news.author.login)
  return (
    <div key={idx} className={styles.news_big_item}>
      <div className={styles.news_img}>
        <Link to={`/news/${news._id}`}>
          <img src={news.img} alt="img" />
        </Link>
      </div>
      <div className={styles.category}>
        <Link to={`/news/${news._id}`}>Finance</Link>
      </div>
      <div className={styles.title}>
        <h1>
          <Link to={`/news/${news._id}`}>
            {news.title.split(" ").slice(0, 12).join(" ") + "..."}
          </Link>
        </h1>
      </div>
      <div className={styles.author}>
        <p>
          By <a href="">{news.author.login}</a>
        </p>
      </div>
      <div className={styles.text}>
        <p>{news.text}</p>
      </div>
      <div className={styles.news_actions}>
        <div className={styles.likes}>
          <img className={styles.like_icon} src={likeIcon} />
          <span className={styles.like_count}>{news.like}</span>
        </div>
        <Link to={`/news/${news._id}`}>
          <div className={styles.comments}>
            <img className={styles.comment_icon} src={commentIcon} />
            <span className={styles.comment_count}></span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MainBigItem