import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton, CameraIcon} from '../../assets/icon';
import {NavigationProp} from '@react-navigation/native';

const EditProfile = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleGoBack}
        activeOpacity={0.4}
        style={styles.statusButtonContainer}>
        <BackButton />
        <Text style={styles.profileText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.image} />
        <CameraIcon style={{position: 'absolute'}} />
      </TouchableOpacity>

      {/* Form section */}
      <View style={{rowGap: 20}}>
        <View>
          <Text style={{color: '#4E4848'}}>Username</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={{color: '#4E4848'}}>E-mail</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={{color: '#4E4848'}}>Nomor Hp</Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#06D48A',
            paddingVertical: 15,
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Simpang Perubahan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    rowGap: 30,
    flex: 1,
  },
  statusButtonContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#D5F5EA',
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  textInput: {
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  profileText: {color: 'black', fontSize: 15, fontWeight: 'bold'},
});
