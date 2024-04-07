import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BackButton, Logo} from '../../../assets/icon';

const Button = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  onSubmit,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
        {icon === 'back-button' && <BackButton />}
        {icon === 'logo' && <Logo />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      activeOpacity={0.7}
      onPress={onSubmit}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    borderRadius: 8,
  }),
  label: textColor => ({
    textAlign: 'center',
    color: textColor,
  }),
});
