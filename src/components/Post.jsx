import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.authorHeader}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/barolohelio.png"
          />
          <div className={styles.authorInfo}>
            <strong>Hélio Barolo</strong>
            <span>Support Advanced</span>
          </div>
        </div>

        <time title="08 de Julho às 17:00" dateTime="2022-07-08">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>

        <p>
          👉<a href="">jane.design/doctorcare </a>
        </p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
