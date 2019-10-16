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

class ListScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'My List',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/slicing/my-list-btn.png')}
            style={[styles.icon, { tintColor: tintColor } ]}
          />
        )
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>List Screen</Text>
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

export default connect(null, { requestAccount })(ListScreen);