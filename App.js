import React from 'react';
import Home from "./src/views/Home"
import { Provider } from 'react-redux';
import store from './src/store/';

export default ()=>{
    return (
			<Provider store={store}>
				<Home />
			</Provider>
		);
}