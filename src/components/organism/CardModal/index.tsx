import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProfileIcon, Recycle} from '../../../assets/icon';
import {Waste3} from '../../../assets/images';
import {NavigationProp} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

type TCard = {
  visible: boolean;
  handleClose: () => void;
  navigation: NavigationProp<any>;
  item: any;
};

const CardModal = ({visible, handleClose, navigation, item}: TCard) => {
  const handleApprove = async () => {
    try {
      await firestore().collection('sampah').doc(item.id).update({
        status: true,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBg}>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeaderContainer}>
              <View style={styles.cardProfile}>
                <ProfileIcon width={25} height={25} />
                <View>
                  <Text style={styles.usernameText}>{item?.user.email}</Text>
                  <Text style={styles.locationText}>{item?.lokasi}</Text>
                </View>
              </View>
              <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
                {item?.tanggalUpload.toDate().toDateString()}
              </Text>
            </View>

            <Image
              source={{uri: item?.gambar}}
              style={{height: 257, width: '100%', objectFit: 'cover'}}
            />

            <Text style={styles.cardFooterText}>{item?.keterangan}</Text>
          </View>

          <View style={{paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.detailLabel}>KATEGORI</Text>
              <Text style={styles.detailDivider}>:</Text>
              <Text style={styles.detailValue}>{item?.kategori}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.detailLabel}>No Telp</Text>
              <Text style={styles.detailDivider}>:</Text>
              <Text style={styles.detailValue}>{item?.noTelp}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.detailLabel}>LOKASI</Text>
              <Text style={styles.detailDivider}>:</Text>
              <Text style={styles.detailValue}>{item?.lokasi}</Text>
            </View>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              APAKAH ANDA INGIN MENGAMBIL INI?
            </Text>
            <View style={styles.footerButtonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleClose}
                style={[styles.buttonContainer, {backgroundColor: '#FF0909'}]}>
                <Text style={styles.buttonText}>TIDAK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleApprove}
                style={[styles.buttonContainer, {backgroundColor: '#12FC48'}]}>
                <Text style={styles.buttonText}>YA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CardModal;

const styles = StyleSheet.create({
  modalBg: {backgroundColor: 'rgba(0,0,0,0.5)', flex: 1},
  container: {backgroundColor: '#D5F5EA', flex: 1, margin: 20},
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
    color: '#12FC46',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  detailLabel: {color: 'black', fontSize: 8, flexBasis: 80},
  detailDivider: {color: 'black', fontSize: 8, flexBasis: 10},
  detailValue: {
    color: 'black',
    fontSize: 8,
    flexGrow: 1,
  },
  footerContainer: {marginTop: 80, rowGap: 30, alignItems: 'center'},
  footerText: {color: 'black', fontWeight: 'bold'},
  footerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: '#FF0909',
    borderRadius: 50,
    width: 120,
    paddingVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
