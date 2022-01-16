import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { showOfferWall } from 'react-native-wannads';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="start"
        onPress={() => showOfferWall('API key', 'API secret', 'User Id')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
