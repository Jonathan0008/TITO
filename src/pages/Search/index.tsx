import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput as TxInput
} from 'react-native';
import {Gap} from '../../components';
import BACK from '../../assets/icon/ion_chevron-back.svg';
import SRC from '../../assets/icon/material-symbols-light_search.svg';
import BP1 from '../../assets/icon/material-symbols_home-outline-rounded.svg';
import BP2 from '../../assets/icon/icon _search outline_.svg';
import BP3 from '../../assets/icon/zondicons_add-outline.svg';
import BP4 from '../../assets/icon/octicon_checklist-24.svg';
import BP5 from '../../assets/icon/lucide_user-round.svg';

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containSearch}>
        <BACK style={styles.Back} />
        <TxInput style={styles.containSrc} />
        <SRC style={styles.SRC} />
      </View>
      <View style={styles.buttomPage}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <BP1 style={styles.bp1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <BP2 style={styles.bp2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <BP3 style={styles.bp3} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <BP4 style={styles.bp4} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <BP5 style={styles.bp5} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containSearch: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  containPage: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 28,
    paddingRight: 120,
  },
  containSrc: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 42,
    marginBottom: 17,
    paddingRight: 31,
  },
  Back: {
    marginLeft: 17,
    marginTop: 55,
  },
  SRC: {
    marginLeft: 10,
    marginTop: 55,
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
