import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Icon } from "native-base";
import Swipeable from "react-native-swipeable";

const { width } = Dimensions.get("window");

const Item = ({
  inCompleteTodo,
  completeTodo,
  textValue,
  id,
  deleteTodo,
  isCompleted,
}) => {
  toggleItem = () => {
    if (isCompleted) {
      inCompleteTodo(id);
    } else {
      completeTodo(id);
    }
  };

  AskForDelete = (id) => {
    Alert.alert("Delete task", "Are you sure you want to delete this ?", [
      {
        text: "Yes",
        onPress: () => deleteTodo(id),
        style: "cancel",
      },
      { text: "No" },
    ]);
  };

  rightButtons = [
    <TouchableHighlight
      style={{
        backgroundColor: "red",
        height: "100%",
        justifyContent: "center",
      }}
      onPressOut={() => this.AskForDelete(id)}
    >
      <Icon
        name="md-trash"
        style={{ marginLeft: 30, color: "#ABADF9", paddingRight: 10 }}
      />
    </TouchableHighlight>,
  ];

  return (
    <View style={styles.container}>
      <Swipeable
        rightButtons={rightButtons}
        onRightActionRelease={() => deleteTodo(id)}
      >
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={this.toggleItem}>
            <Icon
              name={isCompleted ? "checkmark-circle" : "radio-button-off"}
              style={{ paddingLeft: 10, color: "#7A7AF6" }}
            />
          </TouchableOpacity>

          <Text
            style={[
              styles.text,
              {
                opacity: isCompleted ? 0.5 : 1.0,
                textDecorationLine: isCompleted ? "line-through" : "none",
                color: isCompleted ? "#7A7AF6" : "#4F50DC",
              },
            ]}
          >
            {textValue}
          </Text>
        </View>
      </Swipeable>
      <TouchableOpacity onPressOut={() => deleteTodo(id)}>
        <Icon name="md-trash" style={{ color: "#ABADF9", paddingRight: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#5859f2",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#4F50DC",
    fontSize: 18,
    marginVertical: 20,
    paddingLeft: 10,
  },

  rowContainer: {
    flexDirection: "row",
    width: width / 2,
    alignItems: "center",
  },
});

export default Item;
