import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import tweet from "./sampletweet.json";

const Results = ({username}) => {

	const [userID, setUserID] = useState("");
	const [tweets, setTweets] = useState([]);
	const getUserID = async () => {
		try {
			const response = await axios.get(
				"https://twitter-api47.p.rapidapi.com/v2/user/by-username",
				{
					params: { username: username },
					headers: {
						"Content-Type": "application/json",
					'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            		'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
				},
			)
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
						'Content-Type': 'application/json',
            			'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            			'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
        	},
				},
			);
			const tweets = response.data.tweets;
			setTweets(tweets);
			console.log(tweets);

		} catch (error) {
			console.error(error);
		}
		};

	useEffect(() => {
		if (username) {
			getUserID();
		}
	}, [username]);

	useEffect(() => {
		if (userID) {
			getTweets();
		}
	}, [userID]);

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
					{tweets.map((tweet, index) => (
						<Post
							key={index}
							username={tweet.core.user_results.result.legacy.name}
							handle={tweet.core.user_results.result.legacy.screen_name}
							profilePicture={
								tweet.core.user_results.result.legacy.profile_image_url_https
							}
							postDate={tweet.legacy.created_at}
							postText={tweet.legacy.full_text}
							postImage={
								tweet.legacy.entities.media
									? tweet.legacy.entities.media[0].media_url_https
									: null
							}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Results;
