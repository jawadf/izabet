import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerAction } from '../../actions';
import styles from '../style/styles';
import { 
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ImageBackground,
    Image
} from 'react-native';

class Form extends React.Component {

    renderError({error, touched}) {
        if(error && touched) {
            return <Text>{error}</Text>;
        }
    }

    renderInput = ({input, name, meta, placeholder}) => {
        const renderField = (name) => {
                return <TextInput  {...input} placeholderTextColor={'#fff'}  autoComplete="off" className={name} style={styles.textInput} placeholder={placeholder} />;
        };

        return (
            <>
                <Text>{name}</Text>
                {renderField(name)}
                {this.renderError(meta)}
            </>
        );
    }

    handlePress = (formValues) => {
        this.props.registerAction(formValues);
        this.props.onButtonPress(); 
    }
  
    render() {
      return (
        <ImageBackground source={require('../../img/slicing/background.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.carFormBackground}>
            <TouchableHighlight style={styles.headerIcon} onPress={() => this.props.onButtonPress()}>
              <Image
                  source={require('../../img/slicing/X-close-overlay.png')}
                  style={{ height: 25, width: 25 }}
                />
            </TouchableHighlight>
            <View>
                <Text style={styles.whiteText}>Register form</Text>
                <Field name="email" component={this.renderInput} placeholder="Enter your email" />
                <Field name="password" component={this.renderInput} placeholder="Enter your password" />
                <Text> </Text>
                <TouchableHighlight onPress={this.props.handleSubmit(this.handlePress)} style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>  
                </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      );
    }
};

const validate = formValues => {
    const errors = {};
    if(!formValues.email) {
      errors.email = 'Must enter a email';
    }
  
    if (!formValues.password) {
      errors.password = 'Must enter a password';
    }
    
    return errors;
};

const RegisterForm = connect(null, { registerAction })(Form);
  
export default reduxForm({
    form: 'RegisterForm',
    validate
})(RegisterForm);