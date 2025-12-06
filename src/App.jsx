import { useState } from "react";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post name"
        />
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Post description"
        />
        <MyButton onClick={addNewPost}>Add new post</MyButton>
      </form>
      <PostList posts={posts} title={"Title JS"} />
    </div>
  );
};

export default App;
