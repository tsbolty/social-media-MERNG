import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";
import "../App.css";

function Home() {
	const { loading, data } = useQuery(FETCH_POSTS_QUERY);
	// console.log(data);
	// const posts = data.getPosts;

	return (
		<Grid columns={3} divided>
			<Grid.Row className='page-title'>
				<h1>Recent Posts</h1>
			</Grid.Row>
			<Grid.Row>
				{loading ? (
					<h1>loading posts...</h1>
				) : (
					data.getPosts &&
					data.getPosts.map(post => (
						<Grid.Column key={post.id} style={{ marginBottom: 20 }}>
							<PostCard post={post} />
						</Grid.Column>
					))
				)}
			</Grid.Row>
		</Grid>
	);
}

const FETCH_POSTS_QUERY = gql`
	{
		getPosts {
			id
			body
			createdAt
			username
			likes {
				username
			}
			likeCount
			comments {
				id
				username
				createdAt
				body
			}
			commentCount
		}
	}
`;

export default Home;
