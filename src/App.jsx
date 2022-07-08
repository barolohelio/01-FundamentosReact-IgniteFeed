import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas dolore blanditiis consectetur ad voluptatem quia quod porro quo alias ea tenetur, voluptate ducimus officiis earum nihil, non inventore. Aliquam?"
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas dolore blanditiis consectetur ad voluptatem quia quod porro quo alias ea tenetur, voluptate ducimus officiis earum nihil, non inventore. Aliquam?"
          />
        </main>
      </div>
    </div>
  );
}
