import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton, ProfileIcon, Recycle} from '../../assets/icon';
import {Shadow} from 'react-native-shadow-2';
import {Waste3, Waste4} from '../../assets/images';
import {NavigationProp} from '@react-navigation/native';

const OrganicApproved = ({navigation}: {navigation: NavigationProp<any>}) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={handleGoBack}
        activeOpacity={0.4}
        style={styles.organicButtonContainer}>
        <BackButton />
        <Text style={styles.organicText}>Organic</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={{
          rowGap: 15,
          backgroundColor: 'transparent',
          padding: 20,
        }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Shadow style={styles.cardContainer}>
            <View style={styles.cardHeaderContainer}>
              <View style={styles.cardProfile}>
                <ProfileIcon width={25} height={25} />
                <View>
                  <Text style={styles.usernameText}>Username</Text>
                  <Text style={styles.locationText}>Location</Text>
                </View>
              </View>
              <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
                Tanggal Upload
              </Text>
            </View>

            <Image
              source={Waste3}
              style={{height: 257, width: '100%', objectFit: 'cover'}}
            />

            <Text style={styles.cardFooterText}>
              Ini adalah kolom caption bagi pengguna untuk memberikan informasi
              mengenai barang yang ditampilkan.
            </Text>

            <Recycle style={[styles.recycleIcon, {color: '#FF0909'}]} />
          </Shadow>
        </TouchableOpacity>

        <Shadow style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <View style={styles.cardProfile}>
              <ProfileIcon width={25} height={25} />
              <View>
                <Text style={styles.usernameText}>Username</Text>
                <Text style={styles.locationText}>Location</Text>
              </View>
            </View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
              Tanggal Upload
            </Text>
          </View>

          <Image
            source={Waste4}
            style={{height: 257, width: '100%', objectFit: 'cover'}}
          />

          <Text style={styles.cardFooterText}>
            Ini adalah kolom caption bagi pengguna untuk memberikan informasi
            mengenai barang yang ditampilkan.
          </Text>

          <Recycle style={[styles.recycleIcon, {color: '#12FC46'}]} />
        </Shadow>
      </ScrollView>
    </View>
  );
};

export default OrganicApproved;

const styles = StyleSheet.create({
  organicButtonContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    padding: 20,
  },
  organicText: {color: 'black', fontSize: 15, fontWeight: 'bold'},
  cardContainer: {width: '100%', paddingTop: 10, paddingBottom: 25, rowGap: 15},
  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cardProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  usernameText: {color: 'black', fontSize: 13, fontWeight: 'bold'},
  locationText: {color: 'black', fontSize: 12, fontWeight: 'bold'},
  cardFooterText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 15,
    marginRight: 35,
  },
  recycleIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
