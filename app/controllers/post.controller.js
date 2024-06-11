const Post = require("../models/post.model");

const InsertPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const newPost = await post.save();
    res
      .status(200)
      .send({ message: "Post created successfully!", data: newPost });
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error });
  }
};

const FetchPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res
      .status(200)
      .send({ message: "Posts retrieved successfully!", data: posts });
  } catch (error) {
    res.status(200).send({ message: error });
  }
};

const FetchPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).send({ message: "Post not found!" });
    }
    res
      .status(200)
      .send({ message: "Post retrieved successfully!", data: post });
  } catch (error) {
    console.log("error");
    res.status(200).send({ message: error });
  }
};

const UpdatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.status(200).send({ message: "Post Updated successfully!", data: post });
  } catch (error) {
    res.status(200).send({ message: error });
  }
};

const DeletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.status(200).send({ message: "Post deleted successfully!" });
  } catch (error) {
    res.status(200).send({ message: error });
  }
};

module.exports = {
  InsertPost,
  FetchPosts,
  FetchPost,
  UpdatePost,
  DeletePost,
};
