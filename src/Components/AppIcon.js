import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function AppIcon({IconName, IconSize, IconColor, IconStyle}) {
  return (
    <Icon name={IconName} size={IconSize} color={IconColor} style={IconStyle} />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppIcon;
