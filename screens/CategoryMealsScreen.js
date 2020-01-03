import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "./../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
const CategoryMeal = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return <MealList listData={displayMeals} navigation={props.navigation} />;
};
CategoryMeal.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({});
export default CategoryMeal;
