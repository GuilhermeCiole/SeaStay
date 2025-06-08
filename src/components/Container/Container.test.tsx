import React from 'react';
import { render } from '@testing-library/react';
import { Container } from './Container';

describe('Container Component', () => {
  it('renderiza o conteúdo dentro do container', () => {
    const { container } = render(
      <Container>
        <div data-testid="test-content">Conteúdo de teste</div>
      </Container>
    );

    expect(container.querySelector('[data-testid="test-content"]')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="test-content"]')?.textContent).toBe(
      'Conteúdo de teste'
    );
  });
});
