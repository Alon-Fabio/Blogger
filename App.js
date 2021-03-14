import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/Context";

const navigator = createStackNavigator(
  {
    index: IndexScreen,
  },
  {
    initialRouteName: "index",
    defaultNavigationOptions: {
      title: "Blogger",
      cardStyle: {
        backgroundColor: "#fff",
      },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
