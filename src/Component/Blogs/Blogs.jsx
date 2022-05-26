import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = ({ blog }) => {
    const { title, desc, date, author, img, id } = blog;

    return (
        <div className="col-md-4 col-sm-12">
            <div className="card" id='cards'>
                <div className="image">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title" id='card-title'>{title}</h5>
                    <div className="author-date">
                        <p>By {author}</p>
                        <p>{date}</p>
                    </div>
                    <p className="card-text" id='card-desc'>{desc}</p>
                </div>
                <div className="read-more-btn">
                    <Link to={`/blogs/${id}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;