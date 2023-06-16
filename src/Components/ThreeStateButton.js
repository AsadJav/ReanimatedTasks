import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../Utils/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppIcon from './AppIcon';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

function ThreeStateButton(props) {
  const shareValue = useSharedValue(0);
  const [state, setState] = useState('Activate');
  const [loader, setLoader] = useState(false);

  let title = '';
  let IconName = null;
  if (state === 'Activate') {
    title = 'Activate';
    IconName = 'arrow-up-circle-outline';
  } else if (state === 'Activating') {
    title = 'Activating';
  } else if (state === 'Activated') {
    title = 'Activited';
    IconName = 'checkmark-circle-outline';
  }
  useEffect(() => {
    if (state === 'Activating') {
      setLoader(true);
      const timeout = setTimeout(() => {
        setLoader(false);
        shareValue.value = withTiming(0, {duration: 500});
        setState('Activated');
      }, 3000);
      return () => clearTimeout(timeout);
    } else if (state === 'Activated') {
      title = 'Activated';
      const timeout = setTimeout(() => {
        shareValue.value = withTiming(360, {
          duration: 500,
        });
        setState('Activate');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [state]);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = shareValue.value ? COLORS.orange : COLORS.green;
    return {
      backgroundColor,
      transform: [{rotateZ: `${shareValue.value}deg`}],
    };
  });

  const toggleButton = () => {
    if (title == 'Activate') {
      setState('Activating');
      shareValue.value = withTiming(360, {duration: 1000});
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          toggleButton();
        }}>
        <Animated.View style={[animatedStyle, styles.btnView]}>
          <View style={styles.btn}>
            <AppIcon IconName={IconName} IconSize={30} />
            {loader && <ActivityIndicator color={COLORS.black} />}
            <Text style={styles.txt}>{title}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {color: COLORS.black, fontSize: 20, fontWeight: 'bold'},
  btnView: {
    backgroundColor: COLORS.orange,
    width: wp(45),
    height: hp(7),
    borderRadius: wp(8),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitingStyle: {},
});

export default ThreeStateButton;
