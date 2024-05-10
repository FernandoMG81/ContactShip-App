

import { TranscriptionType } from '../types';
import { TranscriptionPage } from "@/components/TranscriptionPage";
import transcriptionJSON from '@/data/transcription.json'

export default function HomePage() {

  const transcriptionData = transcriptionJSON as TranscriptionType[];

  return (
    <>
      <TranscriptionPage 
        transcriptionData={ transcriptionData } 
        audioURL={'/resources/Test-Call.wav'}
      />
    </>
  );

}



