import React from "react";

const UserPosts = ({ posts }) => {
  return (
    <div className="user-posts">
      <h2 className="title">Посты пользователя</h2>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <p><strong>Пост №:</strong> {post.id} (Post ID)<br></br>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
