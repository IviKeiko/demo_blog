import { Link } from "react-router-dom";
const SinglePost = () => {
  return (
    <main className="container">
      <h1 className="center-align">Single Post</h1>
      <Link to="/singleauthor">
        <h3>Author Name</h3>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui expedita
        pariatur dolor dolores aperiam rem, quasi saepe suscipit fugiat non
        corrupti quisquam dolorum, a esse repellendus soluta nisi quibusdam vel.
        Omnis, quae fugit error veritatis itaque odio ullam fuga, neque animi
        illo veniam! Repellendus, veniam sint optio nemo natus non voluptates
        temporibus, dolorem itaque a, deserunt ut nesciunt iste cupiditate?
        Reprehenderit illum quisquam officia adipisci distinctio. Voluptate ex
        cum dolore commodi quasi maxime, minima neque molestiae sed reiciendis
        dolorem sapiente tenetur! Blanditiis accusamus explicabo debitis maxime
        repudiandae harum cumque inventore! Et provident omnis explicabo animi
        eveniet facere obcaecati, adipisci illo exercitationem nemo fugit
        delectus ad temporibus impedit, quis harum atque laboriosam vero
        voluptate aliquam, totam ducimus! Magnam possimus cum natus.
      </p>
      <div className="divider deep-orange accent-3"></div>
      <h5>3 more posts from same author</h5>
      <h6>
        Title 10 - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </h6>
      <h6>
        Title 11 - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </h6>
      <h6>
        Title 12 - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </h6>
    </main>
  );
};

export default SinglePost;
