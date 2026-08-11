import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import type { CurrentUser } from './types/qiankun';

function UserList() {
  return (
    <div>
      <h2>User List</h2>

      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>

        <li>
          <Link to="/users/2">User 2</Link>
        </li>
      </ul>
    </div>
  );
}

function UserDetail() {
  return (
    <div>
      <h2>User Detail</h2>
    </div>
  );
}

function CreateUser() {
  return (
    <div>
      <h2>Create User</h2>
    </div>
  );
}

interface AppProps {
  user: CurrentUser | null;
  theme: 'light' | 'dark';
  onLogout: () => void;
}

export default function App({ user, theme, onLogout }: AppProps) {
  return (
    <div>
      <div>
        <h2>User App</h2>
        <p>Welcome, {user?.name ?? 'Guest'}</p>
        <p>Current theme: {theme}</p>
        <button onClick={onLogout}>Logout</button>
      </div>

      <hr />

      <BrowserRouter basename="/users">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/:id" element={<UserDetail />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
