import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";
import { CATEGORIES } from "./../data/dummy-data";
import colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
  renderListItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id }
          })
        }
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderListItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default CategoriesScreen;
