import React from 'react';
import { connect } from 'react-redux';
import { redirectFalse } from '../actions';
import styles from './style/styles';
import AddCarNameForm from './forms/AddCarNameForm';
import { 
    View,
    Text,
    SafeAreaView, 
    ScrollView,
    TouchableHighlight,
    Image,
} from 'react-native';

class TicketNotfoundScreen extends React.Component {
    state = {
      buttonPressed: false
    }

    componentDidMount() {
      console.log(this.props.tickets);
    }

    componentToRender() {
      if(!this.state.buttonPressed) {
        return (
          <ScrollView>
            <TouchableHighlight style={styles.headerIcon} onPress={() => this.props.redirectFalse()}>
              <Image
                  source={require('../img/slicing/back-btn.png')}
                  style={{ height: 25, width: 25 }}
                />
            </TouchableHighlight>  
            <Text style={styles.ticketHeadingText} >Vehicle number</Text>
            <Text style={styles.ticketHeadingNumber}>{this.props.tickets.currentVehicle[0].vehicle_number } / {this.props.tickets.currentVehicle[0].vehicle_code }</Text>
            <Text style={styles.ticketNoViolationText}>No Violation Found</Text>
            <View style={styles.ticketHorizontalRule} />
            <View style={styles.ticketBottomView}>
            <Text style={styles.ticketBottomText}>Click on the button below to add this car to 'My list' where you receive a notification in case of any violation ticket.</Text>
            <TouchableHighlight style={styles.btn} onPress={() => this.setState({ buttonPressed: true })} >
                <Text style={styles.btnText}>Add car to list</Text>  
            </TouchableHighlight>
            </View>
          </ScrollView>
        );
      } else if (this.state.buttonPressed) {
        const currentNumber = this.props.tickets.currentVehicle[0].vehicle_number;
        const currentCode = this.props.tickets.currentVehicle[0].vehicle_code;
        return <AddCarNameForm currentNumber={currentNumber} currentCode={currentCode} onButtonPress={() => this.setState({ buttonPressed: false })}   />;
      }
      
    }
  
    render() {
      return (
        <SafeAreaView style={styles.container}>
          {this.componentToRender()}
        </SafeAreaView>
       
      );
    }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets.result
  };
};

export default connect(mapStateToProps ,{ redirectFalse })(TicketNotfoundScreen);

