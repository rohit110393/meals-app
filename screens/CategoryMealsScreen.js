import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "./../data/dummy-data";
import MealItem from "../components/MealItem";
const CategoryMeal = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        duration={itemData.item.duration}
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: itemData.item.id }
          });
        }}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    );
  };
  const categoryId = props.navigation.getParam("categoryId");
  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return (
    <View style={styles.root}>
      <FlatList
        data={displayMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};
CategoryMeal.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});
export default CategoryMeal;
