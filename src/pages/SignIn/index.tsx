import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Gap, PageHeader, TextInput } from '../../components';
import Logo from '../../assets/icon/Google-Logo--Streamline-Logos.svg';

const SignIn = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Gap height={167} />
      <Text style={styles.text1}>Selamat Datang!</Text>
      <Gap height={14} />
      <Text style={styles.text2}>
        Jaga dan cintai lingkungan bersama TITO sahabat peduli lingkungan!
      </Text>
      <Gap height={71} />
      <TextInput placeholder="Email" label={undefined} />
      <Gap height={21} />
      <TextInput placeholder="Password" label={undefined} />
      <Gap height={66} />
      <Button
        textColor="#FFFFFF"
        label="Masuk"
        onSubmit={() => navigation.navigate('Home')}
        type={undefined}
        icon={undefined}
      />
      <Gap height={38.75} />
      <Text style={styles.text3}>Atau masuk dengan</Text>
      <Gap height={27} />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Gap height={101} />
      <Text style={styles.text3}>Belum Punya Akun?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={[styles.text3, styles.registerText]}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  text1: {
    color: '#000000',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  text3: {
    color: '#847E7E',
    fontSize: 13,
    textAlign: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  registerText: {
    color: '#06D48A',
    textDecorationLine: 'underline',
  },
});