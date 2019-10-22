import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
        container: { 
            padding: 5,
            flex: 1,
            alignItems:'center',
            justifyContent:'center',
            //backgroundColor: '#0481bf',
        },
        
        textInput: { 
            height: 40,
            width: '100%',
            color: 'white',
            borderRadius: 2,
            borderRightColor: 'white',
            borderRightWidth: 3,
            backgroundColor: 'rgba(0, 0, 0, 0.267)',
        },

        whiteText: {
            color: 'white'
        },  

        icon: {
            width: 24,
            height: 24,
        },

        headerIcon: {
            margin: 20,
            marginBottom: 40,
            alignSelf: 'flex-start',
        },

        btn: {
            borderRadius: 100,
            backgroundColor: 'transparent',
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: 2,
            height: 40,
            paddingTop: 6
        },

        btnText: {
            color: 'white',
            textAlign: 'center',
            fontWeight: '400'
            //padding: 'auto 0'
        },

        carFormBackground: {
            width: '100%',
            height: '100%',
            backgroundColor: '#037cb8be'
        }

    });