import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
// Context component
import { Context as BlogContext } from "../context/Context";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen!</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={style.row}>
              <Text style={style.Title}>
                {item.title} - {item.content}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Icon name="trash-alt" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Icon style={style.Plus} name="plus" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
  },
  Plus: {
    marginRight: 10,
  },
});

export default IndexScreen;
