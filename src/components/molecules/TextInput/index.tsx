import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, Type}) => {
  return (
    <View>
      <Input style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  textInput: {
    color: '#06D48A',
    borderColor: '#06D48A',
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 59,
    marginRight: 58,
    paddingLeft: 18.86,
    paddingVertical: 11,
    fontSize: 16,
  },
});
