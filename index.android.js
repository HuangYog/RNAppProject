import React, {Component} from "react";
import {AppRegistry,Image,StyleSheet, View} from "react-native";

class RNAppProject extends Component {
  render() {
    var icon = false ? require('./img/2016-07-1317-16-35.png'): require('./img/2016-07-1317-19-10.png');
    return (
        <View>
          <Image style={styles.img} source = {require('./img/2016-07-1317-16-35.png')} />
          <Image style={styles.img} source = {icon}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  img: {
    width: 100,
    height:300
  }
});
AppRegistry.registerComponent('RNAppProject', () => RNAppProject);
