import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {BackButton, SearchIcon} from '../../assets/icon';
import {NavigationProp} from '@react-navigation/native';
import {Waste1, Waste7, Waste8} from '../../assets/images';
import {Shadow} from 'react-native-shadow-2';

type SearchProps = {
  navigation: NavigationProp<any>;
};

const Search = ({navigation}: SearchProps) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} activeOpacity={0.4}>
          <BackButton />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} />
          <SearchIcon />
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>ORGANIC</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>PLASTIC</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.listContainer}>
          <Shadow>
            <Image source={Waste1} style={styles.image} />
          </Shadow>
          <Text style={styles.description} numberOfLines={8}>
            Ini adalah kolom caption bagi pengguna untuk memberikan informasi
            mengenai barang yang ditampilkan.
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Shadow>
            <Image source={Waste7} style={styles.image} />
          </Shadow>
          <Text style={styles.description} numberOfLines={8}>
            Ini adalah kolom caption bagi pengguna untuk memberikan informasi
            mengenai barang yang ditampilkan.
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Shadow>
            <Image source={Waste8} style={styles.image} />
          </Shadow>
          <Text style={styles.description} numberOfLines={8}>
            Ini adalah kolom caption bagi pengguna untuk memberikan informasi
            mengenai barang yang ditampilkan.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    columnGap: 8,
    alignItems: 'center',
  },
  searchContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    borderRadius: 15,
    backgroundColor: 'white',

    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  input: {width: 275, color: 'black'},
  buttonGroup: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    columnGap: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D5F5EA',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {color: 'black', fontSize: 13},
  scrollContainer: {
    flex: 1,
    marginTop: 40,
    paddingTop: 20,
    rowGap: 25,
    paddingHorizontal: 20,
  },
  listContainer: {
    backgroundColor: '#D5F5EA',
    flexDirection: 'row',
    columnGap: 10,
    borderRadius: 20,
  },
  image: {width: 135, height: 135, borderRadius: 20, objectFit: 'cover'},
  description: {
    color: 'black',
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
