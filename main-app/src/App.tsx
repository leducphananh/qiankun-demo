import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function Users() {
  return (
    <>
      <h2>User Management</h2>
    </>
  );
}

export default function App() {
  return (
    <div>
      <h1>Main App</h1>

      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/users">Users</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users/*" element={<Users />} />
      </Routes>

      <div id="subapp-container" />
    </div>
  );
}
