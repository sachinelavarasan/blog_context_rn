import React, { useReducer } from "react";
import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "list_posts":
      return payload;

    case "edit_post":
      return state.map((item) => (item.id === payload.id ? payload : item));
    case "delete_post":
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

const getPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "list_posts", payload: response.data });
  };
};

const addPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonServer.post("/blogposts", {
      title,
      content,
    });

    if (callback) {
      callback();
    }
  };
};

const deletePost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_post", payload: id });
  };
};

const editPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {
      title: title,
      content: content,
    });
    dispatch({
      type: "edit_post",
      payload: { id: id, title: title, content: content },
    });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost, deletePost, editPost, getPosts },
  []
);
