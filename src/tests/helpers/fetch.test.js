import { fetchConToken, fetchSinToken } from "../../helpers/fetch"

describe('Test in the Fetch Helpers', () => {
    
    let token = '';

    test('should fetchSinToken funcionar', async () => {
        
        const resp =  await fetchSinToken('auth',{ email:'adriana@gmail.com', password:'123456'}, 'POST');

        expect(resp instanceof Response ).toBe(true);

        const body = await resp.json();
        expect( body.ok ).toBe( true );

        token = body.token;

    });


    test('should fetchConToken funcionar', async () => {

        localStorage.setItem('token', token);

        const resp = await fetchConToken('events/5fc42085e2bb2617d702f0a6', {}, 'DELETE');  
        const body = await resp.json();
        
        expect( body.msg ).toBe('El evento no existe por ese id');
    });

    
})
