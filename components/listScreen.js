import React from 'react';
import { connect } from 'react-redux';
import { getUserVehicles } from '../actions';
import styles from './style/styles';
import { 
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    Image,
    Button,
    ImageBackground
} from 'react-native';

class ListScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'My List',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/slicing/my-list-btn.png')}
            style={[styles.icon, { tintColor: tintColor } ]}
          />
        )
    };

    componentDidMount() {
      // Call action creator to fetch all vehicles for this "device_id" and "type" 
      // the result should be json that has the name and number
      // render their values on the screen 
      this.props.getUserVehicles();

    }

    handlePress() {

    }

    renderResult() {

    }
  
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
            <TouchableHighlight style={styles.btn} onPress={() => this.props.navigation.navigate('AddCarForm')}>
                <Text style={styles.btnText}>Add new car number</Text>  
            </TouchableHighlight>
          </ScrollView>
        </SafeAreaView>
       </ImageBackground>
      );
    }
}

const mapStateToProps = state => {
    return {
         test: state.test.result
    };
};


export default connect(mapStateToProps, { getUserVehicles })(ListScreen);
