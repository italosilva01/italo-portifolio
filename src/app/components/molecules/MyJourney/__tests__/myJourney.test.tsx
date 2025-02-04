import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { MyJourney } from "..";

describe('MyJourney component', () => {
    beforeEach(() => {
        render(<MyJourney />)
    })

    test('renders without crashing', () => {
        const titleSection = 'Trajetória até aqui';
        const columnTextProfessional = "Área profissional";
        const columnTextEducational = "Área Acadêmica";

        expect(screen.getByText(/Carreira /i)).toBeInTheDocument();
        expect(screen.getByText(titleSection)).toBeInTheDocument();
        expect(screen.getByText(columnTextProfessional)).toBeInTheDocument();
        expect(screen.getByText(columnTextEducational)).toBeInTheDocument();
    })

    test('renders with more than 3 experiencies professionals', () => {
        const containerExperiencesProfessionals = screen.getByTestId('xxx');
        const quantityExperiencesProfessionals = within(containerExperiencesProfessionals).getAllByRole("xxx");

        expect(quantityExperiencesProfessionals.length).toBeGreaterThan(0);
    })

    test('renders with more than 3 experiencies educational', () => {
        const containerExperiencesEducations = screen.getByTestId('xxx');
        const quantityExperiencesEducations = within(containerExperiencesEducations).getAllByRole('xxx');
        expect(quantityExperiencesEducations.length).toBeGreaterThan(0);
    })
})