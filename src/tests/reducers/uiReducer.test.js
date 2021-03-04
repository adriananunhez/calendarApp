import { uiCloseModal, uiOpenModal } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducer"

const initialState = {
    modalOpen: false
}

describe('Test in uiReducer', () => {
    
    test('should return the state defect', () => {
        
        const state = uiReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

    test('should open modal', () => {
        const openModal = uiOpenModal();
        const state = uiReducer(initialState, openModal);

        expect(state).toEqual({modalOpen:true});

        const modalClose = uiCloseModal();
        const stateClose = uiReducer( state, modalClose );

        expect(stateClose).toEqual({modalOpen:false});
    });
    


    
})
