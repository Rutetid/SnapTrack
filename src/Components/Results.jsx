import React from "react";


const Results = () => {
	return (
		<>
			<div className=" bg-gray-900 min-h-screen">
				<h1 className="flex justify-center pt-20 text-white text-6xl">
					SnapTrack
				</h1>

				<h1 className="ml-20 mt-16 text-3xl text-white">
					here are the posts found
				</h1>
				<div className="ml-96 mt-12">
					<img src="/post.png" alt="" className="pb-4" />
					<img src="/post 1.png" alt="" className="pb-4" />
					<img src="/post 2.png" alt="" className="pb-4" />
					<img src="/post 3.png" alt="" className="pb-4" />
					<img src="/post 4.png" alt="" />
				</div>
			</div>
		</>
	);
};

export default Results;
