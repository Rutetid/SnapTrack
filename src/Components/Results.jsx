import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

const Results = ({username}) => {

	const [userID, setUserID] = useState("");
	const getUserID = async () => {
		try {
			const response = await axios.get(
				"https://twitter-api47.p.rapidapi.com/v2/user/by-username",
				{
					params: { username: username },
					headers: {
						"Content-Type": "application/json",
						"x-rapidapi-key":
							"886bee5445mshfb6b24f13086119p142989jsn16c9614dd626",
						"x-rapidapi-host": "twitter-api47.p.rapidapi.com",
					},
				},
			);
			const userID = response.data.rest_id;
			setUserID(userID);
			console.log(userID);
		

		} catch (error) {
			console.error(error);
		}
		};


	const getTweets = async () => {
		try {
			const response = await axios.get(
				"https://twitter-api47.p.rapidapi.com/v2/user/tweets-and-replies",
				{
					params: { userId: userID },
					headers: {
						"Content-Type": "application/json",
						"x-rapidapi-key":
							"886bee5445mshfb6b24f13086119p142989jsn16c9614dd626",
						"x-rapidapi-host": "twitter-api47.p.rapidapi.com",
					},
				},
			);
			const tweets = response.data;
			console.log(tweets);

		} catch (error) {
			console.error(error);
		}
		};

	// useEffect(() => {
	// 	getUserID();
	// }, []);

	// useEffect(() => {
	// 	if (userID) {
	// 		getTweets();
	// 	}
	// }, [userID]);
	
	return (
		<>
			<div className=" bg-slate-500 min-h-screen">
				<h1 className="flex justify-center pt-20 text-white text-6xl">
					SnapTrack
				</h1>
				<h1 className="text-green-500 ml-20 mt-16 text-3xl">
					This user is not Flagged!
				</h1>
				<h1 className="ml-20 mt-4 text-3xl text-white">
					here are the posts found
				</h1>
				<div className="mt-20 ml-56 w-5/12">
					<Post />
					<div className="ml-96 mt-12">
						<img src="/post.png" alt="" className="pb-4" />
						<img src="/post 1.png" alt="" className="pb-4" />
						<img src="/post 2.png" alt="" className="pb-4" />
						<img src="/post 3.png" alt="" className="pb-4" />
						<img src="/post 4.png" alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Results;
