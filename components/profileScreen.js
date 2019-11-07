import React from 'react';
import { connect } from 'react-redux';
import { logoutAction } from '../actions';
import LoginForm from './forms/LoginForm';
import styles from './style/styles';
import axios from '../axios/axios';
import { 
    View,
    Text,
    Image,
    TouchableHighlight,
    SafeAreaView,
    ScrollView,
    ImageBackground
} from 'react-native';

class ProfileScreen extends React.Component {

    state = {
      buttonPressed: false,
      refresh: false,
      register: false
    }

    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/slicing/speed-ticket-btn.png')}
            style={[styles.icon, { tintColor: tintColor } ]}
          />
        )
    }; 

    componentToRender() {
      if(!this.state.buttonPressed && !this.state.register) {
       return (
         <>
          <SafeAreaView style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', display: 'flex'}} >
            <TouchableHighlight style={styles.headerIcon} onPress={() =>this.props.navigation.toggleDrawer()}>
              <Image
                  source={require('../img/slicing/menu-button.png')}
                  style={{ height: 25, width: 25 }}
              />
            </TouchableHighlight>  
            <Text style={styles.whiteText}>Profile Screen</Text>    
            <ScrollView>
            { this.renderResult() }
            </ScrollView> 
          </SafeAreaView>
          <TouchableHighlight style={styles.btn} onPress={() => this.setState({ register: true })}>
            <Text style={styles.btnText}>Register</Text>  
          </TouchableHighlight>
        </>
        );
      } else if (this.state.buttonPressed) {
        return <LoginForm onButtonPress={() => this.setState({ buttonPressed: false })} />;
      } else if (this.state.register) {
      return <LoginForm onButtonPress={() => this.setState({ register: false })}  />;
      }
    }

    renderResult() {
      if(!this.props.user) {
        return (
        <> 
          <Text style={styles.whiteText}>You are not logged in. Login or Register!</Text>
          <TouchableHighlight style={styles.btn} onPress={() => this.setState({ buttonPressed: true })}>
              <Text style={styles.btnText}>Login</Text>  
          </TouchableHighlight>
        </>
        );

      } else { 
        axios.defaults.headers.common['X-AUTH-TOKEN'] = this.props.user[0].token;
        return (
         <View >
           <Text style={styles.whiteText}>You are now logged in as  {JSON.stringify(this.props.user[0].email)}</Text>
           <TouchableHighlight style={styles.btn} onPress={() => this.logout()}>
            <Text style={styles.btnText}>Logout</Text>  
          </TouchableHighlight>
         </View>
       );
      }
    }

    logout() {
      this.props.logoutAction();
      axios.defaults.headers.common['X-AUTH-TOKEN'] = null;
      this.setState({ refresh: !this.state.refresh })
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
       user: state.user.result
  };
};


export default connect(mapStateToProps, {  logoutAction })(ProfileScreen);