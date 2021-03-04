import React from 'react'
import { mount } from "enzyme"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import configureStore from 'redux-mock-store'

import '@testing-library/jest-dom'
import { DeleteEventFab } from "../../../components/ui/DeleteEventFab"
import { eventStartDelete } from '../../../actions/events'


jest.mock('../../../actions/events', () => ({
    eventStartDelete: jest.fn()
}));


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <DeleteEventFab />
    </Provider>    
)
describe('Test DeleteEvenFab', () => {
    
    test('should show correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('should call eventStartDelete to do click', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( eventStartDelete ).toHaveBeenCalled();

    })
    
    
})
