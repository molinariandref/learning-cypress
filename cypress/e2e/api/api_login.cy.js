describe('Realizar o login via API', () => {
  it('Realiza login', () => {
    cy.request({
      method: 'POST',
      url: 'http://serverest.dev/login',
      body: {
        email: 'fulano@qa.com	',
        password: 'teste',
      },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
    });
  });
});
