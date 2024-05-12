import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton, ProfileIcon, Recycle} from '../../assets/icon';
import {NavigationProp} from '@react-navigation/native';
import {Waste3, Waste4} from '../../assets/images';
import {Shadow} from 'react-native-shadow-2';
import {CardModal} from '../../components';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const OrganicRecycle = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<any>(null);
  const [selected, setSelected] = useState<any>(null);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleModal = (item: any) => {
    setSelected(item);
    setModal(!modal);
  };

  const getData = async () => {
    try {
      const snapshot = await firestore()
        .collection('sampah')
        .where('kategori', '==', 'organik')
        .get()
        .then(async querySnapshot => {
          return await Promise.all(
            querySnapshot.docs.map(async doc => {
              const data = doc.data();
              const user = await doc.data().uid.get();
              return {
                ...data,
                id: doc.id,
                user: user.data(),
              };
            }),
          );
        });
      setData(snapshot);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('data on state', data);
  }, [data]);
  return (
    <>
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
            // padding: 20,
          }}>
          <FlatList
            data={data}
            contentContainerStyle={{rowGap: 20, padding: 20}}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleModal(item)}>
                <Shadow style={styles.cardContainer}>
                  <View style={styles.cardHeaderContainer}>
                    <View style={styles.cardProfile}>
                      <ProfileIcon width={25} height={25} />
                      <View>
                        <Text style={styles.usernameText}>
                          {item.user.email}
                        </Text>
                        <Text style={styles.locationText}>{item.lokasi}</Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 11,
                        fontWeight: 'bold',
                      }}>
                      {item.tanggalUpload.toDate().toDateString()}
                    </Text>
                  </View>

                  <Image
                    source={{uri: item.gambar}}
                    style={{height: 257, width: '100%', objectFit: 'cover'}}
                  />

                  <Text style={styles.cardFooterText}>{item.keterangan}</Text>

                  <Recycle
                    style={[
                      styles.recycleIcon,
                      {color: item.status ? '#12FC46' : 'red'},
                    ]}
                  />
                </Shadow>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
      <CardModal
        visible={modal}
        handleClose={() => {
          setModal(!modal);
          setSelected(null);
        }}
        navigation={navigation}
        item={selected}
      />
    </>
  );
};

export default OrganicRecycle;

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
