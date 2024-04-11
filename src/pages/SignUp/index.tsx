import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import LogoCamera from '../../assets/icon/camera.svg';
import Logo from '../../assets/icon/Google-Logo--Streamline-Logos.svg';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.contentWrapper}>
      <Gap height={70} />
      <View style={styles.profilePictureContainer}>
        <View style={styles.profilePicture}>
          <View style={styles.addPhotoContainer}>
            <TouchableOpacity>
              <LogoCamera style={styles.addPhoto} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Gap height={20} />
      <Text style={styles.text1}>Selamat Datang!</Text>
      <Gap height={17} />
      <Text style={styles.text2}>
        Jaga dan cintai lingkungan bersama TITO sahabat peduli lingkungan!
      </Text>
      <Gap height={45} />
      <TextInput placeholder="Username" label={undefined} />
      <Gap height={13} />
      <TextInput placeholder="Email" label={undefined} />
      <Gap height={13} />
      <TextInput placeholder="Password" label={undefined} />
      <Gap height={13} />
      <TextInput placeholder="Nomor HP" label={undefined} />
      <Gap height={43} />
      <Button
        label="Daftar"
        textColor="#FFFFFF"
        onSubmit={() => navigation.navigate('SignIn')}
        type={undefined}
        icon={undefined}
      />
      <Gap height={33.75} />
      <Text style={styles.text3}>Atau masuk dengan</Text>
      <Gap height={27} />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Gap height={31} />
      <Text style={styles.text3}>Sudah Punya Akun?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={[styles.text3, styles.registerText]}>Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  profilePicture: {
    height: 110,
    width: 110,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePictureContainer: {
    alignItems: 'center',
  },
  addPhotoContainer: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
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