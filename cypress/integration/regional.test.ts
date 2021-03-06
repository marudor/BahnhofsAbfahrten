describe('Regional', () => {
  it('can navigate to Details Page', () => {
    cy.intercept(
      `/api/hafas/v1/station/${encodeURIComponent('Poststraße, Karlsruhe')}`,
      {
        fixture: 'regional/stationSearchPoststrasse',
      },
    );
    cy.intercept(
      '/api/hafas/experimental/irisCompatibleAbfahrten/000723869?lookahead=150&lookbehind=0',
      { fixture: 'regional/departurePostStrasse' },
    );
    cy.intercept(
      {
        url: `/api/hafas/v2/details/${encodeURIComponent('STR 1761')}`,
        query: {
          station: '723870',
          date: '2020-05-02T17:54:00.000Z',
        },
      },
      { fixture: 'regional/detailsStr1761' },
    );
    cy.force404();
    cy.visit('/');
    cy.findByTestId('navToggle').click();
    cy.findByTestId('regional').click();
    cy.navigateToStation('Poststraße, Karlsruhe');
    cy.findByTestId('abfahrtSTR1761').click();
    cy.findByTestId('abfahrtSTR1761').findByTestId('detailsLink').click();
    cy.findByTestId('8079041').within(() => {
      cy.get('a').should(
        'have.attr',
        'href',
        '/regional/Karlsruhe%20Bahnhofsvorplatz',
      );
    });
  });

  it('can handle slashes', () => {
    cy.intercept(
      '/api/hafas/v1/station/' +
        encodeURIComponent('Arndt-/Spittastraße, Stuttgart'),
      { fixture: 'regional/stationSearchArndtSpittastrasse' },
    );
    cy.intercept(
      '/api/hafas/experimental/irisCompatibleAbfahrten/000559177?lookahead=150&lookbehind=0',
      { fixture: 'regional/departureArndtSpittastrasse' },
    );
    cy.force404();
    cy.visit('/');
    cy.findByTestId('navToggle').click();
    cy.findByTestId('regional').click();
    cy.navigateToStation('Arndt-/Spittastraße, Stuttgart');
    cy.findByTestId('abfahrtSTB77629');
  });
});
