import { PostItem } from "./PostItem";

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center", color: "teal" }}>
        No posts were found!
      </h1>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "teal" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};
