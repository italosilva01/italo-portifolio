import React from "react"
import { Card } from "../../atons/Card"
import { useMobile } from "@/app/hooks/UseMobile"

interface CardExperiencesProps {
    text: string,
    textResume: string,
    durationExperience: string,
    fromTo: string,
    shortTextResume?: string,
}
export const CardExperience = ({ text, textResume, shortTextResume, durationExperience, fromTo }: CardExperiencesProps) => {
    const isMobileScreen = useMobile();
    const resume = isMobileScreen ? shortTextResume : textResume

    return <Card.Root className="min-w-[297px] 2xl:min-w-[580px] 2xl:max-w-[580px] !h-fit !p-[1rem] flex flex-col gap-y-1">
        <Card.Title>{text}</Card.Title>
        <Card.Resume>{resume}</Card.Resume>
        <div className="w-full flex justify-between">
            <Card.Highlight text={durationExperience} className="font-bold" />
            <Card.Highlight text={fromTo} />
        </div >
    </Card.Root >
}