import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { requestAccount } from '../../actions';
import { 
    Text,
    TextInput,
    Button,
    View
    } from 'react-native';

class ReqForm extends React.Component {

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
        this.props.requestAccount(formValues);
    }
  
    render() {
      return (
          <View>
            <Field name="type" component={this.renderInput} label="type" />
            <Field name="device_id" component={this.renderInput} label="device_id" />
            <Text> </Text>
            <Button title="Request Account" onPress={this.props.handleSubmit(this.handlePress)} />    
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
    
    return errors;
};

const RequestAccountForm = connect(null, { requestAccount })(ReqForm);
  
export default reduxForm({
    form: 'RequestAccountForm',
    validate
})(RequestAccountForm);