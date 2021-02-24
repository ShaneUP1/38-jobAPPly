import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Main from './Main';

const server = setupServer(
  rest.post('http://localhost:7890/api/v1/jobs', (req, res, ctx) => {
    return res(ctx.json({
      id: '1',
      company: req.body.company,
      appliedDate: '2/20/21',
      responseDate: '',
      url: 'www.imperfectfoods.com',
      notes: 'noted'
    }));
  }),
  rest.get('http://localhost:7890/api/v1/jobs', (req, res, ctx) => {
    return res(ctx.json([
      {
        'id': '1',
        'company': 'Imperfect Foods',
        'url': 'www.imperfectfoods.com',
        'notes': 'noted',
        'appliedDate': '02/20/2021',
        'responseDate': ''
      }]));
  })
);

describe('Main contianer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('creates a job application record with form submission', async() => {
    render(<Main />);

    const companyInput = screen.getByLabelText('Company');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(companyInput, {
      target: {
        value: 'Alchemy Code Lab'
      }
    });

    fireEvent.click(submitButton);

    return waitFor(() => {
      screen.getByText('Alchemy Code Lab');
    });
  });
});
