import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SingleBlog.css'

const SingleBlog = () => {
    const { blogId } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [displayBlog, setDisplayBlog] = useState('');

    useEffect(() => {
        fetch('/News.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    useEffect(() => {
        const filterData = blogs.filter((blog) => blog.id == blogId)
        setDisplayBlog(filterData);
    }, [blogs, blogId]);

    console.log(displayBlog[0])

    return (
        <>
            <div className="about-header-conter">
                <h1>{displayBlog[0]?.title}</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>   ABOUT</Link>  /
                    <Link to='/'>   {displayBlog[0]?.title}</Link>
                </div>
            </div>
            <div className="blogs-section">
                <div className="blog-img">
                    <img src={displayBlog[0]?.img} alt="" />
                </div>
                <div className="blog-content">
                    <div className="book-autor">
                        <p>By {displayBlog[0]?.author}</p>
                        <p>{displayBlog[0]?.date}</p>
                    </div>
                    <h2>{displayBlog[0]?.title}</h2>
                    <p className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, unde consectetur. Illo eveniet ab natus veritatis quia ipsam modi fugiat dolore commodi facere error, magnam similique a corporis asperiores, nihil, ad possimus dolores vitae eius officia amet! Debitis molestias molestiae et rem fugiat quaerat. Corporis commodi ut recusandae mollitia, molestiae earum modi hic impedit labore pariatur unde repellendus eum dignissimos, magni animi similique beatae nisi tenetur deserunt ratione odio saepe distinctio. Cum, impedit enim, rerum velit eos, facilis quis soluta temporibus sunt nulla maiores ab aliquam maxime perspiciatis. Ea est corrupti cupiditate fugiat, magnam soluta temporibus cum totam qui eaque!</p>
                    <p className='blog-seleted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quasi architecto, dignissimos iure atque numquam nisi quam! Harum, facere corporis debitis animi sit consectetur blanditiis labore sequi fugiat numquam veniam quis asperiores itaque totam cum recusandae velit, id accusamus pariatur modi molestias? Impedit, omnis reprehenderit voluptate similique odio ipsum veritatis.</p>
                    <p className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, unde consectetur. Illo eveniet ab natus veritatis quia ipsam modi fugiat dolore commodi facere error, magnam similique a corporis asperiores, nihil, ad possimus dolores vitae eius officia amet! Debitis molestias molestiae et rem fugiat quaerat. Corporis commodi ut recusandae mollitia, molestiae earum modi hic impedit labore pariatur unde repellendus eum dignissimos, magni animi similique beatae nisi tenetur deserunt ratione odio saepe distinctio. Cum, impedit enim, rerum velit eos, facilis quis soluta temporibus sunt nulla maiores ab aliquam maxime perspiciatis. Ea est corrupti cupiditate fugiat, magnam soluta temporibus cum totam qui eaque!</p>
                    <p className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, unde consectetur. Illo eveniet ab natus veritatis quia ipsam modi fugiat dolore commodi facere error, magnam similique a corporis asperiores, nihil, ad possimus dolores vitae eius officia amet! Debitis molestias molestiae et rem fugiat quaerat. Corporis commodi ut recusandae mollitia, molestiae earum modi hic impedit labore pariatur unde repellendus eum dignissimos, magni animi similique beatae nisi tenetur deserunt ratione odio saepe distinctio. Cum, impedit enim, rerum velit eos, facilis quis soluta temporibus sunt nulla maiores ab aliquam maxime perspiciatis. Ea est corrupti cupiditate fugiat, magnam soluta temporibus cum totam qui eaque!</p>
                </div>
                <hr />
                <div className="shear-tag">
                    <div className='tags'>
                        <h6>Tags :- Furniture, react, Shopify</h6>
                    </div>
                    <div className="socail-media">
                        <h6>Shear :- </h6>
                        <ul>
                            <li><i class="bi bi-facebook"></i></li>
                            <li><i class="bi bi-twitter"></i></li>
                            <li><i class="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleBlog;