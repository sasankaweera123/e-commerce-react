import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AdminContextProvider, { AdminContext } from './AdminContext';
import { ResourcePath } from '../constants/ResourcePath';

describe('AdminContextProvider', () => {
    let mock ;

    beforeEach(() => {
        localStorage.clear(); // Clear localStorage before each test
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
    });

    test('fetches users, orders, and product orders on mount', async () => {
        const usersData = [{id: 1, name: 'User 1'}];
        const ordersData = [{id: 1, total: 100}];
        const productOrdersData = [{id: 1, productId: 1, quantity: 2}];

        mock
            .onGet(ResourcePath.GET_ALL_USERS).reply(200, usersData)
            .onGet(ResourcePath.GET_ALL_ORDERS).reply(200, ordersData)
            .onGet(ResourcePath.GET_ALL_CARTS).reply(200, productOrdersData);

        render(
            <AdminContextProvider>
                <AdminContext.Consumer>
                    {(context) => (
                        <>
                            <div data-testid="users-length">{context.users.length}</div>
                            <div data-testid="orders-length">{context.orders.length}</div>
                            <div data-testid="product-orders-length">{context.productOrders.length}</div>
                        </>
                    )}
                </AdminContext.Consumer>
            </AdminContextProvider>
        );
        await waitFor(() => {
            expect(mock.history.get.length).toBe(3);
        });
        await waitFor(() => {
            expect(mock.history.get[0].url).toBe(ResourcePath.GET_ALL_USERS);
        });
        await waitFor(() => {
            expect(mock.history.get[1].url).toBe(ResourcePath.GET_ALL_ORDERS);
        });
        await waitFor(() => {
            expect(mock.history.get[2].url).toBe(ResourcePath.GET_ALL_CARTS);
        });
        expect(await screen.findByTestId('users-length')).toHaveTextContent('0');
        expect(await screen.findByTestId('orders-length')).toHaveTextContent('0');
        expect(await screen.findByTestId('product-orders-length')).toHaveTextContent('0');
    });

    test('updates isAdmin state correctly when logged in user is an admin', async () => {
        const adminUser = { id: 1, name: 'Admin', role: 'admin' };
        localStorage.setItem('loggedInUser', JSON.stringify(adminUser));

        render(
            <AdminContextProvider>
                <AdminContext.Consumer>
                    {(context) => (
                        <div data-testid="isAdmin">{context.isAdmin.toString()}</div>
                    )}
                </AdminContext.Consumer>
            </AdminContextProvider>
        );

        expect(await screen.findByTestId('isAdmin')).toHaveTextContent('true');
    });

    test('saves logged in user details to localStorage', async () => {
        const user = { id: 1, name: 'Test User' };

        render(
            <AdminContextProvider>
                <AdminContext.Consumer>
                    {(context) => {
                        context.loggedUserDetails(user);
                        return null;
                    }}
                </AdminContext.Consumer>
            </AdminContextProvider>
        );

        expect(JSON.parse(localStorage.getItem('loggedInUser'))).toEqual(user);
    });
});