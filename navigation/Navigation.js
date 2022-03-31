import FeaturedMovie from "../components/FeaturedMovie";
import Home from "../pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FeaturedMovie" component={FeaturedMovie} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
