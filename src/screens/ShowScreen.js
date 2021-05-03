import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//Context
import { Context as BlogContext } from "../context/Context";
//Style
import { EvilIcons as Icon } from "@expo/vector-icons";

var referredId;
export default ShowScreen = ({ navigation }) => {
  referredId = navigation.getParam("id");
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === referredId);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit", { id: referredId })}
      >
        <Icon name="pencil" size={54} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});
