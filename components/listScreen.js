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

    
    renderResult() {

      if(this.props.vehicles){
        console.log(this.props.vehicles)
       
       return this.props.vehicles.map(e => (
         <View key={e.vehicle_id} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, borderBottomColor: 'white', borderBottomWidth: 2, marginBottom: 25  }} >
          <Text style={{fontSize: 18, color: 'white' }}>{e.vehicle_name}</Text>
          <Text style={{fontSize: 18, color: 'white' }}>{e.vehicle_id}</Text>
          <Text style={{fontSize: 18, color: 'white' }}>{e.vehicle_code}</Text>
         </View>
       ));
    }

    }
  
    render() {
      return (
       <ImageBackground source={require('../img/slicing/background.jpg')} style={{width: '100%', height: '100%'}}>
        <SafeAreaView style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', display: 'flex'}} >
          <TouchableHighlight style={styles.headerIcon} onPress={() =>this.props.navigation.toggleDrawer()}>
            <Image
                source={require('../img/slicing/menu-button.png')}
                style={{ height: 25, width: 25 }}
            />
          </TouchableHighlight>       
          <ScrollView>
          { this.renderResult() } 
            
          </ScrollView>
        </SafeAreaView>
        <TouchableHighlight style={styles.btn} onPress={() => this.props.navigation.navigate('AddCarForm')}>
            <Text style={styles.btnText}>Add new car number</Text>  
        </TouchableHighlight>

       </ImageBackground>
      );
    }
}

const mapStateToProps = state => {
    return {
         vehicles: Object.values(state.vehicles)
    };
};


export default connect(mapStateToProps, { getUserVehicles })(ListScreen);
