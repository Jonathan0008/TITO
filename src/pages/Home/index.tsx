import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import PageBoddy from '../../components/molecules/PageBoddy';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        Type={'Home'}
        label={undefined}
        backButton={undefined}
        onPress={undefined}
      />
      <Gap height={20} />
      <PageBoddy label="Your Balance" Type={undefined} label2={undefined} />
      <PageBoddy Type={'homebody'} label={undefined} label2={undefined} />
      <PageBoddy Type={'homegaris'} label={undefined} label2={undefined} />
      <PageBoddy Type={'homeunderl'} label={undefined} label2={undefined} />
      <PageBoddy Type={'homeunderl2'} label={undefined} label2={undefined} />
      <Gap height={20} />
      <View style={styles.contentWrapper}>
        <PageBoddy Type={'homelt'} label={undefined} label2={undefined} />
        <Gap height={8.81} />
        <Button
          label="Cash On Hand"
          onSubmit={() => navigation.navigate('COH')}
          type={undefined}
          icon={undefined}
        />
        <Gap height={18.04} />
        <Button
          label="Cash On Bank"
          onSubmit={() => navigation.navigate('COB')}
          type={undefined}
          icon={undefined}
        />
        <Gap height={71.27} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});