import React from "react";
import { Button, Card, Icon, Image, Label } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";
function PostCard({
	post: {
		body,
		createdAt,
		id,
		username,
		likeCount,
		commentCount,
		likes,
		comments
	}
}) {
	const likePost = () => {
		console.log("like post");
	};

	const commentOnPost = () => {
		console.log("comment on post");
	};
	return (
		<Card fluid>
			<Card.Content>
				<Image
					floated='right'
					size='mini'
					src='https://lh3.googleusercontent.com/6MpDLxV7PTVv55SR09Llzi_vOjyAvaNPbMMFTceu3WAFU3mZU-TWpBLY26QBL5r52xrUBzqP3guBdESxtoC8MUuGVsIz4V4tzKs8-LvgMpcdKuBWt9l9xMB6WgvMWIvDW4BIqJW3xQBVbkbxJdclyim6U-lCAW19EGYLYGKG37zIC4dzYjPHBOn9f7ArFGMZT3ikTPrWP8dL9wNJlSf7tXrn4lLXG2JDOUKC-fRFBUoQ719UukcwKOBqs2om7K1035OmcfBIC-7EKmRl9H6OPzqf1jHr46HSy1Uj6-8uXyXTWnO0rh7sNtjivbB6E0X33IJJyaktwbZUjwEdSjVgBkvBaxzSxEGxHKhBJuGZb3aqvaLMbTDSZzH8pzraeTgqbWNxDpII31Yf4lvdOLzDYl7f3joRsg6YILnQAKJyO9xkZLo_SOYHVhNQdb96M9_rVM1WaL4WY_mxz_bHIkuUd6qrVmFBP_P5ErGxgaG9edhXNZeRt5ofpZVtHm1C6txaF9usdsow9qSBLqtnnTZORN65fs1U3yB6ixEUcjnfu4ETzw9rSrbTW20pqoiJcwCBnAqDHGlsDD_cRvDQCPaTKRRarwiHUpboDAh7Gh7p48Crj3Vk7ybcOIf5S5pDuVeF1zfSnDJqEktSMEbRPNtGolg7aJLDzcAyL2AONgNzsvmfpo7P2X7RpEXYNSdTL7CYb1cQX4_9mo_9YxJFhpvoSBM=s969-no?authuser=0'
				/>
				<Card.Header>{username}</Card.Header>
				<Card.Meta as={Link} to={`/posts/${id}`}>
					{moment(createdAt).fromNow(true)}
				</Card.Meta>
				<Card.Description>{body}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button as='div' labelPosition='right'>
					<Button color='teal' basic onClick={likePost}>
						<Icon name='heart' />
					</Button>
					<Label as='a' basic color='teal' pointing='left'>
						{likeCount}
					</Label>
				</Button>
				<Button as='div' labelPosition='right'>
					<Button color='blue' basic onClick={commentOnPost}>
						<Icon name='comments' />
					</Button>
					<Label as='a' basic color='blue' pointing='left'>
						{commentCount}
					</Label>
				</Button>
			</Card.Content>
		</Card>
	);
}

export default PostCard;
