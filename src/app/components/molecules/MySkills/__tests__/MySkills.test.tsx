import { render, within } from "@testing-library/react";
import test, { beforeEach, describe } from "node:test";
import MySkills from "..";
import { expect } from "vitest";

describe('MySkills component', () => {
    beforeEach(() => {
        render(<MySkills />)
    })
    test('renders withou crashing', () => {
        const textSkills = "Skills"
        const titleSection = "Tecnologias e habilidades";
        const textTechsIWorkEveryDay = "Techs que uso no dia a dia";
        const textOtherTechsWorkeded = "Outras techs com que já realizei projetos";

        expect(textSkills).toBeInTheDocument();
        expect(titleSection).toBeInTheDocument();
        expect(textTechsIWorkEveryDay).toBeInTheDocument();
        expect(textOtherTechsWorkeded).toBeInTheDocument();
    })

    test('renders with more than 3 skills', () => {
        const divWrapperSkillsWorkEveryDay = screen.getByTestId('wrapperSkillsWorkEveryDay');
        const divWrapperOtherSkills = screen.getByTestId('wrapperOtherSkills');

        const quantitySkills = within(divWrapperSkillsWorkEveryDay).getAllByRole("listitem").length;

        expect(quantitySkills).toBeGreaterThan(3);
        expect(divWrapperOtherSkills).toBeGreaterThan(3);
    })
});