import Constants, { ExecutionEnvironment } from 'expo-constants';

export const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

let firebase;
try {
  ({ firebase } = require('@react-native-firebase/analytics'));
} catch {
  console.info('Not using firebase native modules');
}

export const logEvent = async (name, params) => {
  if (isExpoGo) {
    console.info('set user proprities for analytics', name, params);
  } else {
    await firebase.analytics().logEvent(name, params);
  }
};

// export const setAnalyticsCollectionEnabled = async (enabled) => {
//   if (isExpoGo) {
//     console.info('set analytics collection enabled', enabled);
//   } else {
//     await firebase.analytics().setAnalyticsCollectionEnabled(enabled);
//   }
// };

// export const setUserId = async (userId) => {
//   if (isExpoGo) {
//     console.info('set userid for analytics');
//   } else {
//     await firebase.analytics().setUserId(userId);
//   }
// };

// export const setUserProperties = async (user) => {
//   if (isExpoGo) {
//     console.info('set user proprities for analytics', user);
//   } else {
//     await firebase.analytics().setUserProperties(user);
//   }
// };