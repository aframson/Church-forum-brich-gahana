import React , {Component} from 'react';
import {validateAll} from 'indicative/validator';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';
// import Axios from 'axios';
class Register extends Component {


  state = {
    fname:'',
    lname:'',
    uname:'',
    password:'',
    cpassword:'',
    phone:''
  }



  RegisterUser = async(data) =>{



    const rules  ={

          fname:'required|string',
          lname:'required|string',
          uname:'required|string',
          password:'required|string|min:6|confirmed',
          phone:'required|string'

    }

  const message ={
         required:(field) => `${field} is required`,
         'password.confirmed':'the passwords do not match',
         'password.min':'password is too short'
  }


     try {
      
        await validateAll(data,rules,message)




     } catch (error) {
       
     }


  }
  










  render(){

  return (
    <View style={styles.container}>
      <Text>Refister</Text>

      <Hoshi 
      label="First name" 
      value={this.state.fname} 
      onChangeText={fname => this.setState({fname})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
       <Hoshi 
      label="Last Name" 
      value={this.state.lname} 
      onChangeText={lname => this.setState({lname})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
       <Hoshi 
      label="User Name" 
      value={this.state.uname} 
      onChangeText={uname => this.setState({uname})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
       <Hoshi 
      label="Password" 
      value={this.state.passowrd} 
      secureTextEntry
      onChangeText={passowrd => this.setState({passowrd})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
      <Hoshi 
      label="Confirm Password" 
      value={this.state.cpassowrd} 
      secureTextEntry
      onChangeText={cpassowrd => this.setState({cpassowrd})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
       <Hoshi 
      label="Telephone" 
      value={this.state.phone} 
      onChangeText={phone => this.setState({phone})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      style={{marginButtom:45}}
      />

     <Button title="Register" onPress={() => this.RegisterUser(this.state)} />
    </View>
  );

  }
}

const styles = StyleSheet.create({
  container: {
     padding:10
  },
});


export default Register;