import React, { useLayoutEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import { ExStyle } from './StylePage';


const AddItemScreen = ({ route, navigation }) => {
  const { addItem } = route.params;
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [selectimage, setSelectImage] = useState('');

  const image1 = "https://hips.hearstapps.com/hmg-prod/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg?crop=0.668xw:1.00xh;0.248xw,0&resize=980:*";

  const choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(selectimage => {
      console.log(selectimage);
      setSelectImage(selectimage.path); // Set the image URI to the state
    }).catch(error => {
      console.log('Error picking image: ', error);
    });
  };

  const handleAddItem = () => {
    const newItem = {
      name: "Gitixa Chauhan",
      image1,
      desc,
      image: selectimage,
      id: `${Date.now()}`,
      likes: 0,
      comments: 0,
      isLiked: false,
      isCommented: false,
      time: "Just now"
    };
    addItem(newItem);
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleAddItem} style={ExStyle.headerButton}>
          <Text style={ExStyle.headerButtonText}>Post</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleAddItem]);

  return (
    <View style={ExStyle.container}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Image source={{ uri: image1 }} style={ExStyle.imageSty} />
        <TextInput
          style={{padding: 10, flex: 1}}
          placeholder="What's happening?"
          value={desc}
          onChangeText={setDesc}
        />
      </View>
      <View style={{position: 'absolute',bottom: 50, left: 20}}>
             <TouchableOpacity
            //  style={styles.buttonStyle1}
             onPress={choosePhotoFromGallery}
            >
           <FontAwesome style={ExStyle.icon} name="photo" size={26} color={'#007AFF'} />
              
             </TouchableOpacity>
             
       
        </View>
        
        {selectimage ? (
        <Image source={{ uri: selectimage }} style={ExStyle.selectimage} />
      ) : (
        <Text></Text>
      )}
    </View>
  );
};



export default AddItemScreen;
