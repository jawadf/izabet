import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addVehicle, redirectTrue } from '../../actions';
import styles from '../style/styles';
import { 
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Image,
    ImageBackground
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
        this.props.addVehicle(formValues);
       // this.props.navigation.navigate('List');
    }
  
    render() {
      return (
        <ImageBackground source={require('../../img/slicing/background.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.carFormBackground}>
          <TouchableHighlight style={styles.headerIcon} onPress={() => this.props.navigation.navigate('List')}>
              <Image
                  source={require('../../img/slicing/X-close-overlay.png')}
                  style={{ height: 25, width: 25 }}
                />
            </TouchableHighlight>
            <Text style={styles.whiteText}>Add a new car to your list</Text>
            <Field name="vehicle_number" component={this.renderInput} placeholder="Enter your car number" />
            <Field name="vehicle_code" component={this.renderInput} placeholder="Choose your plate code" />
            <Field name="vehicle_name" component={this.renderInput} placeholder="Enter your car name" />
            <Text> </Text>
            <TouchableHighlight onPress={this.props.handleSubmit(this.handlePress)} style={styles.btn}>
              <Text style={styles.btnText}>Add to list</Text>  
            </TouchableHighlight>
          </View>
        </ImageBackground>
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

    if(!formValues.vehicle_name) {
      errors.vehicle_name = 'Must enter a vehicle_name';
    } 
    
    return errors;
};


const AddCarForm = connect(null, { addVehicle, redirectTrue })(Form);
  
export default reduxForm({
    form: 'AddCarForm',
    validate
})(AddCarForm);