import { Link } from "react-router-dom";
const SingleAuthor = () => {
  return (
    <main className="container">
      <Link to="/authors">All authors</Link>
      <h1>Single Author</h1>
      <div>
        <img src="https://via.placeholder.com/150" alt="" />
        <h4>Name Surname</h4>
        <p>username: my_username</p>
        <p>email: mymail@email.com</p>
        <p>phone: 39-770-735-798</p>
      </div>
      <div className="divider deep-orange accent-3"></div>
      <h4>Address</h4>
      <p>street: Via Cesare</p>
      <p>city: San Remo</p>
      <p>77777</p>
      <div className="divider deep-orange accent-3"></div>
      <h4>Company</h4>
      <p>name: Rocket</p>
      <p>slogan: Open your eyes, open your mind...</p>
    </main>
  );
};

export default SingleAuthor;
