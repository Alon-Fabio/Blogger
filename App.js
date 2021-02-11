import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import IndexScreen from "./src/screens/IndexScreen";

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

export default createAppContainer(navigator);
