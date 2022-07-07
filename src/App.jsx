import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <div>
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas dolore blanditiis consectetur ad voluptatem quia quod porro quo alias ea tenetur, voluptate ducimus officiis earum nihil, non inventore. Aliquam?"
      />
      <Post
        author="Hélio Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas dolore blanditiis consectetur ad voluptatem quia quod porro quo alias ea tenetur, voluptate ducimus officiis earum nihil, non inventore. Aliquam?"
      />
    </div>
  );
}
