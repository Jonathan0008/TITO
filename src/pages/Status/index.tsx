import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackButton} from '../../assets/icon';
import {Waste1, Waste2} from '../../assets/images';
import {Shadow} from 'react-native-shadow-2';
import {NavigationProp} from '@react-navigation/native';

const Status = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  const handleNavigation = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleNavigation}
        activeOpacity={0.4}
        style={styles.statusButtonContainer}>
        <BackButton />
        <Text style={styles.statusText}>Status</Text>
      </TouchableOpacity>

      <View style={{rowGap: 20}}>
        <View style={styles.listContainer}>
          <Shadow distance={5} offset={[-2, 1]}>
            <Image source={Waste1} style={styles.image} />
          </Shadow>
          <View style={styles.descriptionContainer}>
            <Text style={styles.text} numberOfLines={2}>
              Ini adalah kolom caption bagi pengguna untuk memberikan informasi
              mengenai barang yang ditampilkan.
            </Text>
            <Text style={styles.text}>Status: Tidak Tersedia</Text>
            <View style={[styles.chipContainer, {backgroundColor: '#12FC46'}]}>
              <Text style={styles.chipText}>Ada</Text>
            </View>
          </View>
        </View>

        <View style={styles.listContainer}>
          <Shadow distance={5} offset={[-2, 1]}>
            <Image source={Waste2} style={styles.image} />
          </Shadow>
          <View style={styles.descriptionContainer}>
            <Text style={styles.text} numberOfLines={2}>
              Ini adalah kolom caption bagi pengguna untuk memberikan informasi
              mengenai barang yang ditampilkan.
            </Text>
            <Text style={styles.text}>Status: Tersedia</Text>
            <View style={[styles.chipContainer, {backgroundColor: '#FF0909'}]}>
              <Text style={styles.chipText}>Habis</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {padding: 20, rowGap: 30},
  statusButtonContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  statusText: {color: 'black', fontSize: 15, fontWeight: 'bold'},
  listContainer: {
    flexDirection: 'row',
    columnGap: 10,
    backgroundColor: '#D5F5EA',
    borderRadius: 15,
  },
  image: {
    width: 70,
    height: 70,
    objectFit: 'cover',
    borderRadius: 15,
  },
  descriptionContainer: {
    flex: 1,
    paddingVertical: 8,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  text: {color: 'black', fontSize: 10, fontWeight: 'bold'},
  chipContainer: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    bottom: 6,
    right: 0,
  },
  chipText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
