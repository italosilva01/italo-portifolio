import React from "react"
import { Card } from "../../atons/Card"

interface CardExperiencesProps {
    text: string,
    textResume: string,
}
export const CardExperience = ({ text, textResume }: CardExperiencesProps) => {
    return <Card.Root className="w-[297px] h-28">
        <Card.Title>{text}</Card.Title>
        <Card.Resume>{textResume}</Card.Resume>
    </Card.Root>
}