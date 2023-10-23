import React, { useState, useEffect } from "react";
import UsersList from "./components/UsersList";
import UserPosts from "./components/UserPosts";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    document.title = "Posts & Users";
    const loadUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    };

    const loadPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    };

    loadUsers();
    loadPosts();
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      const filteredPosts = posts.filter((post) => post.userId === selectedUserId);
      setUserPosts(filteredPosts);
    }
  }, [selectedUserId, posts]);

  return (
    <div className="app">
      <UsersList users={users} onUserClick={setSelectedUserId} selectedUserId={selectedUserId} />
      <UserPosts posts={userPosts} />
    </div>
  );
};

export default App;
