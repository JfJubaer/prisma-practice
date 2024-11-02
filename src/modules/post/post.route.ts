import express from 'express';
import { PostController } from './post.controller';

const router = express.Router();

router.get('/learn-query', PostController.learnAggregateAndGrouping)
router.get("/", PostController.getAllPostController)
router.get("/:id", PostController.getSinglePostController)
router.post("/create-post", PostController.createPostController)
router.patch('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)

export const PostRoutes = router;