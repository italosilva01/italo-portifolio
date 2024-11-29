import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Card } from ".";

describe('Card components', () => {
    beforeEach(() => {
        render(<Card > <p>default text</p></Card>)
    })

    test('renders withou crashing', () => {
        expect(screen.getByText('default text')).toBeInTheDocument();
    })
}
)