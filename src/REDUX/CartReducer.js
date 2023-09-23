import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ADD_TO_CART, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, SELECT_ITEM } from "./Actions";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    selectedItem: null,
};


function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const itemIdToAdd = action.payload.id;
            const existingItem = state.cartItems.find((item) => item.id === itemIdToAdd);

            if (existingItem) {
                toast.error("Item already in cart.", {
                    position: "bottom-left",
                })

                return state
            } else {
                toast.success("Item added to cart.", {
                    position: "bottom-left",
                });
                const newCartItem = { ...action.payload };
                const updatedCartItems = [...state.cartItems, newCartItem];
                localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };

            }

        case INCREASE_QUANTITY:
            const increasedCartItems = state.cartItems.map((item) => {
                if (item.id === action.payload) {

                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });

            localStorage.setItem("cartItems", JSON.stringify(increasedCartItems))
            const increasedSelectedItem = state.selectedItem && state.selectedItem.id === action.payload
            ? { ...state.selectedItem, quantity: state.selectedItem.quantity + 1 }
            : state.selectedItem;
        
        

            return {
                ...state,
                cartItems: increasedCartItems,
                selectedItem: increasedSelectedItem,
            };

        case DECREASE_QUANTITY:
            const decreasedCartItems = state.cartItems
            .map((item) => {
                if (item.id === action.payload && item.quantity >= 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            })
            .filter((item) => item.quantity >=1);
            localStorage.setItem("cartItems", JSON.stringify(decreasedCartItems))
            const decreasedSelectedItem = state.selectedItem && state.selectedItem.id === action.payload? { ...state.selectedItem, quantity: Math.max(state.selectedItem.quantity - 1,1) } : state.selectedItem;

            return {
                ...state,
                cartItems: decreasedCartItems,
                selectedItem: decreasedSelectedItem,
            };
        case SELECT_ITEM:
            const item = state.cartItems.find((item) => item.id === action.payload.id);
           
            if (item !== undefined) {
                return {
                    ...state,
                    selectedItem: item
                }
            }
            else {

                return {
                    ...state,
                    selectedItem: action.payload
                }
            }


        case CLEAR_CART:
            
            toast.error("Cart items cleared.", {
                position: "bottom-left",
            });

            return {
                ...state,
                cartItems: [],
            };
    
        default:
            return state;
    }
}

export default cartReducer;
