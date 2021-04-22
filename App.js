import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Components
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/context/Context";

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
