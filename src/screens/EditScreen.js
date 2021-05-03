import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
//Context
import { Context as BlogContext } from "../context/Context";
//Components
import BlogForm from "../components/BlogForm";

export default EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(BlogContext);
  const BlogId = navigation.getParam("id");
  const BlogPost = state.find((Post) => Post.id === BlogId);
  //   const [title, setTitle] = useState(BlogPost?.title || "");
  //   const [content, setContent] = useState(BlogPost?.content || "");

  return <BlogForm />;
};

const styles = StyleSheet.create({});
