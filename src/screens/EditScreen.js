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

  return (
    <BlogForm
      initialState={{ title: BlogPost.title, content: BlogPost.content }}
      onSubmitForm={(title, content) =>
        editBlogPost(BlogId, title, content, () => navigation.pop())
      }
    />
  );
};

const styles = StyleSheet.create({});
