import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  BackButton,
  LocationIcon,
  PencilIcon,
  PhoneCallIcon,
  PlaneIcon,
  SearchCategoryIcon,
} from '../../assets/icon';
import {Shadow} from 'react-native-shadow-2';
import {launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {UserContext} from '../../router';

type AddProps = {
  navigation: NavigationProp<any>;
};

const Add = ({navigation}: AddProps) => {
  const user = useContext(UserContext);
  const [form, setForm] = useState({
    gambar: null as string | null,
    kategori: '',
    keterangan: '',
    lokasi: '',
    noTelp: '',
    status: false,
    tanggalUpload: new Date(),
    uid: '',
  });
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleInput = (value: string | undefined, input: string) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const handleImageSelect = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });
      if (result.assets) {
        handleInput(result.assets[0].uri, 'gambar');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const filename = form.gambar?.split('/').pop();
    const reference = storage().ref(filename);
    try {
      console.log('fire');
      await reference.putFile(form.gambar);
      const url = await reference.getDownloadURL();

      const payload = {
        ...form,
        gambar: url,
        uid: firestore().doc(`user/${user.uid}`),
      };

      await firestore().collection('sampah').add(payload);
      handleGoBack();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
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
        <TouchableOpacity onPress={handleSubmit}>
          <PlaneIcon />
        </TouchableOpacity>
      </Shadow>

      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 380,
        }}>
        {form.gambar ? (
          <Image source={{uri: form.gambar}} style={styles.image} />
        ) : (
          <TouchableOpacity
            style={{
              position: 'absolute',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            onPress={handleImageSelect}>
            <Text style={{color: 'black'}}>Browse Image</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        <View style={styles.inputContainer}>
          <PencilIcon width={20} height={20} />
          <View style={{flex: 1}}>
            <Text style={styles.inputLabel}>Keterangan</Text>
            <TextInput
              onChangeText={value => handleInput(value, 'keterangan')}
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
              onChangeText={value => handleInput(value, 'lokasi')}
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
              onChangeText={value => handleInput(value, 'noTelp')}
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
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => handleInput('organik', 'kategori')}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      form.kategori === 'organik' ? '#03c2fc' : '#D5F5EA',
                  },
                ]}>
                <Text style={styles.buttonText}>ORGANIK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => handleInput('plastik', 'kategori')}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      form.kategori === 'plastik' ? '#03c2fc' : '#D5F5EA',
                  },
                ]}>
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
