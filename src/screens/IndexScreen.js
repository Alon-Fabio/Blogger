import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
// Context component
import { Context as BlogContext } from "../context/Context";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen!</Text>
      <Button title={"Add blog post"} onPress={() => addBlogPost()} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;
