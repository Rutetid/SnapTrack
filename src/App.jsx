import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/LoginPage'
import HomePage from './Components/HomePage'
import Results from './Components/Results'
import { Routes, Route } from "react-router-dom";
import Post from './Components/Post'


function App() {
	const [username, setUsername] = useState("");

  return (
			<>
				<Routes>
					<Route path="/" element={<Post />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<HomePage username = {username} setUsername = {setUsername} />} />
					<Route path="/results" element={<Results username = {username} />} />
				</Routes>
			</>
		);
}

export default App
