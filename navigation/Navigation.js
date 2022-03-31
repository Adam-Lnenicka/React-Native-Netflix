import FeaturedMovie from "../components/FeaturedMovie";

const Navigation = createStackNavigator(
  {
    FeaturedMovie: {
      screen: FeaturedMovie,
    },
    : {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

export default 
