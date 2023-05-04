import {
    Text,
    FlatList,
    View,
    StyleSheet,
    Pressable

}from 'react-native'

import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux';
import { selectSubtotal } from '../store/cartSlice';

const ShoppingCartTotals=()=>{
    const subtotal=useSelector(selectSubtotal)
    return (
    <View  style={styles.totalContainer}> 
    <View style={styles.row}>
       <Text style={styles.text}>Subtotal</Text>
       <Text style={styles.text}>410,00 US$</Text>

   </View>
    <View style={styles.row}>
       <Text style={styles.text}>Delivery</Text>
       <Text style={styles.text}>10,00 US$</Text>

   </View>
    <View style={styles.row}>
       <Text style={styles.textBold}>Total</Text>
       <Text style={styles.textBold}>420,00 US$</Text>

   </View>
   </View>
    )

}
const ShoppingCart=()=>{

    const cartItem=useSelector(state=>state.cart.items)

    return(
        <>
      <FlatList 
      data={cartItem}
      renderItem={({item})=> <CartListItem cartItem={item}/>}
     ListFooterComponent={ShoppingCartTotals}
      />

      
      <Pressable  style={styles.button}>
<Text style={styles.buttonText}> Checkout</Text>

      </Pressable >
      </>
    );
};
const styles=StyleSheet.create({
    totalContainer:{
padding:20,
borderColor:'gray',
borderTopWidth:1,
paddingTop:10,
borderColor:"grainshore"
    },
row:{
    flexDirection:'row',
    justifyContent: 'space-between',

},
text:{
    fontSize:16,
    color:'gray',

},
textBold:{

    fontSize:16,
  
    fontWeight:500,

},
button:{
    position:'absolute',
    backgroundColor:'black',
    bottom:30,
    width:'90%',
    alignSelf:'center',
    padding:20,
    borderRadius:100,
    alignItems:"center",


  },
  buttonText:{
    color:'white',
    fontWeight:500,
    fontSize:16,

    

  }
    
})
export default ShoppingCart;