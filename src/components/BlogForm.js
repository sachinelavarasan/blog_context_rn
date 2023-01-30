import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const BlogForm = ({ onSubmit, btnTitle, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title={btnTitle}
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

export default BlogForm;

BlogForm.defaultProps = {
  initialValue: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});
