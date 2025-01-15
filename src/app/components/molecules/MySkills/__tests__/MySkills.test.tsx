import { render, within, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import MySkills from "../index";

describe('MySkills component', () => {
    beforeEach(() => {
        render(<MySkills />)
    })
    test('renders withou crashing', () => {
        // const textSkills = /Skills/;
        const titleSectionText = "Tecnologias e habilidades";
        const textTechsIWorkEveryDay = "Techs que uso no dia a dia";
        const textOtherTechsWorkeded = "Outras techs com que já realizei projetos";

        const titleSectionComponent = screen.getAllByText(titleSectionText);

        const titleTechsIworkEveryDayComponent = screen.getByText(textTechsIWorkEveryDay);
        const titleOtherTechsWorkededComponent = screen.getByText(textOtherTechsWorkeded);

        const labelMobile = screen.getByText("🧑‍💻 Skills");
        const labelDesktop = screen.getByText("🧑‍💻 Skills · Experiências");

        expect(labelMobile).toBeInTheDocument();
        expect(labelDesktop).toBeInTheDocument();
        expect(titleSectionComponent.length).toBeGreaterThan(0);
        expect(titleTechsIworkEveryDayComponent).toBeInTheDocument();
        expect(titleOtherTechsWorkededComponent).toBeInTheDocument();
    })

    test('renders with more than 3 skills', () => {
        const divWrapperSkillsWorkEveryDay = screen.getByTestId('wrapperSkillsWorkEveryDay');
        const divWrapperOtherSkills = screen.getByTestId('wrapperOtherSkills');
        const quantitySkillsWorkEveryDay = within(divWrapperSkillsWorkEveryDay).getAllByRole("tech");
        const quantitySkillsOther = within(divWrapperOtherSkills).getAllByRole("tech");
        expect(quantitySkillsWorkEveryDay.length).toBeGreaterThan(3);
        expect(quantitySkillsOther.length).toBeGreaterThan(3);
    })
});