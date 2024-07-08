import { View, TextInput } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ExStyle } from "./StylePage";

export const SearchPage = () => {
    return(
        <View style={ExStyle.SearchBar}>
        <FontAwesome name="search" size={20} color={'grey'} />
        <TextInput
          style={{flex: 1, fontSize: 18, marginLeft: 10}}
          placeholder="Search here.."
          
        />
       
      </View>
    )
};

