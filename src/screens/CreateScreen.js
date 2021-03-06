import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { Context as BlogContext } from "../context/Context";
//Components
import BlogForm from "../components/BlogForm";

export default CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);
  return (
    <BlogForm
      onSubmitForm={(title, content) =>
        addBlogPost(title, content, () => navigation.navigate("Index"))
      }
    />
  );
};

const styles = StyleSheet.create({});
