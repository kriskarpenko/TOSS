import Section, { SectionDesktop, SectionMobile } from './Section';
import { render, screen, act } from '@testing-library/react';

describe('Component Section ', () => {
  it('renders itself', () => {
    let container;
    render(<Section />, container);
    expect(container).toBeInTheDocument;
  });

  it('SectionMobile renders itself', () => {
    let container;
    const { debug } = render(<SectionMobile />, container);
    // debug();
    expect(container).toBeInTheDocument;
    // expect(container).toHaveClass('flexColumn');
  });

  it('SectionDesktop renders itself', () => {
    let container;
    const { debug } = render(<SectionDesktop />, container);
    // debug();
    expect(container).toBeInTheDocument;
  });

  it('supports .text property', () => {
    const textToRender = 'shoto';
    render(<Section text={textToRender} />);

    const divText = screen.getByText(textToRender);
    expect(divText).toBeDefined;
    expect(divText.className.includes('text')).toBeTruthy;
  });

  it('supports .children property', () => {
    const textToRender = 'shoto';
    render(<SectionDesktop>{textToRender}</SectionDesktop>);

    const divText = screen.getByText(textToRender);
    expect(divText).toBeDefined;
  });
});
