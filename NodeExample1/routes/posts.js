const express = require("express");

const router = express.Router();
const Post = require("../model/posts");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
  // const savedPost = await Post.create({
  //   title: req.body.title,
  //   description: req.body.description,
  // });
  // console.log(savedPost);
  // res.send({ savedPost });
});

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
