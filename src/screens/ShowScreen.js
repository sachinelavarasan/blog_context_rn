import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Context } from "../context/BlogProvider";
import { FontAwesome } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <FontAwesome name="edit" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  content: {
    fontSize: 16,
    paddingLeft: 10,
  },
});
