"use client";

import { secondsToTime } from "../utils/secondsToTime";
import { TranscriptionType } from "../types";
import { useState } from "react";

interface Props {
  transcriptionData: TranscriptionType[];
  audioURL: string;
}
export const TranscriptionPage = ({ transcriptionData, audioURL }: Props) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  
  const handleClick = (
    start: number,
  ) => {
    const audioElement = document.getElementById(
      "audioPlayer",
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = start;
      audioElement.play();
    }
  }

  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const audioElement = event.target as HTMLAudioElement;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
    }
  };

  return (
    <>
      <main>
        <audio 
          id="audioPlayer" 
          controls 
          src={audioURL} 
          className="w-full max-w-[800px] m-auto" 
          onTimeUpdate={handleTimeUpdate}>
          Your browser does not support the <code>audio</code> element.
        </audio>

        <section className="flex flex-col items-center justify-center mt-6">
          <header className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Transcripción de llamada</h1>
            <p className="max-w-[800px] text-lg mb-3 italic text-balance text-center">
            Reproduzca la transcripción de la llamada haciendo clic en cualquier parte del texto. Puede iniciar la reproducción desde el punto que desee simplemente seleccionando el mensaje deseado.
            </p>
          </header>
          <section className="flex flex-col bg-gray-300 rounded-lg max-w-[900px] h-full p-6">
            {transcriptionData.map((message, index) => (
              <div
                className={`chat ${message.role === "agent" ? "chat-start" : "chat-end"} mt-6 ${currentTime > message.start && currentTime < message.end ? "scale-105 ease-in-out duration-300" : "opacity-80 ease-out duration-300"}`}
                key={index}
              >
                <header className="chat-header text-black">
                  {message.role}
                  <time className="text-xs opacity-50">
                    {" "}
                    {secondsToTime(message.start)}
                  </time>
                </header>
                <button
                  className={`chat-bubble ${message.role === "agent" 
                  ? "chat-bubble-primary animate-slide-in-left animate-delay-300" 
                  : "chat-bubble-info animate-slide-in-right animate-delay-300"}
                  `}
                  onClick={() => handleClick(message.start)}
                >
                  {message.content}
                </button>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};
