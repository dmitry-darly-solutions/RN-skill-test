import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  PixelRatio,
  Text,
  Image,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import FadeInOut from 'react-native-fade-in-out';

const App: () => Node = () => {
  const [isPending, setIsPending] = useState(false);
  const [isAnimPending, setIsAnimPending] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isAnimJoined, setIsAnimJoined] = useState(false);
  const backgroundStyle = {
    backgroundColor: Colors.white,
  };
  const onPress = () => {
    if (isAnimPending) return;
    setIsAnimPending(true);
    setTimeout(() => {
      setIsPending(true);
      setTimeout(() => join(), 1000);
    }, 500);
  };

  const join = () => {
    setIsAnimJoined(true);
    setTimeout(() => {
      setIsJoined(true);
    }, 500);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, {height: '100%'}]}>
        <View style={[backgroundStyle, styles.sectionContainer]}>
          <Text style={[styles.sectionTitle, styles.textStyle]}>
            Press prototype to see button animation
          </Text>
          {isJoined ? (
            <FadeInOut visible={isAnimJoined} duration={500}>
              <Text style={[styles.textStyle, styles.confirmText]}>Joined</Text>
            </FadeInOut>
          ) : (
            <FadeInOut visible={!isAnimJoined} duration={500}>
              <Pressable onPress={onPress}>
                <LinearGradient
                  style={[styles.sectionButton]}
                  locations={[0, 0.0548, 0.8877, 1]}
                  colors={['#FF6E6D', '#FF3183', '#8559F3', '#657BEA']}
                  {...{
                    useAngle: true,
                    angle: 41.01,
                    angleCenter: {x: 0.5, y: 0.5},
                  }}>
                  {isPending ? (
                    <FadeInOut visible={isAnimPending} duration={500}>
                      <Image source={require('./assets/images/vector.png')} />
                    </FadeInOut>
                  ) : (
                    <FadeInOut visible={!isAnimPending} duration={500}>
                      <Text style={[styles.textStyle, styles.buttonStyle]}>
                        Join
                      </Text>
                    </FadeInOut>
                  )}
                </LinearGradient>
              </Pressable>
            </FadeInOut>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 39,
    paddingLeft: 41,
    paddingRight: 49,
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: -0.28,
  },
  sectionTitle: {
    maxWidth: 164,
    minHeight: 52,
    marginBottom: 31,
    color: Colors.black,
  },
  sectionButton: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 16,
    minWidth: 62,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    color: Colors.white,
  },
  confirmText: {
    color: Colors.black,
  },
});

export default App;
