import { types } from "../../types/types"

describe('Pruebas en types', () => {
  test('should test types', () => {
      

    expect(types).toEqual({
        uiOpenModal: '[ui] Open modal',
        uiCloseModal: '[ui] Close modal',

        eventSetActive: '[event] Set Active',
        eventLogout: '[event] Event logout ',
        eventStartAddNew : '[event] Start add new',
        eventAddNew: '[event] Add new',
        eventClearActiveEvent: '[event] Clear active event',
        eventUpdated: '[event] Event update',
        eventDeleted: '[event] Delete event',
        eventLoaded: '[event] Events loaded',


        authCheckingFinish: '[auth] Finish checking login state',
        authStartLogin: '[auth] Start login',
        authLogin: '[auth] Login',
        authStartRegister: '[auth] Start Register',
        authStartTokenRenew: '[auth] Start token renew',
        authLogout: '[auth] Logout',
    });
  });
    
})