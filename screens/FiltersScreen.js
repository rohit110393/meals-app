import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "./../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FiltersScreen = props => {
  return (
    <View style={styles.root}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Screen",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title={"Menu"}
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
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
export default FiltersScreen;
