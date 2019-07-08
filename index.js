/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import MyApp from "./index.android";

AppRegistry.registerComponent(appName, () => MyApp);
