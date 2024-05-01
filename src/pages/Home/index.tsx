import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Gap} from '../../components';
import Notif from '../../assets/icon/mdi_bell-notification-outline.svg';
import B1 from '../../assets/icon/Rectangle 1.svg';
import B2 from '../../assets/icon/Rectangle 9.svg';
import B3 from '../../assets/icon/Rectangle 1100.svg';
import B4 from '../../assets/icon/Group 35.svg';
import B5 from '../../assets/icon/Group 36.svg';
import BP1 from '../../assets/icon/material-symbols_home-outline-rounded.svg';
import BP2 from '../../assets/icon/icon _search outline_.svg';
import BP3 from '../../assets/icon/zondicons_add-outline.svg';
import BP4 from '../../assets/icon/octicon_checklist-24.svg';
import BP5 from '../../assets/icon/lucide_user-round.svg';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containNotif}>
          <Gap height={34} />
          <TouchableOpacity onPress={() => navigation.navigate('Notif')}>
            <Notif />
          </TouchableOpacity>
          <Gap height={28} />
        </View>
        <Gap height={10} />
        <View style={styles.containPage}>
          <Gap height={20} />
          <Text style={styles.text1}>Selamat Datang, Binary Titans!</Text>
          <Text style={styles.text2}>Airmadidi, Minahasa Utara</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.containPage2}>
            <B1 />
            <B2 />
            <B3 />
          </View>
        </ScrollView>
        <View style={styles.containPage3}>
          <Gap height={35} />
          <Text style={styles.text3}>Kategori</Text>
          <Gap height={15} />
          <TouchableOpacity
            onPress={() => navigation.navigate('OrganicRecycle')}>
            <B4 />
          </TouchableOpacity>
          <Gap height={20} />
          <TouchableOpacity
            onPress={() => navigation.navigate('PlasticRecycle')}>
            <B5 />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.buttomPage}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BP1 style={styles.bp1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <BP2 style={styles.bp2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
          <BP3 style={styles.bp3} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Status')}>
          <BP4 style={styles.bp4} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <BP5 style={styles.bp5} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containNotif: {
    paddingLeft: 338,
    paddingRight: 28,
    borderEndColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
  containPage: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 28,
    paddingRight: 120,
  },
  containPage2: {
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingLeft: 15,
    flexDirection: 'row',
  },
  containPage3: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  text2: {
    fontSize: 10,
    fontWeight: '400',
    color: '#000000',
  },
  text3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  buttomPage: {
    paddingHorizontal: 28,
    paddingVertical: 7,
    flexDirection: 'row',
    backgroundColor: '#06D48A',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bp1: {
    marginTop: 5,
    marginHorizontal: 20,
  },
  bp2: {
    marginTop: 5,
    marginHorizontal: 20,
  },
  bp3: {
    marginHorizontal: 20,
  },
  bp4: {
    marginTop: 5,
    marginHorizontal: 20,
  },
  bp5: {
    marginTop: 5,
    marginHorizontal: 20,
  },
});
