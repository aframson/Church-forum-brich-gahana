import React , {Component} from 'react';
import {validateAll} from 'indicative/validator';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';
import Axios from  'axios';








class Register extends Component {


  state = {
    firstname:'',
    lname:'',
    uname:'',
    password:'',
    phone:'',
    userData:'',
    errors:{}
  }



  RegisterUser = async(data) =>{



    const rules  ={

          firstname:'required|string',
          lname:'required|string',
          uname:'required|string',
          password:'required|string|min:6',
          phone:'required|string'

    }

  const message ={
         required:(field) => `${field} is required`,
         'password.min':'password is too short'
   }


     try {
        // fron end
        await validateAll(data,rules,message)


        // back end
        const response = await Axios.post('https://react-blog-api.bahdcasts.com/api/auth/register/',{
               fname:data.firstname,
               lname:data.lname,
               uname:data.uname,
               password:data.password,
               tele:data.phone
        })
  
        this.setState({
             userData:response
        })

     } catch (error) {
           console.log('---------',error.response)

           const formattedError = {};

           error.forEach(errors => formattedError[errors.field] = errors.message);


           this.setState({
              errors:formattedError
           })
     }


  }
  










  render(){
   console.log('??????????',this.state.errors)
  return (
    <View style={styles.container}>
      <Text>Refister</Text>

      <Hoshi 
      label="First name" 
      value={this.state.firstname} 
      onChangeText={firstname => this.setState({firstname})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
      <Text style={styles.error}>{this.state.errors['firstname']}</Text>
       <Hoshi 
      label="Last Name" 
      value={this.state.lname} 
      onChangeText={lname => this.setState({lname})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
      <Text style={styles.error}>{this.state.errors['lname']}</Text>

       <Hoshi 
      label="User Name" 
      value={this.state.uname} 
      onChangeText={uname => this.setState({uname})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
      <Text style={styles.error}>{this.state.errors['uname']}</Text>

       <Hoshi 
      label="Password" 
      value={this.state.password} 
      secureTextEntry
      onChangeText={password => this.setState({password})} 
      backgroundColor={"#fff"}
      borderColor={"#b76c94"}
      borderHeight={3}
      inputPadding={16}
      />
      <Text style={styles.error}>{this.state.errors['passowrd']}</Text>

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
      <Text style={styles.error}>{this.state.errors['phone']}</Text>

     <Button title="Register" onPress={() => this.RegisterUser(this.state)} />
    </View>
  );

  }
}

const styles = StyleSheet.create({
  container: {
     padding:10
  },
  error:{
    color:'red',
    padding:5,
    fontSize:10

  }
});


export default Register;