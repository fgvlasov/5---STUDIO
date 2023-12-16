import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const BlogSidebar = ({ categories, tags, recentPost }) => {
  return (
    <div className="axil-blog-sidebar">
      <div className="axil-single-widget search">
        <h4 className="title mb--30">Search</h4>
        <div className="inner">
          <form action="#" className="blog-search">
            <input type="text" placeholder="Search…" />
            <button className="search-button">
              <i className="fal fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="axil-single-widget category mt--80 mt_sm--30 mt_md--30 mt_lg--40">
        <h4 className="title mb--30">Categories</h4>
        <div className="inner">
          <ul className="category-list">
            {categories?.map((category, categoryIndex) => (
              <li key={`category-${categoryIndex}`}>
                <Link href={`/blog/category/${category.slug}`}>
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="axil-single-widget share mt--80 mt_sm--30 mt_md--30 mt_lg--40">
        <div className="inner">
          <div className="blog-share d-flex flex-wrap">
            <span>Follow:</span>
            <ul className="social-list d-flex">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="axil-single-widget small-post-wrapper mt--80 mt_sm--30 mt_md--30 mt_lg--40">
        <h4 className="title mb--30">Recent post</h4>
        <div className="inner">
          {recentPost?.map((post, index) => (
            <div className="small-post" key={`recent-post-${index}`}>
              <div className="thumbnail flex-shrink-0">
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <Image width={100} height={80} src={post.postdata.thumbnail.large} alt="Blog Image" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h6>
                  <Link href={`/blog/${post.slug}`}>
                    <a>{post.postdata.title}</a>
                  </Link>
                </h6>
                <ul className="blog-meta">
                  <li>{post.postdata.publishedAt}</li>
                  <li>{post.postdata.readingTime}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="axil-single-widget tags mt--80 mt_sm--30 mt_md--30 mt_lg--40">
        <h4 className="title mb--30">Tags</h4>
        <div className="inner">
          <ul className="tags-list">
            {tags?.map((tag, tagIndex) => (
              <li key={`tag-${tagIndex}`}>
                <Link href={`/blog/tag/${tag.slug}`}>{tag.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
