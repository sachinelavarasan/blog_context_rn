import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogForm from "../components/BlogForm";
import { Context } from "../context/BlogProvider";

const EditScreen = ({ navigation }) => {
  const { state, editPost } = useContext(Context);

  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const onSubmit = (title, content) => {
    editPost(id, title, content, () => {
      navigation.navigate("Home");
    });
  };
  return (
    <BlogForm
      onSubmit={onSubmit}
      btnTitle="Edit Blog"
      initialValue={{
        title: blogPost.title,
        content: blogPost.content,
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
