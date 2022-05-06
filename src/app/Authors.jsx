import { Link } from "react-router-dom";
const Authors = () => {
  return (
    <main className="container">
      <h1 className="center-align">Authors (6)</h1>
      <Link to="/singleauthor">
        <h4>Name Surname (2-posts)</h4>
      </Link>
      <div className="divider deep-orange accent-3"></div>
      <Link to="/singleauthor">
        <h4>Name Surname (2-posts)</h4>
      </Link>
      <div className="divider deep-orange accent-3"></div>
      <Link to="/singleauthor">
        <h4>Name Surname (2-posts)</h4>
      </Link>
      <div className="divider deep-orange accent-3"></div>
      <Link to="/singleauthor">
        <h4>Name Surname (2-posts)</h4>
      </Link>
      <div className="divider deep-orange accent-3"></div>
      <Link to="/singleauthor">
        <h4>Name Surname (2-posts)</h4>
      </Link>
      <div className="divider deep-orange accent-3"></div>
      <Link to="/singleauthor">
        <h4>Name Surname (2-posts)</h4>
      </Link>
      <div className="divider deep-orange accent-3"></div>
    </main>
  );
};

export default Authors;
