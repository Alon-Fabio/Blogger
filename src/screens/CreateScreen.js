import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { Context as BlogContext } from "../context/Context";

export default CreateScreen = ({ navigation }) => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const { addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <View>
        <Text style={styles.Label}>Enter Title:</Text>
        <TextInput
          style={styles.Input}
          value={Title}
          onChangeText={(Text) => setTitle(Text)}
        />
      </View>
      <View>
        <Text style={styles.Label}>Enter Context:</Text>
        <TextInput
          style={styles.Input}
          value={Content}
          onChangeText={(Text) => setContent(Text)}
        />
      </View>
      <Button
        title={"Publish post"}
        onPress={() => {
          addBlogPost(Title, Content, () => navigation.navigate("Index"));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Label: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 24,
  },
  Input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 2.5,
    marginLeft: 10,
    marginTop: 10,
  },
});
