/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import PageOne from './src/PageOne';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
