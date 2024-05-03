import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  BackButton,
  LocationIcon,
  PencilIcon,
  PhoneCallIcon,
  PlaneIcon,
  SearchCategoryIcon,
} from '../../assets/icon';
import {Waste1} from '../../assets/images';
import {Shadow} from 'react-native-shadow-2';

type AddProps = {
  navigation: NavigationProp<any>;
};

const Add = ({navigation}: AddProps) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <Shadow style={styles.header}>
        <TouchableOpacity
          onPress={handleGoBack}
          activeOpacity={0.4}
          style={styles.addButtonContainer}>
          <BackButton />
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
        <PlaneIcon />
      </Shadow>

      <Image source={Waste1} style={styles.image} />

      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        <View style={styles.inputContainer}>
          <PencilIcon width={20} height={20} />
          <View style={{flex: 1}}>
            <Text style={styles.inputLabel}>Keterangan</Text>
            <TextInput
              style={styles.input}
              placeholder="Deskripsikan postingan anda disini..."
              placeholderTextColor={'#A0A0A0'}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <LocationIcon width={20} height={20} />
          <View style={{flex: 1}}>
            <Text style={styles.inputLabel}>Lokasi</Text>
            <TextInput
              style={styles.input}
              placeholder="Mencari lokasi..."
              placeholderTextColor={'#A0A0A0'}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <PhoneCallIcon width={20} height={20} />
          <View style={{flex: 1}}>
            <Text style={styles.inputLabel}>No Telp</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukan nomor telepon yang akan dihubungi..."
              placeholderTextColor={'#A0A0A0'}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <SearchCategoryIcon width={20} height={20} />
          <View style={{flex: 1, rowGap: 20}}>
            <Text style={styles.inputLabel}>Kategori</Text>
            <View style={{flexDirection: 'row', columnGap: 15}}>
              <TouchableOpacity activeOpacity={0.4} style={styles.button}>
                <Text style={styles.buttonText}>ORGANIK</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={styles.button}>
                <Text style={styles.buttonText}>PLASTIK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 380,
    objectFit: 'cover',
    zIndex: -1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    columnGap: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  inputLabel: {color: 'black', fontSize: 16, fontWeight: 'bold'},
  input: {
    color: 'black',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
  },
  button: {
    backgroundColor: '#D5F5EA',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  buttonText: {color: 'black', fontWeight: 'bold', fontSize: 12},
  addButtonContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  addText: {color: 'black', fontSize: 15, fontWeight: 'bold'},
});
