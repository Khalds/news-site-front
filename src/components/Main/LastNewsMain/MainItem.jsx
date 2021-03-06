import React from "react"
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"
import { removeNews } from "../../../features/news/newsSlice"

import styles from "./LastNewsMain.module.css"

function MainItem({ news }) {
  const comments = useSelector((state) => state.coms.comments)
  const users = useSelector((state) => state.auth.users)
  const catigories = useSelector((state) => state.cat.categories)
  const userId = useSelector((state) => state.auth.userId)

  const dispatch = useDispatch()

  const handleDelNews = (id) => {
    dispatch(removeNews(id))
  }

  return (
    <div className={styles.news_item}>
      <div className={styles.news_img}>
        <Link to={`/news/${news._id}`}>
          <img src={`http://localhost:4000/${news.images}`} alt="img" />
        </Link>
      </div>
      <div className={styles.category}>
        <Link to={`/news/${news._id}`}>
          {catigories.map((cat) => {
            if (news.category === cat._id) return cat.name
          })}
        </Link>
      </div>
      <div className={styles.title}>
        <h2>
          <Link to={`/news/${news._id}`}>
            {news.text.split(" ").length > 15
              ? news.text.split(" ").slice(0, 14).join(" ") + "..."
              : news.text}
          </Link>
        </h2>
      </div>
      <div className={styles.news_actions}>
        <Link to={`/news/${news._id}`}>
          <div className={styles.add_actions}>
            <div className={styles.likes}>
              <img className={styles.like_icon} src={likeIcon} />
              <span className={styles.like_count}>{news.like.length}</span>
            </div>

            <div className={styles.comments}>
              <img className={styles.comment_icon} src={commentIcon} />
              <span className={styles.comment_count}>
                {comments.filter((comment) => comment.news === news._id).length}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MainItem
