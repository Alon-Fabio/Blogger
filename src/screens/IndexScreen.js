import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/Context";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen!</Text>
      <Button title={"Add blog post"} onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;
