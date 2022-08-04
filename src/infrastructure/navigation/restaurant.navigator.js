import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    presentation: "modal",
    gestureEnabled: true,
    cardStyle: {
      flex: 1,
    },
  };
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={createScreenOptions}>
      <RestaurantStack.Screen
        name="RestaurantList"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
