import React from 'react';
import { connect } from 'react-redux';
import RequestAccountForm from './forms/RequestAccountForm';
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

    // renderResult() {
    //     if(this.props.tickets){
    //         console.log(this.props.tickets.tickets)
           
    //        return JSON.stringify(this.props.tickets);
    //     }
    // }

    componentToRender() {
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

          if(this.props.tickets.tickets === 0) {
            return (
              <TicketNotfoundScreen navigation={this.props.navigation} />
            ) ;
          } else if(this.props.tickets.tickets !== 0) {
            return (
                <TicketFoundScreen navigation={this.props.navigation} />
              );
          }

        } else {
          return <></>;
        }
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
         shouldRedirect: state.redirect.shouldRedirect
    };
};


export default connect(mapStateToProps)(TicketScreen);

