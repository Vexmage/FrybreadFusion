import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Sample blog posts data
const samplePosts = [
    {
        id: 1,
        title: "The Philosophy of Frybread",
        content: "Exploring the deeper meanings and cultural significance behind the indigenous recipe of frybread...",
        author: "Admin",
        date: "2024-09-02",
    },
    {
        id: 2,
        title: "Indigenous Recipe: Navajo Frybread",
        content: "A traditional Navajo frybread recipe passed down through generations...",
        author: "Admin",
        date: "2024-08-25",
    },
    {
        id: 3,
        title: "Philosophical Reflections on Food and Culture",
        content: "How food connects us to our cultural roots and shapes our identities...",
        author: "Admin",
        date: "2024-08-15",
    },
];

function BlogPost({ post }) {
    return (
        <div className="blog-post">
            <h2>{post.title}</h2>
            <p><strong>By:</strong> {post.author} | <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
            <p>{post.content}</p>
        </div>
    );
}

function Blog() {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(2);

    useEffect(() => {
        setPosts(samplePosts);
    }, []);

    const loadMore = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 2);
    };

    return (
        <div className="blog">
            <h1>Frybread Fusion Blog</h1>
            {posts.slice(0, visiblePosts).map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
            {visiblePosts < posts.length && (
                <button onClick={loadMore}>Load More</button>
            )}
        </div>
    );
}


function Navigation() {
    return (
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    );
}

function FrybreadFusionApp() {
    return (
        <div>
            <Navigation />
            <section id="home">
                <h2>Welcome to Frybread Fusion</h2>
                <p>This is a blog about philosophy and indigenous recipes, particularly focusing on the cultural significance of frybread.</p>
            </section>
            <section id="blog">
                <Blog />
            </section>
            <section id="about">
                <h2>About This Blog</h2>
                <p>This blog is dedicated to exploring the intersection of philosophy and indigenous culinary traditions, particularly focusing on frybread.</p>
            </section>
        </div>
    );
}


ReactDOM.render(<FrybreadFusionApp />, document.getElementById('react-app'));
