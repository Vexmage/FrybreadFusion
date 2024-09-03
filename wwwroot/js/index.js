import 'bootstrap/dist/css/bootstrap.min.css';
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

// Navigation component
function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Frybread Fusion</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

// BlogPost component
function BlogPost({ post }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text"><strong>By:</strong> {post.author} | <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
                <p className="card-text">{post.content}</p>
            </div>
        </div>
    );
}

// Blog component
function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(samplePosts);
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">Frybread Fusion Blog</h1>
            {posts.length === 0 ? (
                <p>Loading posts...</p>
            ) : (
                posts.map(post => <BlogPost key={post.id} post={post} />)
            )}
        </div>
    );
}

// About component
function About() {
    return (
        <div className="container my-5">
            <h2>About Me</h2>
            <p>
                Hello! I'm a proud member of the Chippewas of Rama First Nation. Growing up, I developed a deep love for Frybread, to me an admittedly problematic example of survival and indigenuity, which has always been more than just food to me—it’s a symbol of resilience and community.
            </p>
            <p>
                More recently, I’ve become passionate about the whole foods movement, especially within an indigenous context. I believe in honoring the traditional foods of our ancestors while embracing the benefits of natural, unprocessed ingredients.
            </p>
            <p>
                I hold a Master's Degree in Philosophy from the University of Oregon, where I delved into American Pragmatism, the Analytic tradition, the Continental tradition, and Native American Philosophy. Although I’m now a Software Developer, my love for philosophy remains strong, and I still enjoy pondering deep questions.
            </p>
            <p>
                When I’m not coding or reflecting on philosophical ideas, you can find me in the kitchen, making delicious meals for my family and friends. I believe that food, like philosophy, brings people together and nourishes both body and soul.
            </p>
        </div>
    );
}

// Main app component
function FrybreadFusionApp() {
    return (
        <div>
            <Navigation />
            <section id="home" className="py-5" style={{ backgroundImage: `url('/images/frybread-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay text-white d-flex align-items-center justify-content-center">
                    <div className="text-center p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
                        <h2>Welcome to Frybread Fusion</h2>
                        <p>This is a blog about philosophy and indigenous recipes, particularly focusing on the cultural significance of frybread.</p>
                    </div>
                </div>
            </section>
            <section id="blog" className="py-5" style={{ backgroundColor: '#F5F5F5', color: '#343A40' }}>
                <div className="container">
                    <Blog />
                </div>
            </section>
            <section id="about" className="py-5" style={{ backgroundColor: '#ECECEC', color: '#343A40' }}>
                <div className="container">
                    <About />
                </div>
            </section>
            <footer className="bg-dark text-white py-3 mt-5">
                <div className="container text-center">
                    <p className="m-0">&copy; 2024 Frybread Fusion. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}


ReactDOM.render(<FrybreadFusionApp />, document.getElementById('react-app'));
