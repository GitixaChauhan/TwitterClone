import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState, useLayoutEffect } from 'react';
import { UserData } from "./UserData";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ExStyle } from "./StylePage";

export const HomePage = ({ navigation }) => {
  const [data, setData] = useState(UserData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Image source={require("./Images/flower.jpg")}
            style={ExStyle.headerImage} />
      ),
    });
  });

  const handleLike = (id) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, likes: item.isLiked ? item.likes - 1 : item.likes + 1, isLiked: !item.isLiked };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleComment = (id) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, comments: item.isCommented ? item.comments - 1 : item.comments + 1, isCommented: !item.isCommented };
      }
      return item;
    });
    setData(updatedData);
  };

  const addItem = (item) => {
    setData([item, ...data]);
  };

  const renderItem = ({ item }) => (
    <View style={ExStyle.item}>
      <View style={ExStyle.row}>
        <Image source={{ uri: item.image1 }} style={ExStyle.image} />
        <Text style={ExStyle.title}>{item.name}</Text>
        <Text style={ExStyle.time}>{item.time}</Text>
      </View>
      <Text style={ExStyle.desc}>{item.desc}</Text>
      {item.image ? (
        <Image source={{ uri: item.image }} style={ExStyle.dynamicImage} />
      ) : null}
      <View style={ExStyle.iconRow}>
        <TouchableOpacity onPress={() => handleComment(item.id)} style={ExStyle.iconContainer}>
          <MaterialIcons style={ExStyle.icon} name="comment" size={25} color={item.isCommented ? 'blue' : 'black'} />
          <Text>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Add your menu action here */ }}>
          <AntDesign style={ExStyle.icon} name="menu-fold" size={22} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLike(item.id)} style={ExStyle.iconContainer}>
          <AntDesign style={ExStyle.icon} name="heart" size={25} color={item.isLiked ? 'red' : 'black'} />
          <Text>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Add your mail action here */ }}>
          <Entypo style={ExStyle.icon} name="mail" size={26} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEmptyComponent = () => (
    <View style={ExStyle.emptyContainer}>
      <Text>No data available</Text>
    </View>
  );

  return (
    <View style={ExStyle.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyComponent}
      />
      <TouchableOpacity
        style={ExStyle.chatButton}
        onPress={() => navigation.navigate('AddItemScreen', { addItem })}
      >
        <Entypo style={ExStyle.icon} name="plus" size={26} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};


  
  
  