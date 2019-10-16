import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { updateToken } from '../../actions';
import { 
    Text,
    TextInput,
    Button,
    View
    } from 'react-native';

class Form extends React.Component {

    renderError({error, touched}) {
        if(error && touched) {
            return <Text>{error}</Text>;
        }
    }

    renderInput = ({input, label, meta, type}) => {
        const renderField = (label) => {
                return <TextInput {...input} autoComplete="off" className={label} style={{height: 40, width: 200, backgroundColor: '#eee'}}  />;
        };

        return (
            <>
                <Text>{label}</Text>
                {renderField(label)}
                {this.renderError(meta)}
            </>
        );
    }

    handlePress = (formValues) => {
        this.props.updateToken(formValues);
    }
  
    render() {
      return (
          <View>
            <Field name="type" component={this.renderInput} label="type" />
            <Field name="device_id" component={this.renderInput} label="device_id" />
            <Field name="salt" component={this.renderInput} label="salt" />
            <Field name="token" component={this.renderInput} label="token" />
            <Text> </Text>
            <Button title="Update Token" onPress={this.props.handleSubmit(this.handlePress)} />    
          </View>
      );
    }

};

const validate = formValues => {
    const errors = {};
    if(!formValues.type) {
      errors.type = 'Must enter a type';
    }
  
    if (!formValues.device_id) {
      errors.device_id = 'Must enter a device_id';
    }

    if(!formValues.salt) {
      errors.salt = 'Must enter a salt';
    } 
  
  
    if (!formValues.token) {
      errors.token = 'Must enter a token';
    }
    
    return errors;
};

const UpdateTokenForm = connect(null, { updateToken })(Form);
  
export default reduxForm({
    form: 'UpdateTokenForm',
    validate
})(UpdateTokenForm);