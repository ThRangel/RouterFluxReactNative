import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PageOne from './PageOne';
import PageTwo from './PageTwo';


const RouterComponent = () => {
return (
 <Router>
  <Scene key="root" >
  <Scene key="PageOne" component={PageOne} title="PageOne" initial />
  <Scene key="PageTwo" component={PageTwo} title="PageTwo"/>
  </Scene>
 </Router>
 );
};


export default RouterComponent;


/*
        <StackApp.Navigator
        initialRouteName="Login"

        screenOptions = {{
          headerStyle:{
            backgroundColor : '#437AAD',
          },
          headerTintColor : '#fff',
          headerTitleStyle : {
            fontWeight: 'bold'
          }
          }}
        >
             <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={NavOptionHandler}/>
             <StackApp.Screen name="Login" component={LoginScreen} options={NavOptionHandler}/>
             <StackApp.Screen name="Register" component={RegisterScreen} options={NavOptionHandler}/>
             
        
         </StackApp.Navigator>


*/
