import {NavigationProp} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackButton, EditIcon, LogoutIcon} from '../../assets/icon';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  return (
    <View style={{rowGap: 25}}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={handleGoBack}
            activeOpacity={0.4}
            style={styles.statusButtonContainer}>
            <BackButton />
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <LogoutIcon />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginBottom: 40}}>
          <Image style={styles.image} />

          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Binary Titans
          </Text>
          <Text style={{color: 'black'}}>binarytitans@gmail.com</Text>
          <Text style={{color: 'black'}}>08131938475</Text>
        </View>
      </View>

      <View style={{paddingHorizontal: 20, gap: 10}}>
        <Text style={styles.profileText}>Akun</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.editBtnContainer}
          onPress={handleEditProfile}>
          <View style={{flexDirection: 'row', columnGap: 20}}>
            <EditIcon />
            <Text style={{color: 'black'}}>Edit Profil</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  statusButtonContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#D5F5EA',
    marginBottom: 20,
  },
  profileText: {color: 'black', fontSize: 15, fontWeight: 'bold'},
  headerContainer: {
    backgroundColor: '#06D48A',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    rowGap: 40,
  },
  editBtnContainer: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
});
