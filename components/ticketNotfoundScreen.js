import React from 'react';
import { connect } from 'react-redux';
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

class TicketNotfoundScreen extends React.Component {
  
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <TouchableHighlight style={styles.headerIcon} onPress={() => this.props.redirectFalse()}>
              <Image
                  source={require('../img/slicing/back-btn.png')}
                  style={{ height: 25, width: 25 }}
                />
            </TouchableHighlight>  
            <Text style={styles.whiteText}>Vehicle number: NUM_TO_REPLACE </Text>
            <Text style={styles.whiteText}>No Violation Found</Text>
            <Text style={styles.whiteText}>Click on the button below to add this car to 'My list' where you receive a notification in case of any violation ticket.</Text>
            <TouchableHighlight style={styles.btn}>
                <Text style={styles.btnText}>Add to list</Text>  
            </TouchableHighlight>
          </ScrollView>
        </SafeAreaView>
       
      );
    }
}

export default connect(null,{ redirectFalse })(TicketNotfoundScreen);

