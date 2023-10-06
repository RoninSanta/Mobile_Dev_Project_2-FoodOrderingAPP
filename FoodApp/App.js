import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaView } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
//Choko Milky Fonts by javapep
//link: https://www.fontspace.com/choko-milky-font-f89250 Copyright free Fonts
// Royal Brand font by  Heinzel Std
// link: https://www.fontspace.com/royal-brand-font-f94042 Copyright free Fonts
// Deftone Fonts by Typodermic
// link: https://fontmeme.com/fonts/deftone-stylus-font/ Public domain fonts

function Restaurants() {
  let tableData = [
    {
      cells: [
        {
          // First is the title of Restaurant
          title: "Joe's Gelato",
          tagline: "Dessert, Ice cream, £",
          eta: "10-30",
          imgUri: require("./assets/images/dessert1.jpg"),
          items: [
            {
              // The food iteam are Sections in the Menu
              foodItem: "Gelato 🧁",
              contents: [
                {
                  // Choice are cells within each section
                  choice: "Vanilla",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/vanilla.jpg"),
                },
                {
                  choice: "Chocolate",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/chocolate.jpg"),
                },
                {
                  choice: "Mint",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/mint.jpg"),
                },
              ],
            },
            {
              foodItem: "Coffee ☕",
              contents: [
                {
                  choice: "Flat White",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/flat-white.jpg"),
                },
                {
                  choice: "Latte",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/latte.jpg"),
                },
                {
                  choice: "Caffè Americano",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/Americano.jpg"),
                },
              ],
            },
            {
              foodItem: "Waffles 🧇",
              contents: [
                {
                  choice: "Pecan",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/pecan.jpg"),
                },
                {
                  choice: "Matcha",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/matcha.jpg"),
                },
                {
                  choice: "Double Scoop",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/double.jpg"),
                },
              ],
            },
          ],
        },
        {
          title: "Joe's Diner",
          tagline: "American, burgers, £££",
          eta: "50+",
          imgUri: require("./assets/images/food1.jpg"),
          items: [
            {
              foodItem: "Burgers 🍔",
              contents: [
                {
                  choice: "Cheeseburger",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/burger.jpg"),
                },
                {
                  choice: "BLT",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/blt.jpg"),
                },
                {
                  choice: "Chicken Burger",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/chicken.jpg"),
                },
              ],
            },
            {
              foodItem: "Breakfast 🍳",
              contents: [
                {
                  choice: "Pancakes",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/pancakes.jpg"),
                },
                {
                  choice: "Omelette ",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/omelette.jpg"),
                },
                {
                  choice: "Toast",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/toast.jpg"),
                },
              ],
            },
            {
              foodItem: "Sides 🍟",
              contents: [
                {
                  choice: "Fries",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/fries.jpg"),
                },
                {
                  choice: "Mac & Cheese ",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/mac.jpg"),
                },
                {
                  choice: "Mashed Potato",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/mash.jpg"),
                },
              ],
            },
          ],
        },
        {
          title: "Joe's Pizzeria",
          tagline: "Italian, pizzas, ££",
          eta: "15+",
          imgUri: require("./assets/images/pizza1.jpg"),
          items: [
            {
              foodItem: "Pizza 🍕",
              contents: [
                {
                  choice: "Pepperoni",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/pepperoni.jpg"),
                },
                {
                  choice: "Cheese",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/cheese.jpg"),
                },
                {
                  choice: "Marinara",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/tomato.jpg"),
                },
              ],
            },
            {
              foodItem: "Calzones 🥙",
              contents: [
                {
                  choice: "Spinach",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/spinach.jpg"),
                },
                {
                  choice: "Ham",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/ham.jpg"),
                },
                {
                  choice: "Cheese",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/cheese.jpg"),
                },
              ],
            },
            {
              foodItem: "Sides 🍗",
              contents: [
                {
                  choice: "Buffalo Wings",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/wings.jpg"),
                },
                {
                  choice: "Garlic Bread",
                  isOutofStock: "In Stock",
                  MenuUri: require("./assets/images/garlic.jpg"),
                },
                {
                  choice: "Meatball",
                  isOutofStock: "Out of Stock",
                  MenuUri: require("./assets/images/meatball.jpg"),
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  //Create Navigation Object
  const navigation = useNavigation();

  const HomeScreenCell = (props) => (
    <Cell
      backgroundColor="transparent"
      onPress={() =>
        // Navigate to Menu screen on press cell
        navigation.navigate("Menu", {
          //Pass entire cell object as prop
          restaurantTitle: props.restaurantTitle,
        })
      }
      cellAccessoryView={
        <View style={props.customStyle}>
          <Image style={props.imageStyle} source={props.imageSrc} />
          <View
            style={{
              width: 100,
              height: 60,
              borderRadius: 50,
              backgroundColor: "white",
              justifyContent: "center",
              position: "absolute",
              right: 0,
              marginTop: 170,
              marginRight: 20,
            }}
          >
            <Text
              style={{ fontSize: 17, fontWeight: "bold", textAlign: "center" }}
            >
              {props.etaText}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: -5,
              }}
            >
              mins
            </Text>
          </View>
          <Text style={props.TitleStyle}>{props.customLabel}</Text>
          <Text style={props.subTitleStyle}>{props.customSubLabel}</Text>
        </View>
      }
    />
  );

  return (
    <View>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TableView>
            {/* Implement table View */}
            {tableData.map((section, i) => (
              <Section key={i} hideSeparator="true" separatorTintColor="#ccc">
                {section.cells.map((cell, i) => (
                  <HomeScreenCell
                    key={i}
                    // Use the entire cell as restaurantTitle prop
                    restaurantTitle={cell}
                    // Customize Cell with Fonts
                    etaText={cell.eta}
                    customLabel={cell.title}
                    TitleStyle={{
                      marginTop: 5,
                      color: "#FF0000",
                      fontFamily: "Deftone Stylus",
                      fontSize: 35,
                    }}
                    customSubLabel={cell.tagline}
                    subTitleStyle={{ marginTop: 5, fontSize: 14 }}
                    customStyle={{
                      width: "100%",
                      height: 290,
                      backgroundColor: "transparent",
                      marginLeft: 2,
                    }}
                    imageSrc={cell.imgUri}
                    imageStyle={{ width: "100%", height: 200, borderRadius: 5 }}
                  />
                ))}
              </Section>
            ))}
          </TableView>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

function Menu() {
  const route = useRoute();
  const { restaurantTitle } = route.params;
  // Button State default and check if button is Pressed
  const [buttonTitle, setButtonTitle] = React.useState(
    "Click cell to Add Item to Cart"
  );
  const [isPressed, setIsPressed] = React.useState(false);

  // Custom Cells Design
  const CustomCell = (props) => {
    // Cell Press Condition for in Stock and out of stock
    const handleCellPress = (foodItem, choice) => {
      if (props.isOutofStock === "Out of Stock") {
        alert(`Sorry ! ${foodItem} , ${choice} is currently unavailable`);
        console.log(`${foodItem} , ${choice}is unavailable!`);
      } else {
        console.log(`${foodItem} , ${choice} is added to cart!`);
        setButtonTitle(`${foodItem}, ${choice} Added!`);
        setIsPressed(true);
      }
    };

    return (
      <Cell
        {...props}
        // on Press button display item title + choice
        onPress={() => handleCellPress(props.customTitle, props.customLabel)}
        cellContentView={
          <ImageBackground
            source={props.customImageSrc}
            style={styles.backgroundImage}
          >
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                {props.customLabel}
              </Text>
              <Text
                style={{ color: "#ffff00", fontWeight: "bold", fontSize: 13 }}
              >
                {props.isOutofStock}
              </Text>
            </View>
          </ImageBackground>
        }
      />
    );
  };
  // Custom Header Design in Menu Screen
  const CustomHeader = (props) => {
    return (
      <Cell
        {...props}
        cellContentView={
          <View>
            <Text
              style={{
                color: "#FFA600",
                fontFamily: "Choko Milky",
                fontSize: 45,
              }}
            >
              {props.customTitle}
            </Text>
          </View>
        }
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TableView>
            {/* Nested loop to go thru each Section and Cell */}
            {restaurantTitle.items.map((item, i) => (
              <CustomHeader key={i} customTitle={item.foodItem}>
                {item.contents.map((cells, j) => (
                  <CustomCell
                    key={j}
                    //Iterate the cells and map the respective info onto each cell
                    customTitle={item.foodItem}
                    customLabel={cells.choice}
                    customImageSrc={cells.MenuUri}
                    isOutofStock={cells.isOutofStock}
                  />
                ))}
              </CustomHeader>
            ))}
          </TableView>
          <View style={styles.container}>
            {/* If condition to check if any cell is pressed */}
            <View
              style={isPressed ? styles.buttonPressed : styles.buttonDefault}
            >
              <Text style={styles.ButtonText}>{buttonTitle}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
// Styling for the Menu Item Background Img
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 5,
  },
  //Button Styles
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  //Change Style when Button is Pressed
  buttonPressed: {
    backgroundColor: "#00cc00",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
  },
  //Default Button Style
  buttonDefault: {
    backgroundColor: "#ff0000",
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  ButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

const Stack = createStackNavigator();

function App() {
  // Load the Custom Fonts from assets/fonts folder
  //Using hooks to keep track of the loading state of the font
  //Guide by Expo Fonts Link: https://docs.expo.dev/develop/user-interface/fonts/
  const [fontLoaded] = useFonts({
    "Choko Milky": require("./assets/fonts/ChokoMilky.otf"),
    "Royal Brand": require("./assets/fonts/RoyalBrand.otf"),
    "Deftone Stylus": require("./assets/fonts/deftoneStylus.otf"),
  });
  // If font not loaded return nothing
  if (!fontLoaded) {
    return null;
  }
  return (
    // Navigation Container
    <NavigationContainer>
      {/* Stack Navigator */}
      <Stack.Navigator>
        {/* Restaurant Component */}
        <Stack.Screen
          name="Restaurants "
          component={Restaurants}
          options={{ title: "Restaurants", headerTitleAlign: "center" }}
        />
        {/* Menu Component */}
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: "Menu", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;