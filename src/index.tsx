import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-wannads' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Wannads = NativeModules.Wannads
  ? NativeModules.Wannads
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function showOfferWall(
  apiKey: string,
  apiSecret: string,
  userId: string
): Promise<number> {
  return Wannads.showOfferWall(apiKey, apiSecret, userId);
}
