import './App.css';

import { useState, useEffect } from 'react';

const BlogResults = () => { 
  const [blogArticles, setBlogArticles] = useState([]);

  useEffect(() => {
    fetch('https://drupal-app.ddev.site/session/token')
    .then(response => response.text())
    .then((csrfToken) => {
      fetch("https://drupal-app.ddev.site/blog-articles", {
        headers: {
          "Content-Type": "application/json",
          "X-Csrf-Token": csrfToken,
        },
        method: "GET"
      })
      .then((response) => {
        return response.json();
      })
      .then(data => {
        setBlogArticles(data);
    })
    .catch(error => console.error(error));
    
    });
  }, []);

  return (
    <div>
      <div className="row">
      {blogArticles.map((blogarticle) => (
        <div className="single-article col-md-4">
          <h4>{blogarticle.title}</h4>
          <img className="img-fluid mb-4" src={"https://drupal-app.ddev.site/" + blogarticle.blog_image} />
          <div className="article-body"><p dangerouslySetInnerHTML={{__html: blogarticle.body}} /></div>
        </div>
      ))}
      </div>
    </div>
  )
}

const Footer = (props) => {
  return (
    <div className="footer">
      <hr />
      <p>© 2024 All Rights Reserved. Built with Drupal and React</p>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="App container">
      <header className="m-4" ><h1 className='main-title'>Latest Blog Articles</h1></header>
      <hr />
      <BlogResults />
      <Footer />
    </div>
  );
};

export default App;
