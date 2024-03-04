import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ShopContextProvider, {ShopContext} from "./ShopContext";
import {ResourcePath} from "../constants/ResourcePath";

const mockAxios = new MockAdapter(axios);

const sampleProducts = [{id: 1, title: 'Product 1', price: 10}, {id: 2, title: 'Product 2', price: 20}];
const sampleCategories = ['Category 1', 'Category 2'];
const sampleFavouriteProducts = [{id: 1, title: 'Product 1', price: 10}];
const sampleCartItems = {1: 1, 2: 2};

describe('ShopContextProvider', () => {

    beforeAll(() => {
        mockAxios.onGet(ResourcePath.GET_ALL_PRODUCTS).reply(200, sampleProducts);
        mockAxios.onGet(ResourcePath.GET_ALL_CATEGORIES).reply(200, sampleCategories);
        mockAxios.onGet(ResourcePath.GET_FAVORITE_PRODUCTS).reply(200, sampleFavouriteProducts);
    });

    afterAll(() => {
        mockAxios.restore();
    });

    test('cannot get products, categories and favourite products if not authenticated', async () => {
        render(
            <ShopContextProvider>
                <ShopContext.Consumer>
                    {(value) => (
                        <div>
                            <p data-testid="products">{value.products}</p>
                            <p data-testid="categories">{value.categories}</p>
                            <p data-testid="favourite-products">{value.favouriteProducts}</p>
                        </div>
                    )}
                </ShopContext.Consumer>
            </ShopContextProvider>
        );

        await waitFor(() => expect(screen.getByTestId('products').textContent).toEqual(''));
        await waitFor(() => expect(screen.getByTestId('categories').textContent).toEqual(''));
        await waitFor(() => expect(screen.getByTestId('favourite-products').textContent).toEqual(''));
    });

    test('adds item to cart', async () => {
        render(
            <ShopContextProvider>
                <ShopContext.Consumer>
                    {(value) => (
                        <button onClick={() => value.addToCart(1)} data-testid="add-to-cart-btn">Add to Cart</button>
                    )}
                </ShopContext.Consumer>
            </ShopContextProvider>
        );
        fireEvent.click(screen.getByTestId('add-to-cart-btn'));

        await waitFor(() => expect(JSON.parse(localStorage.getItem('cartItems'))[1]).toEqual(1));
    });

    test('removes item from cart', async () => {
        localStorage.setItem('cartItems', JSON.stringify(sampleCartItems));
        render(
            <ShopContextProvider>
                <ShopContext.Consumer>
                    {(value) => (
                        <button onClick={() => value.removeFromCart(1)} data-testid="remove-from-cart-btn">Remove from
                            Cart</button>
                    )}
                </ShopContext.Consumer>
            </ShopContextProvider>
        );
        fireEvent.click(screen.getByTestId('remove-from-cart-btn'));

        await waitFor(() => expect(JSON.parse(localStorage.getItem('cartItems'))[1]).toEqual(0));
    });

    test('if cart is empty remove from cart', () => {
        localStorage.setItem('cartItems', JSON.stringify({1: 0}));
        render(
            <ShopContextProvider>
                <ShopContext.Consumer>
                    {(value) => (
                        <button onClick={() => value.removeFromCart(1)} data-testid="remove-from-cart-btn">Remove from
                            Cart</button>
                    )}
                </ShopContext.Consumer>
            </ShopContextProvider>
        );
        fireEvent.click(screen.getByTestId('remove-from-cart-btn'));

        expect(JSON.parse(localStorage.getItem('cartItems'))[1]).toEqual(0);

    });

    test('gets total of cart if products are in cart', () => {
        localStorage.setItem('cartItems', JSON.stringify(sampleCartItems));
        render(
            <ShopContextProvider>
                <ShopContext.Consumer>
                    {(value) => (
                        <p data-testid="cart-total">{value.getCartTotal()}</p>
                    )}
                </ShopContext.Consumer>
            </ShopContextProvider>
        );

        expect(screen.getByTestId('cart-total').textContent).toEqual('0.00');

    });

    test('gets cart items count', () => {
        localStorage.setItem('cartItems', JSON.stringify(sampleCartItems));
        render(
            <ShopContextProvider>
                <ShopContext.Consumer>
                    {(value) => (
                        <p data-testid="cart-items-count">{value.getCartItemsCount()}</p>
                    )}
                </ShopContext.Consumer>
            </ShopContextProvider>
        );

        expect(screen.getByTestId('cart-items-count').textContent).toEqual('3');
    });

});