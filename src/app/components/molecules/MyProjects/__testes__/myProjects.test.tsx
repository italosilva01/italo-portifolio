import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import MyProjects from '../index';

const THREE = 3;
const HUNDRED = 100;
const ZERO = 0;

describe('MyProjects component', () => {
	beforeEach(()=>{
			render(<MyProjects />)
	})

	const testRendersWithoutCrashing = ()=>{
		const cardsProjectsInfo = screen.getAllByRole('generic');
		expect(screen.getByRole('heading',{level:1,name:/Trabalhos e projetos/})).toBeInTheDocument();
		expect(screen.getByText('Portfólio')).toBeInTheDocument();
		expect(cardsProjectsInfo).not.toBeLessThan(THREE);
	}

	test('renders withou crashing',()=>{
		testRendersWithoutCrashing();	
	})

	test('render in mobile screen',()=>{
		const divWrapperProjects = screen.getByTestId('wrapperProjects');
		resizeWindow(414,896);
		render(<MyProjects />);
		testRendersWithoutCrashing();
		fireEvent.scroll(divWrapperProjects,{target:{scrollX:HUNDRED}});
		expect(divWrapperProjects.scrollLeft).toBeGreaterThan(ZERO);
	})  
});