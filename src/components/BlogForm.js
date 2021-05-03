import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogForm = ({
  onSubmitForm,
  initialState = { title: "", content: "" },
}) => {
  const [title, setTitle] = useState(initialState.title);
  const [content, setContent] = useState(initialState.content);
  return (
    <View>
      <View>
        <Text style={styles.Label}>Enter Title:</Text>
        <TextInput
          style={styles.Input}
          value={title}
          onChangeText={(Text) => setTitle(Text)}
        />
      </View>
      <View>
        <Text style={styles.Label}>Enter Content:</Text>
        <TextInput
          style={styles.Input}
          value={content}
          onChangeText={(Text) => setContent(Text)}
        />
      </View>
      <Button
        title={"Publish post"}
        onPress={() => onSubmitForm(title, content)}
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

export default BlogForm;
