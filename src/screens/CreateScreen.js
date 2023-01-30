import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogForm from "../components/BlogForm";
import { Context } from "../context/BlogProvider";

const CreateScreen = ({ navigation }) => {
  const { addPost } = useContext(Context);

  const onSubmit = (title, content) => {
    addPost(title, content, () => {
      navigation.navigate("Home");
    });
  };
  return <BlogForm onSubmit={onSubmit} btnTitle="Save Blog" />;
};

export default CreateScreen;

const styles = StyleSheet.create({});
