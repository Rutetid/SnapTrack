import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/LoginPage'
import HomePage from './Components/HomePage'
import Results from './Components/Results'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
			<>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/results" element={<Results />} />
				</Routes>
			</>
		);
}

export default App
