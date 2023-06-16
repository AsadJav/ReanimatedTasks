import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../Utils/COLORS';
import AppIcon from './AppIcon';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

function AccordionComponent({id, title, description}) {
  const shareValue = useSharedValue(0);
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = useAnimatedStyle(() => ({
    height: interpolate(shareValue.value, [0, 1], [0, bodySectionHeight]),
  }));

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(shareValue.value, [0, 1], [0, 90])}deg`,
        },
      ],
    };
  });

  const toggleButton = () => {
    if (shareValue.value === 0) {
      shareValue.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    } else {
      shareValue.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={toggleButton}>
        <View style={styles.container}>
          <Text style={styles.txt}>
            {id}-) {title}
          </Text>
          <Animated.View style={iconStyle}>
            <AppIcon
              IconName="arrow-forward-outline"
              IconColor={COLORS.orange}
              IconSize={30}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.descStyle, bodyHeight]}>
        <View
          style={styles.bodyContainer}
          onLayout={event => {
            setBodySectionHeight(event.nativeEvent.layout.height);
          }}>
          <Text style={styles.desctxt}>{description}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    padding: wp(5),
    height: hp(13),
    flexDirection: 'row',
  },
  txt: {color: COLORS.orange, fontWeight: 'bold', fontSize: 20},
  descStyle: {
    backgroundColor: COLORS.orange,
    overflow: 'hidden',
  },
  bodyContainer: {
    position: 'absolute',
    padding: wp(5),
  },
  desctxt: {fontSize: 20},
});

export default AccordionComponent;
