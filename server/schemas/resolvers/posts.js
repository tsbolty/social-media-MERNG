const Post = require("../../models/Post");

const postResolvers = {
	Query: {
		getPosts: async () => {
			try {
				const posts = await Post.find();
				return posts;
			} catch (err) {
				console.log(err);
			}
		}
	}
};

module.exports = postResolvers;
