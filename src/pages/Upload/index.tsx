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
import Next from '../../assets/icon/next.svg';
import Cancel from '../../assets/icon/cancel.svg';
import Center from '../../assets/icon/gambarcenter.svg';
import Img from '../../assets/icon/img.svg';

const Upload = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerNotif}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Cancel style={styles.cancel} />
        </TouchableOpacity>
        <Text style={styles.HeadText}>Postingan Baru</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Next style={styles.Next} />
        </TouchableOpacity>
      </View>
      <Gap height={6} />
      <View>
        <Center style={styles.Imagecenter}/>
        <Text style={styles.text1}>Terbaru</Text>
      </View>
      <ScrollView>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
      </ScrollView>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerNotif: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingBottom: 19,
  },
  containPage: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 28,
    paddingRight: 120,
  },
  cancel: {
    marginLeft: 17,
    marginTop: 35,
  },
  HeadText: {
    marginLeft: 17,
    marginTop: 35,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#100101',
  },
  Next: {
    marginLeft: 168,
    marginTop: 35,
  },
  Imagecenter: {
    marginHorizontal:11,
  },
  text1: {
    marginVertical: 15,
    marginLeft: 28,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#100101',
  },
  flax: {
    flexDirection: 'row',
  },
  imageup: {
    marginLeft: 11,
  },
});
