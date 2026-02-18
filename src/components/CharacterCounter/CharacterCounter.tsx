import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { TextInput } from '../TextInput/TextInput';

function CharacterCounter ({minWords = 25, maxWords = 100, targetReadingTime = 0}: CharacterCounterProps) {
    
    const [characterCount,setCharacterCount] = useState(0);
    const [wordCount,setWordCount] = useState(0);
    const [readingTime,setReadingTime] = useState(0);

    const stats = {

        characterCount: characterCount,
        wordCount: wordCount,
        readingTime:readingTime,
        minWords: minWords,
        maxWords: maxWords,
        targetReadingTime: targetReadingTime
        
    };

    function handleTextChange (value: string) {

        // Characters
        setCharacterCount(value.length);

        // Words
        let words = 0;
        if(value.trim().length > 0) {
            words = value.trim().split(/\s+/).length;
            setWordCount(words);
        }
        else {
            setWordCount(0);
        }

        // Reading Time
        setReadingTime(Math.ceil(words/3));
        
    }

    return (

        <div className="flex justify-center">
        <div className="min-w-4/5 mx-4 my-8 flex flex-col">
            <TextInput onTextChange={handleTextChange} />
            <StatsDisplay stats={stats} showReadingTime={true} />
        </div>
        </div>

    )
}

export { CharacterCounter };