const Post = require("../../models/Post");
const checkAuth = require("../../util/checkAuth");
const { AuthenticationError, UserInputError } = require("apollo-server");

const postResolvers = {
	Query: {
		getPosts: async () => {
			try {
				const posts = await Post.find().sort({ createdAt: -1 });
				return posts;
			} catch (err) {
				console.log(err);
			}
		},
		getPost: async (_, { postId }) => {
			try {
				const post = await Post.findById(postId);
				if (post) {
					return post;
				} else {
					throw new Error("Post not found");
				}
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		createPost: async (_, { body }, context) => {
			const user = checkAuth(context);

			const newPost = new Post({
				body,
				user: user.id,
				username: user.username,
				createdAt: new Date().toISOString()
			});

			const post = await newPost.save();

			context.pubsub.publish("NEW_POST", {
				newPost: post
			});
			return post;
		},
		deletePost: async (_, { postId }, context) => {
			console.log("hit delete");
			const user = checkAuth(context);

			try {
				const post = await Post.findById(postId);
				if (user.username === post.username) {
					await post.delete();
					return "Post deleted successfully";
				} else {
					throw new AuthenticationError("Action not allowed");
				}
			} catch (err) {
				throw new Error(err);
			}
		},
		likePost: async (_, { postId }, context) => {
			const { username } = checkAuth(context);

			const post = await Post.findById(postId);
			if (post) {
				if (post.likes.find(like => like.username === username)) {
					post.likes = post.likes.filter(like => like.username !== username);
				} else {
					// NOT LIKED LIKE POST.
					post.likes.push({
						username,
						createdAt: new Date().toISOString()
					});
				}
				await post.save();
				return post;
			} else {
				throw new UserInputError("Post not found");
			}
		}
	},
	Subscription: {
		newPost: {
			subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_POST")
		}
	}
};

module.exports = postResolvers;
