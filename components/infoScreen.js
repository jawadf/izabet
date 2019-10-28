import React from 'react';
import { connect } from 'react-redux';
import { requestAccount } from '../actions';
import styles from './style/styles';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    Image,
    Button,
    ImageBackground
} from 'react-native';

class InfoScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Info',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/slicing/info-btn.png')}
            style={[styles.icon, { tintColor: tintColor } ]}
          />
        )
    };

    render() {
        return (
              <ImageBackground source={require('../img/slicing/background.jpg')} style={{width: '100%', height: '100%'}}>
              <SafeAreaView style={styles.container}>
                <TouchableHighlight style={styles.headerIcon} onPress={() =>this.props.navigation.toggleDrawer()}>
                  <Image
                      source={require('../img/slicing/menu-button.png')}
                      style={{ height: 25, width: 25 }}
                    />
                </TouchableHighlight>       
                <ScrollView>
                  <Image
                    source={require('../img/slicing/logo-homepage.png')}
                    style={{ height: 55, width: 200 }}
                  />
                  <View style={{marginTop: 45}}>
                    <Text style={{color: 'white', fontSize:17, textAlign: 'center'}}>Mobile app powered by</Text>
                    <Image
                      source={require('../img/icons/SYNC-logo.png')}
                      style={{ height: 44, width: 170 }}
                    />
                  </View>
                </ScrollView>
              </SafeAreaView>
            </ImageBackground>
            );
        }
    }
   
      

export default connect(null, { requestAccount })(InfoScreen);