export default function App() {
  return (
    <div>
      <h1>Main App</h1>

      <nav>
        <a href="/">Home</a>
        {' | '}
        <a href="/users">Users</a>
      </nav>

      <hr />

      <div id="subapp-container" />
    </div>
  );
}
