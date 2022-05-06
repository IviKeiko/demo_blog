import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <h1 className="center-align">Posts</h1>
      <Link to="singlepost">
        <h3 className="card-panel blue-grey lighten-2">Title1</h3>
      </Link>
      <p className="truncate ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        officiis autem iste repudiandae error laudantium dolore similique,
        doloremque velit vero nulla in.
      </p>
      <div className="divider deep-orange accent-3"></div>
      <h3 className="card-panel blue-grey lighten-2">Title2</h3>
      <p className="truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        officiis autem iste repudiandae error laudantium dolore similique,
        doloremque velit vero nulla in.
      </p>
      <div className="divider deep-orange accent-3"></div>
      <h3 className="card-panel blue-grey lighten-2">Title3</h3>
      <p className="truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        officiis autem iste repudiandae error laudantium dolore similique,
        doloremque velit vero nulla in.
      </p>
      <div className="divider deep-orange accent-3"></div>
      <h3 className="card-panel blue-grey lighten-2">Title4</h3>
      <p className="truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        officiis autem iste repudiandae error laudantium dolore similique,
        doloremque velit vero nulla in.
      </p>
      <div className="divider deep-orange accent-3"></div>
      <h3 className="card-panel blue-grey lighten-2">Title5</h3>
      <p className="truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        officiis autem iste repudiandae error laudantium dolore similique,
        doloremque velit vero nulla in.
      </p>
      <div className="divider deep-orange accent-3"></div>
    </main>
  );
};

export default Home;
