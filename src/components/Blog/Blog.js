import React from "react";

const Blog = ({ blog }) => {
  const { title, description, image } = blog;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
        <p>Comments</p>
        <br />
        <textarea
          id="comment"
          className="textarea textarea-primary"
          placeholder="Add a comment"
        ></textarea>
        <button className="btn btn-outline btn-primary">Comment</button>
      </div>
    </div>
  );
};

export default Blog;
