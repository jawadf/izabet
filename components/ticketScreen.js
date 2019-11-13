import React from 'react';
import { connect } from 'react-redux';
import CheckTicketsForm from './forms/CheckTicketsForm';
import TicketNotfoundScreen from './ticketNotfoundScreen';
import TicketFoundScreen from './ticketFoundScreen';
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


class TicketScreen extends React.Component {

     static navigationOptions = {
      drawerLabel: 'Speed Ticket',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../img/slicing/speed-ticket-btn.png')}
          style={[styles.icon, { tintColor: 'red' } ]}
        />
      )
    };
    
    /** 
     * Render according to Login status
     * 
     */
    componentToRender() {

      if(this.props.user) {
        if(this.props.shouldRedirect === false) {
          return (
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
              <CheckTicketsForm />
            </ScrollView>
          </SafeAreaView>
        );
        } else if (this.props.shouldRedirect === true) {
          if(this.props.tickets) {

            if(this.props.tickets.tickets == 0) {
              return (
                <TicketNotfoundScreen navigation={this.props.navigation} />
              ) ;
            } else if(this.props.tickets.tickets != 0) {
              return (
                  <TicketFoundScreen navigation={this.props.navigation} />
                );
            }
          }
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
            <Text style={styles.btnText}>You are not logged in! If you need to check your tickets, you need to sign in or register.</Text>
            <TouchableHighlight style={styles.btn} onPress={() =>this.props.navigation.navigate('Profile')}>
              <Text style={styles.btnText}>Log in or register.</Text>
            </TouchableHighlight>
          </SafeAreaView>
        );
      }
    }
  
    render() {
      return (
       <ImageBackground source={require('../img/slicing/background.jpg')} style={{width: '100%', height: '100%'}}>
          { this.componentToRender() }
       </ImageBackground>
      );
    }
}

const mapStateToProps = state => {
    return {
         tickets: state.tickets.result,
         shouldRedirect: state.redirect.shouldRedirect,
         user: state.user.result
    };
};


export default connect(mapStateToProps)(TicketScreen);

