const { syncDB } = require("../../tasks/sync-db")

describe('Pruebas de synckDB', () => { 

  test('should ask twice', () => { 
    syncDB();
    const times=syncDB();
    console.log('times', times);

    expect(times).toBe(2);
   })
    
 });