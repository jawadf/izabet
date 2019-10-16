import React from 'react';
import { connect } from 'react-redux';
import { requestAccount } from '../actions';
import { 
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native';

class InfoScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Info',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/slicing/info-btn.png')}
            style={[styles.icon, { tintColor: tintColor } ]}
          />
        )
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Info Screen</Text>
                <Button
                    onPress={() =>this.props.navigation.toggleDrawer()}
                    title="Open Drawer"
                />
            </View>
            );
        }
    }


const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });  

   
      

export default connect(null, { requestAccount })(InfoScreen);