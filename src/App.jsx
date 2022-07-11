import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

//author: {avatar_url: "", name: "", role: ""}
//published: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/barolohelio.png",
      name: "Hélio Barolo",
      role: "Support Advanced",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare " },
      //Adicionar ao Projeto opção de Hashtag
      // // <a href="">#novoprojeto</a>
      // // <a href="">#nlw</a>
      // // <a href="">#rocketseat</a>
    ],
    publishedAt: new Date("2022-07-10 23:05:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/L3m0S.png",
      name: "Gabriel Lemos",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        type: "link",
        content: "Acesse e deixe seu feedback 👉 devonlane.design",
      },
      //Adicionar ao Projeto opção de Hashtag
      // // <a href="">#novoprojeto</a>
      // // <a href="">#nlw</a>
      // // <a href="">#rocketseat</a>
    ],
    publishedAt: new Date("2022-07-11 09:30:00"),
  },
];

// const algo = posts.forEach(post => {})

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
