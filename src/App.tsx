import { useEffect, useState } from 'react'
import './App.css'


async function getGreeting () {
  const res = await fetch("/api");
  return await res.json();
}

function App() {

  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    getGreeting().then((res) => setGreeting(res.greeting));
  }, []);

  return (
      <div>
      <h1>Vite + React</h1>
      <p>Server response: {greeting}</p>
      </div>
  )
}

export default App
