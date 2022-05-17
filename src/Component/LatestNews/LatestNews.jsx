import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import './LatestNews.css'

const LatestNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('./News.JSON')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);

    return (
        <div>
            <div className="latest-news-section">
                <div className="news-title">
                    <h2>Latest News</h2>
                    <p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore</p>
                </div>
                <div className="news-section">
                    <div className="row g-4 my-3">
                        {
                            !news ? <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                                : news.map(blog => <Blogs
                                    key={blog.id}
                                    blog={blog}
                                ></Blogs>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;