import {StyleSheet, View, TextInput as Input} from 'react-native';
import React from 'react';

type TextInputProps = {
  label: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
};

const TextInput = ({label, placeholder, onChangeText}: TextInputProps) => {
  return (
    <View>
      <Input
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        onChangeText={onChangeText}
      />
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
