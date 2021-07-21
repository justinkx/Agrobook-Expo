import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";

import { CATEGORIES } from "../Apollo/CategoryQuery";

const HomeScreen = () => {
  const { loading, error, data } = useQuery(CATEGORIES);
  // console.log("data", data);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({});
