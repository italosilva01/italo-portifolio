import '@testing-library/jest-dom';
import { beforeEach, describe,expect,test } from 'vitest'
import { render , screen} from '@testing-library/react';
import About from '../index' 

const MY_NAME = "Francisco italo";
const MY_RESUME = "Mas pode me chamar apenas de Italo. Prazer! Há mais de 4 anos desenvolvendo e programamando interfaces com React + Javascript + Typescript. Sou bacharel em Tecnologia da Informação pela Universidade Federal do Rio Grande do Norte e desenvolvedor Front-end com React e Typescript desde 2020."

describe('About component',()=>{
  beforeEach(()=>{
    render(<About />)
  });

  test('renders without crashing', () => {
    expect(screen.getByRole('img',{name:/Francisco Italo/i})).toBeInTheDocument();
    expect(screen.getByRole('heading',{level:1,name:/Francisco Italo/i })).toBeInTheDocument();
    expect(screen.getByText(MY_RESUME)).toBeInTheDocument();
  })
})
