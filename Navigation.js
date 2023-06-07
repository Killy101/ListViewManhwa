import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import List from "./List";



const Stack = createNativeStackNavigator();

export default function NavsForScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="List">
                <Stack.Screen name="List" component={List} />
                <Stack.Screen name="Details" component={Details} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}