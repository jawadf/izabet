import React from 'react';
import { connect } from 'react-redux';
import { Table, Row, Rows } from 'react-native-table-component';
import AddCarNameForm from './forms/AddCarNameForm';
import { redirectFalse } from '../actions';
import styles from './style/styles';
import { 
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    Image,
} from 'react-native';

class TicketFoundScreen extends React.Component {

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
          <Table borderStyle={{ borderWidth: 2, borderColor: '#fff'}} style={styles.ticketsTable}>
            <Row textStyle={{color: 'white', margin: 5}}  data={['Traffic Brigade Of', 'Violation Date']} />
            <Rows textStyle={{color: 'white', margin: 5}} data={this.renderData()}  />
          </Table>
          <View style={styles.ticketBottomView}>
          <Text style={styles.ticketBottomText}>Click on the button below to add this car to 'My list' where you receive a notification in case of any violation ticket.</Text>
          <TouchableHighlight style={styles.btn} onPress={() => this.setState({ buttonPressed: true })}>
            <Text style={styles.btnText}>Add car to list</Text>  
          </TouchableHighlight>
          </View>  
        </ScrollView>
      ); 
    } else if (this.state.buttonPressed) {
      const currentNumber = this.props.tickets.currentVehicle[0].vehicle_number;
      const currentCode = this.props.tickets.currentVehicle[0].vehicle_code;
      return <AddCarNameForm currentNumber={currentNumber} currentCode={currentCode} onButtonPress={() => this.setState({ buttonPressed: false })}  />;
    }
  }

    renderData() {
      const tableData = [];

       if(this.props.tickets.tickets) {
         this.props.tickets.tickets.map(el => (
           tableData.push([el.location, el.create_date])
          ));
       } 

      return tableData;
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


export default connect(mapStateToProps , { redirectFalse })(TicketFoundScreen);

