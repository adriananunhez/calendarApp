import { login } from "../../actions/auth";
import { authReducer } from "../../reducers/authReducer"


const initState = {
    checking : true
}
describe('Test authReducer', () => {
    
    test('should default state ', () => {
        
        const state = authReducer(initState, {})

        expect( state ).toEqual({checking:true});

    });

    test('should authLogin', () => {
        
        const authLogin = login({uid:'123',name:'Adriana'});


        const state = authReducer(initState, authLogin);

        expect( state ).toEqual({ checking: false, uid: '123', name: 'Adriana' });
    })
    
    
})
