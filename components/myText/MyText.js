import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyText = () => {
  const handleTextClick = () => {
    alert('clicked');
  };
  return (
    <Text style={styles.text} onPress={handleTextClick}>
      MyText
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});
