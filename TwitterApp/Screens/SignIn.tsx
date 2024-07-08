import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { ExStyle } from "./StylePage";

export const SignIn = (props) => {

const [name, setname] = useState('');
const [password, setPassword] = useState('');

const checkData = () => {

    if (name === ""){
       alert("Please Enter Your Name")
    }
    else if (password === ""){
       alert("please Enter your password")
    }
    else{
        props.navigation.navigate("HomePage")
    }
}

    return(
        <View style={{flex: 1, marginTop: 100}}>
            <Text style={{fontSize: 20, fontWeight: "500", padding: 5}}>UserName:</Text>
            <TextInput style={ExStyle.TextInputStyle} 
            placeholder="Enter Your Name"
            onChangeText={(name) => setname(name)}
            />

            <Text style={{fontSize: 20, fontWeight: "500", padding: 5}}>Password:</Text>
            <TextInput style={ExStyle.TextInputStyle} 
            placeholder="Enter Your Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            />

          <View style={{justifyContent: "center", alignItems: "center"}}>
             <TouchableOpacity
             style={ExStyle.buttonStyle1}
             onPress={()=> {
             checkData();
            }}
            >
           <Text style = {{color: '#fff', fontSize: 20}}>Sign In</Text>
              
             </TouchableOpacity>
             </View> 


<View style={{alignItems:"center", marginTop: 300,  justifyContent:"center"}}>
            <Text style={{fontSize: 20 }}>-----Don't have an account??----- </Text>
            <TouchableOpacity onPress={()=> {
             props.navigation.navigate("SignUp")
             }}
             >
             <Text  style={ExStyle.text2} >SignUp</Text>
             </TouchableOpacity>
          </View>
        </View>
    )
}

