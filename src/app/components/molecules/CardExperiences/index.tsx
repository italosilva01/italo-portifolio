import React from "react"
import { Card } from "../../atons/Card"

interface CardExperiencesProps {
    text: string,
    textResume: string,
}
export const CardExperience = ({ text, textResume }: CardExperiencesProps) => {
    return <Card.Root className="min-w-[297px] !h-28 overflow-hidden sm:!p-1">
        <Card.Title>{text}</Card.Title>
        <Card.Resume>{textResume}</Card.Resume>
    </Card.Root>
}