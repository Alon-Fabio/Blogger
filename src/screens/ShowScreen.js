import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Context as BlogContext } from "../context/Context";

export default ShowScreen = ({ navigation }) => {
  const referredId = navigation.getParam("id");
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === referredId);
  return (
    <View>
      <Text>
        {blogPost.title} - ID: {blogPost.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
