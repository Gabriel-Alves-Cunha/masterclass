import React, { useContext, useReducer } from "react";
import CartContext from './CartContext';

const AppContext: React.FC = () => {
	// useContext
	// const {products} = useContext(CartContext);

	// return (
	// 	<ul>
	// 		{products?.map(product => product.name)}
	// 	</ul>
	// )

	// useReducer

	interface Product {
		id: number;
		name: string;
		price: number;
	}

	interface Cart {
		products: string[],
		shipping_value?: number;
	}

	type CartActionType = {
		type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
	}

	const cart = useReducer(
		(state: Cart, action: CartActionType) => {
			switch (action.type) {
				case 'ADD_PRODUCT':
					return {
						...state,
						products: [...state.products, 'Produto novo.']
					}
				case 'REMOVE_PRODUCT':

				default:
					return state;
			}
		},
		{
			products: [],
			shipping_value: 0
		}
	)

	return (
		cart
	);
}

export default AppContext;