import React from 'react';
import { connect } from 'react-redux';
import AddCarForm from './forms/AddCarForm';
import { getUserVehicles, deleteVehicle } from '../actions';
import styles from './style/styles';
import { 
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    Image,
    ImageBackground
} from 'react-native';

class ListScreen extends React.Component {

    componentDidMount() {
      // Call action creator to fetch all vehicles for this "device_id" and "type" 
      // the result should be json that has the name and number
      // render their values on the screen 
      if(this.props.user) {
        this.props.getUserVehicles(this.props.user[0].id);
      }
    }
    
     componentDidUpdate() {
       // Update the list every time we add a new car
       if(this.props.user) {
         this.props.getUserVehicles(this.props.user[0].id);
       }
     }
    
    state = {
      buttonPressed: false,
      refresh: false
    }

    static navigationOptions = {
        drawerLabel: 'My List',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/slicing/my-list-btn.png')}
            style={[styles.icon, { tintColor: tintColor } ]}
          />
        )
    };

    componentToRender() {
      if(this.props.user) {
        if(!this.state.buttonPressed) {
        return (
          <>
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
            <TouchableHighlight style={styles.btn} onPress={() => this.setState({ buttonPressed: true })}>
              <Text style={styles.btnText}>Add new car number</Text>  
            </TouchableHighlight>
          </>
          );
        } else if (this.state.buttonPressed) {
          return <AddCarForm onButtonPress={() => this.setState({ buttonPressed: false })}  />;
        }
      } else {
        return (
          <SafeAreaView style={styles.container}>
            <TouchableHighlight style={styles.headerIcon} onPress={() =>this.props.navigation.toggleDrawer()}>
              <Image
                  source={require('../img/slicing/menu-button.png')}
                  style={{ height: 25, width: 25 }}
                />
            </TouchableHighlight>       
            <Text style={styles.btnText}>You are not logged in! To see your list of vehicles, you need to sign in or register.</Text>
            <TouchableHighlight style={styles.btn} onPress={() =>this.props.navigation.navigate('Profile')}>
              <Text style={styles.btnText}>Log in or register.</Text>
            </TouchableHighlight>
          </SafeAreaView>
        );
      }

    }
    
    renderResult() {
      if(this.props.vehicles){

       return this.props.vehicles.map(e => (
         <View key={e.vehicle_id} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, borderBottomColor: 'white', borderBottomWidth: 2, marginBottom: 25  }} >
          <Text style={{fontSize: 18, color: 'white' }}>{e.vehicle_name}</Text>
          <Text style={{fontSize: 18, color: 'white' }}>{e.vehicle_id}</Text>
          <Text style={{fontSize: 18, color: 'white' }}>{e.vehicle_code}</Text>
          <TouchableHighlight onPress={() => this.onDeletePress(e.id)} >
            <Image
              source={require('../img/slicing/X-close-overlay.png')}
              style={{ height: 10, width: 11 }}
            />
          </TouchableHighlight>
         </View>
       ));
      }
    }

    onDeletePress = (id) => {
      this.props.deleteVehicle(id, this.props.user[0].id);
      this.setState({ refresh: !this.state.refresh });

    }
  
    render() {
      return (
       <ImageBackground source={require('../img/slicing/background.jpg')} style={{width: '100%', height: '100%'}}>
         {this.componentToRender()}
       </ImageBackground>
      );
    }
}

const mapStateToProps = state => {
    return {
         vehicles: state.vehicles.list,
         user: state.user.result,
         refresh: state.redirect.shouldRedirect
    };
};


export default connect(mapStateToProps, { getUserVehicles, deleteVehicle })(ListScreen);