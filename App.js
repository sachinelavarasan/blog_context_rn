import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Provider } from "./src/context/BlogProvider";

import HomeScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: "Home",
      }),
    },
    Show: {
      screen: ShowScreen,
      navigationOptions: () => ({
        title: "Show",
      }),
    },
    Create: {
      screen: CreateScreen,
      navigationOptions: () => ({
        title: "Create",
      }),
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: () => ({
        title: "Edit",
      }),
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const MyApp = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <MyApp />
    </Provider>
  );
};
