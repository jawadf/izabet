import React from 'react';
import { connect } from 'react-redux';
import RequestAccountForm from './forms/RequestAccountForm';
import CheckTicketsForm from './forms/CheckTicketsForm';
import TicketNotfoundScreen from './ticketNotfoundScreen';
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

    renderResult() {
        if(this.props.test){
            console.log(this.props.test)
           
           return JSON.stringify(this.props.test);
        }
    }

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
        return (
               <TicketNotfoundScreen />
        ) ;
      }
    }
  
    render() {
      return (
       <ImageBackground source={require('../img/slicing/background.jpg')} style={{width: '100%', height: '100%'}}>
        <Text>{ this.renderResult() } </Text> 
          {this.componentToRender()}
       </ImageBackground>
      );
    }
}


const mapStateToProps = state => {
    return {
         test: state.test.result,
         shouldRedirect: state.redirect.shouldRedirect
    };
};


export default connect(mapStateToProps)(TicketScreen);

