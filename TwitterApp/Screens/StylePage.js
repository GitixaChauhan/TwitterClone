import {StyleSheet} from "react-native";

export const ExStyle = StyleSheet.create({
    TextInputStyle: {
        fontSize: 16,
        color: 'black',
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        height: 50,
        borderRadius: 10,
        padding: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
       
   } ,
   text2: {
    textDecorationLine: 'underline', // Add underline styling
    fontSize: 17,
    color: "#007AFF",
   
  },
  buttonStyle1: {
    width: "90%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#007AFF",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  time: {
    position: 'absolute',
    fontSize: 15,
    fontWeight: "400",
    right: 20,
    color: 'grey'
  },
  desc: {
    marginLeft: 80,
    fontSize: 20,
    fontWeight: "500",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  dynamicImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // or any aspect ratio to maintain the original size
    marginTop: 10,
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  chatButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#007AFF',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerImage:{
    left: 10,
    bottom: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  container1: {
    flex: 1,
    padding: 16,
  },
  imageSty: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerButton: {
    marginRight: 10,
    backgroundColor: '#007AFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 120,
  },
  headerButtonText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 16,
  },
  selectimage: {
    position:'absolute',
    width: 300,
    height: 400,
    top: 100,
    left: 90,
    borderRadius: 15
  },
  SearchBar:{
    borderColor:"grey",
     borderWidth:2, 
     fontSize:18, 
     height:50, 
     padding:8,
     margin:10,
     borderRadius:25, 
     flexDirection:"row",
     justifyContent: "center",
     alignItems: "center",
     flexDirection: 'row',
   
     
   }
});