import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
			<>
				<div className=" bg-gray-900 min-h-screen">
					<h1 className="flex justify-center pt-20 text-white text-6xl">
						SnapTrack
					</h1>
					<div className="pt-24 px-32 text-2xl">
						<input
							type="text"
							placeholder="Enter Facebook profile link"
							className="mb-10 w-3/4"
						/>
						<br />
						<input 
							type="text"
							placeholder="Enter Twitter profile link x"
							className="w-3/4 mb-10"
						/>
						<br />
						<Link to="/results"
							className="bg-blue-700 rounded-md py-1 px-7"
						>
							Submit
						</Link >
						<select className='ml-20'>
							<option value="fruit">Select amount of Posts</option>

							<option value="vegetable">2</option>

							<option value="meat">5</option>
						</select>
					</div>
				</div>
			</>
		);
}

export default HomePage;