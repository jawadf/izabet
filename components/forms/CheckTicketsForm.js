import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { checkTickets } from '../../actions';
import styles from '../style/styles';
import { 
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Picker
    } from 'react-native';

class Form extends React.Component {

    renderError({error, touched}) {
        if(error && touched) {
            return <Text>{error}</Text>;
        }
    }

    renderInput = ({input, name, meta, placeholder}) => {
        const renderField = (name) => {
                return <TextInput {...input} placeholderTextColor={'#fff'}  autoComplete="off" className={name} style={styles.textInput} placeholder={placeholder} />;
        };

        return (
            <>
                <Text>{name}</Text>
                {renderField(name)}
                {this.renderError(meta)}
            </>
        );
    }

    renderPicker = ({input, name, meta, placeholder}) => {
        const renderField = (name) => {
                return (
                <Picker 
                    {...input} 
                    placeholderTextColor={'#fff'}
                    selectedValue="Z"
                    autoComplete="off" 
                    className={name} 
                    style={styles.textInput} 
                    placeholder={placeholder} 
                >
                    <Picker.Item label="Z" value="Z" />
                    <Picker.Item label="G" value="G" />
                </Picker>
                    
                );
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
        this.props.checkTickets(formValues);
    }
  
    render() {
      return (
          <View>
            <Field name="vehicle_number" component={this.renderInput} placeholder="Enter your car number" />
            <Field name="vehicle_code" component={this.renderInput} placeholder="Choose your plate code" />
            <Text> </Text>
            <TouchableHighlight onPress={this.props.handleSubmit(this.handlePress)} style={styles.btn}>
              <Text style={styles.btnText}>Check Ticket</Text>  
            </TouchableHighlight>
          </View>
      );
    }

};

const validate = formValues => {
    const errors = {};
    if(!formValues.vehicle_number) {
      errors.vehicle_number = 'Must enter a vehicle_number';
    }
  
    if (!formValues.vehicle_code) {
      errors.vehicle_code = 'Must enter a vehicle_code';
    }

    if(!formValues.salt) {
      errors.salt = 'Must enter a salt';
    } 
  
  
    if (!formValues.token) {
      errors.token = 'Must enter a token';
    }
    
    return errors;
};

const CheckTicketsForm = connect(null, { checkTickets })(Form);
  
export default reduxForm({
    form: 'CheckTicketsForm',
    validate
})(CheckTicketsForm);