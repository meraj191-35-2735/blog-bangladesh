import React from "react";

const Blog = ({ blog }) => {
  const { title, description, image } = blog;
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
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
        <button class="btn btn-outline btn-primary">Comment</button>
      </div>
    </div>
  );
};

export default Blog;
