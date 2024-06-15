import Post from "../models/posts.model.js";

export const createPost = async (req, res) => {
    try {
        const { title, description, links, tags } = req.body;
        const post = new Post({ title, description, links, tags });
        if(post){
            await post.save();
            res.status(200).json({message:"Post created"})
        }
    } catch (error) {
        console.log(`Error occured in createPost ${error}`);
    }

}


export const getPosts = async (req,res)=>{
    try{
    const tags = req.query.tags ? req.query.tags.split(',') : [];
    const query = {};

    if (tags && tags.length > 0) {
        query.tags = { $in: tags }; // Match any of the tags
    }

    const posts = await Post.find(query).exec();
    res.status(200).json(posts);
            
    }catch (error) {
        console.log(`Error occured in getPosts ${error}`)
    }
}