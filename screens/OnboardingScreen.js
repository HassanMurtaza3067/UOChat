import React from 'react';
import {StyleSheet, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#EFEFEF',
          image: <Image source={require('../assets/UO_Logo.png')} />,
          title: 'UO Chat',
          subtitle:
            'This is Our Final Year Project Created By \nHassan Murtaza and Usman Rafiq',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
