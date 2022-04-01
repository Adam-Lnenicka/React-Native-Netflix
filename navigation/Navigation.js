import FeaturedMovie from "../components/FeaturedMovie";
import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddMovieForm from "../components/AddMovieForm";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FeaturedMovie" component={FeaturedMovie} />
      <Stack.Screen name="AddMovieForm" component={AddMovieForm} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
