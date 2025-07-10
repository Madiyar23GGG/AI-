  import {Link, useParams } from "react-router-dom";
  import { useEffect, useState } from "react";

  function PostDetails() {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res) => res.json())
          .then ((data) => setPost(data));
    }, [id])

    if (!post) return <p>Жүктелуде...</p>;

    return (
        <div>
            <Link to={"/posts"}>Назад</Link>
            <h2>{post.title}</h2>
            <p>{post.boby}</p>
        </div>
    );
  }

export default PostDetails