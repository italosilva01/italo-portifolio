import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Card } from ".";

describe('Card root components', () => {
    beforeEach(() => {
        render(<Card.Root > <p>default text</p></Card.Root>)
    })

    test('renders withou crashing', () => {
        expect(screen.getByText('default text')).toBeInTheDocument();
    })
}
)