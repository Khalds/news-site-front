import React from "react"

import Header from "../../../Header/Header"
import PopularNewsMain from "../../../Main/PopularNewsMain/PopularNewsMain"
import PopularNewsSidebar from "../../../Sidebars/PopularNewsSidebar/PopularNewsSidebar"
import LastNewsSidebar from "../../../Sidebars/LastNewsSidebar/LastNewsSidebar"

import styles from "./Home.module.css"
import Footer from "../../../Footer/Footer"
import LastNewsMain from "../../../Main/LastNewsMain/LastNewsMain"

function Homepage() {
  return (
    <div className={styles.Homepage}>
      <Header />
      <div className={styles.home_container}>
        <div className={styles.home_cont_top}>
          <LastNewsMain className={styles.home_main} />
          <LastNewsSidebar className={styles.home_sidebar} />
        </div>
        <div className={styles.home_cont_mid}>
          <PopularNewsMain />
          <PopularNewsSidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
