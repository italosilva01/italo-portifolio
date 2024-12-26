import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';

import MyProjects from '../index';
import { resizeWindow } from '../../../../../utils/test/index';

const THREE = 3;
const HUNDRED = 100;
const ZERO = 0;

describe('MyProjects component', () => {
	beforeEach(() => {
		render(<MyProjects />)
	})
	const testRendersWithoutCrashing = () => {
		expect(screen.getByRole('heading', { level: 1, name: /Trabalhos e projetos/ })).toBeInTheDocument();
		expect(screen.getByText(/Portfólio/i)).toBeInTheDocument();
	}
	test('renders withou crashing', () => {
		testRendersWithoutCrashing();
	})
	test('renders with more than 3 projects', () => {
		const divWrapperProjects = screen.getByTestId('wrapperProjects');
		const quantityProjectCards = within(divWrapperProjects).getAllByRole("link").length;
		expect(quantityProjectCards).not.lessThan(THREE);

	})
});