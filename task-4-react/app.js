import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Загрузка данных из JSON-файлов или API endpoint
    // Примеры загрузки данных из ваших JSON-файлов
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

  // Функция для фильтрации постов по пользователю
  const filterPosts = (userId) => {
    const filtered = posts.filter((post) => post.userId === userId);
    setFilteredPosts(filtered);
  };

  return (
    <div className="app">
      <h1>Посты</h1>
      {/* Выбор пользователя */}
      <select onChange={(e) => filterPosts(parseInt(e.target.value))}>
        <option value="">Выберите пользователя</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {/* Отображение отфильтрованных постов */}
      <div className="posts-container">
        {filteredPosts.map((post) => {
          const user = users.find((user) => user.id === post.userId);
          return (
            <div className="post-card" key={post.id}>
              <div className="post-header">
                <h3>{user ? user.name : "Unknown User"}</h3>
              </div>
              <div className="post-body">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;