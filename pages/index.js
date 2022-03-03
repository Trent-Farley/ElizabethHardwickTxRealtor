import styles from '../styles/Home.module.css'
import Main from './main'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/font-awesome/css/font-awesome.css'
export default function Home() {
  return (
      <div className={styles.container}>
        <Main/>
      </div>
  )
}

