
import { StyleSheet,Pressable, Text, View,Image,FlatList } from 'react-native';
import {useSelector,useDispatch}  from 'react-redux';
import { productsSlice } from '../store/productSlice';

const ProductScreen=({navigation})=>{

const dispatch= useDispatch();





  const products=useSelector(state=>state.products.products);
    return(
        <FlatList data={products}
      renderItem={({item})=>(
        <Pressable 
        onPress={()=>{
          //update selected product
          
dispatch(productsSlice.actions.setSelectedProduct(item.id));



          navigation.navigate('Product Details')
        }}
        styles={styles.itemContainer}>
        <Image source={{uri:item.image,}}
        style={styles.image}/>
        </Pressable>

      )
      }
      numColumns={2}
      
      
      />

    )
};
const styles = StyleSheet.create({
   
   
    itemContainer:{
  width:'100%',
  padding:1,
    },
    image:{
      width:211,
     
      aspectRatio:1,
      
    },
  });
  export default ProductScreen;
  