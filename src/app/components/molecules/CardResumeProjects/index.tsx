"use client";

import React, { useState } from "react";
import { Card } from "@components/atons/Card";
import { Modal } from "@components/atons/Modal";

interface Project {
  title: string;
  description: string;
  projectLink: string;
  image: string;
  isUnavailable?: boolean;
}

interface CardResumeProjectsProps {
  project?: Project;
}

const CardResumeProject: React.FC<CardResumeProjectsProps> = ({ project }) => {
  const {
    title = "",
    description = "",
    projectLink = "",
    image = "",
    isUnavailable = false,
  } = project || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    if (isUnavailable) {
      handleOpenModal();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isUnavailable) {
        handleOpenModal();
      }
    }
  };

  const cardContent = (
    <Card.Root className="max-w-[300px] max-h-[371px] h-[371px] xl:min-w-[360px] xl:w-[360px] xl:h-[460px] flex flex-col gap-2 cursor-pointer hover:bg-purple-dull-10">
      <Card.Title className="md:text-xl">{title}</Card.Title>
      <Card.Resume className="mt-[0.047rem] text-sm">{description}</Card.Resume>
      <Card.WrapLabel className="w-full flex gap-2">
        <Card.Label text="React JS" className="max-w-[6.625rem]" />
        <Card.Label text="Typescript" />
      </Card.WrapLabel>
      <Card.Image
        src={image}
        alt={title}
        width={300}
        height={160}
        className="rounded-2xl overflow-hidden"
      />
    </Card.Root>
  );

  return (
    <>
      {isUnavailable ? (
        <div
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label={`Ver informações sobre ${title}`}
          className="w-fit"
        >
          {cardContent}
        </div>
      ) : (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
          aria-label={`Visitar projeto ${title}`}
        >
          {cardContent}
        </a>
      )}

      {isUnavailable && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="flex flex-col gap-4 p-6 max-w-[500px] text-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>

            <Card.Title className="text-xl md:text-2xl">
              Projeto Indisponível
            </Card.Title>

            <Card.Resume className="text-sm md:text-base text-white">
              Infelizmente, este projeto não está mais disponível para
              visualização.
            </Card.Resume>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CardResumeProject;
