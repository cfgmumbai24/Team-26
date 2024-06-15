import Post from "../models/posts.model.js";

export const createPost = async (req, res) => {
    try {
        const { title, description, links } = req.body;
        const post = new Post({ title, description, links });
        if(post){
            await post.save();
            res.status(200).json({message:"Post created"})
        }
    } catch (error) {
        console.log(`Error occured in createPost ${error}`);
    }

}