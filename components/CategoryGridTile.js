import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";

const CategoryGridTile = props => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...{ backgroundColor: props.color }, ...styles.container }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    overflow: "hidden"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20
  }
});
export default CategoryGridTile;
