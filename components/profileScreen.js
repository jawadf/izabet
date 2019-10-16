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

class ProfileScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/slicing/speed-ticket-btn.png')}
            style={[styles.icon, { tintColor: tintColor } ]}
          />
        )
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Profile Screen</Text>
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

export default connect(null, { requestAccount })(ProfileScreen);