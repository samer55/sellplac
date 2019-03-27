import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  Image,
  Slider
} from 'react-native';
import Masonry from 'react-native-masonry';

// list of images
let data = [
                // Can be used with different image object fieldnames.
                // Ex. source, source.uri, uri, URI, url, URL
                { uri: "https://i.postimg.cc/76tHdWdh/Whats-App-Image-2019-03-24-at-8-40-07-PM.jpg" },
                { uri: "https://i.postimg.cc/rp8qmTLz/Whats-App-Image-2019-03-24-at-8-40-08-PM.jpg" },
                { uri: "https://i.postimg.cc/Hnfps7pC/Whats-App-Image-2019-03-24-at-8-40-08-PM-1.jpg" },
                { uri: "https://i.postimg.cc/P5ntgZ3W/Whats-App-Image-2019-03-24-at-8-40-08-PM-2.jpg" },
                { uri: "https://i.postimg.cc/t4dXpTwL/Whats-App-Image-2019-03-24-at-8-40-09-PM.jpg" },
                { uri: "https://i.postimg.cc/SKDkYPyd/Whats-App-Image-2019-03-24-at-8-40-09-PM-1.jpg" },
                { uri: "https://i.postimg.cc/X7Cj1x8N/Whats-App-Image-2019-03-24-at-8-40-10-PM-1.jpg" },
                { uri: "https://i.postimg.cc/JnF8PBHB/Whats-App-Image-2019-03-24-at-8-40-12-PM-1.jpg" },
                { uri: "https://i.postimg.cc/QdqHS089/Whats-App-Image-2019-03-24-at-8-40-13-PM.jpg" },
                { uri: "https://i.postimg.cc/jdPWnRBh/Whats-App-Image-2019-03-24-at-8-40-13-PM-1.jpg" },
                { uri: "https://i.postimg.cc/MpwnyhSJ/Whats-App-Image-2019-03-24-at-8-40-13-PM-2.jpg" },
                { uri: "https://i.postimg.cc/76tHdWdh/Whats-App-Image-2019-03-24-at-8-40-07-PM.jpg" },
                { uri: "https://i.postimg.cc/76tHdWdh/Whats-App-Image-2019-03-24-at-8-40-07-PM.jpg" },
                { uri: "https://i.postimg.cc/76tHdWdh/Whats-App-Image-2019-03-24-at-8-40-07-PM.jpg" },
                { uri: "https://i.postimg.cc/76tHdWdh/Whats-App-Image-2019-03-24-at-8-40-07-PM.jpg" },

            ];


export default class SettingsScreen extends Component {
  constructor() {
      super();

      this.state = {
        columns: 2,
        padding: 5,
        data
      };
  }



  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>



        <View style={{flex: 1, flexGrow: 10, padding: 6}}>
          <Masonry
            sorted
            imageContainerStyle={{borderRadius:20,}}
            bricks={this.state.data}
            columns={this.state.columns}
             />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    flex: 1,
    flexBasis: '10%'
  },
  header: {
    flexGrow: 1
  },
  buttonGroup: {
    flexGrow: 1
  },
  slider: {
    flexGrow: 1
  },
  button: {
    backgroundColor: '#dbdcdb',
    padding: 10,
    marginRight: 4,
    borderRadius: 4,
    borderBottomColor: '#7b7b7b',
    borderBottomWidth: 5
  },
  buttonText: {
    color: '#404040'
  },
  center: {
    marginTop: 30,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerTop: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userPic: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10
  },
  userName: {
    fontSize: 20
  }
});
