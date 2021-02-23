import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Main from './Main';

const server = setupServer(
  rest.post('http://localhost:7891/api/v1/jobs', (req, res, ctx) => {
    return res(ctx.json({
      id: '1',
      company: 'Imperfect Foods',
      appliedDate: '2/20/21',
      url: 'www.imperfectfoods.com',
      notes: ''
    }));
  })
);

describe('Main contianer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('creates a job application record with form submission', async() => {
    render(<Main />);

    const companyInput = screen.getByLabelText('Company');
  })
});
