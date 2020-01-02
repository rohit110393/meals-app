import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "./../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
const MealsDetails = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.root}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealsDetails.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log()}
        />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default MealsDetails;
