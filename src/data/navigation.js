import { NavigationContainer } from "@react-navigation/native";
import ProductScreen from "./Screens/ProductsScreen";
import ProductDetailsScreen from "./Screens/ProductDetailsScreen";
import ShoppingCart from "./Screens/ShoppingCart";
import {createStackNavigator} from '@react-navigation/stack';
import { Pressable,Text } from "react-native";
import {FontAwesome5} from '@expo/vector-icons';

import { useSelector } from "react-redux";
import {selectNumberOfItems } from "./store/cartSlice";

const Stack = createStackNavigator();


const Navigation =()=> {
  const numberOfItems =useSelector(selectNumberOfItems)
    return(

        <NavigationContainer>

   <Stack.Navigator screenOptions={{contentStyle:{backgroundColor :'white'}}}>

   <Stack.Screen
  name="Products"
  component={ProductScreen}
  options={({ navigation }) => ({
    headerRight: () => (
      <Pressable onPress={() => navigation.navigate("Cart")} style={{ flexDirection: "row" }}>
        <FontAwesome5 name="shopping-cart" size={18} color="gray" />
        <Text style={{ marginLeft: 5, fontWeight: "500" }}>{numberOfItems}</Text>
      </Pressable>
    ),
  })}
/>

<Stack.Screen name="Product Details" component={ProductDetailsScreen}
options={{presentation: 'fullScreenmodal'}}/>
<Stack.Screen name="Cart" component={ShoppingCart}/>






   </Stack.Navigator>


        </NavigationContainer>
    )
}
export default Navigation;