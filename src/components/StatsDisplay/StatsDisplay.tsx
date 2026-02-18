import type { StatsDisplayProps } from "../../types";

function StatsDisplay ({stats, showReadingTime = true}: StatsDisplayProps) {
    
    function secondsToMMSS(seconds: number): string {
        
        seconds = Math.ceil(seconds);
        const date = new Date(seconds * 1000);
        
        // toISOString() to get a string like "1970-01-01T00:03:20.000Z".
        // Then substring() (or substr()) to extract the minutes and seconds part (MM:SS).
        return date.toISOString().slice(14, 19);

    }

    function validWordCount (wordCount: number, minWords: number = 0, maxWords: number = 100000): boolean {
        
        let isvalid = false;
        if(wordCount>=minWords && wordCount<=maxWords) {isvalid = true;}
        return isvalid;

    }

    return (

        <div className="w-full flex sm:flex-row flex-col gap-1 justify-around text-center text-sm mt-4 border border-gray-300 rounded-lg">
            <div className="flex flex-col gap-1 p-4 sm:border-0 border-b border-b-gray-300">
                <p className="text-gray-600">Characters</p>
                <div className="text-3xl font-medium">{stats.characterCount}</div>
            </div>
            <div className="flex flex-col gap-1 p-4 sm:border-0 border-b border-b-gray-300">
                <p className="text-gray-600">Words</p>
                <div className={validWordCount(stats.wordCount,stats.minWords,stats.maxWords)?"text-green-600 text-3xl font-medium":"text-red-600 text-3xl font-medium"}>{stats.wordCount}</div>
                <p className="text-gray-600 text-xs">Min: {stats.minWords} | Max: {stats.maxWords}</p>
            </div>
            <div className="flex flex-col gap-1 p-4">
                <p className="text-gray-600">Reading Time</p>
                {showReadingTime && (<div className="text-3xl font-medium">{secondsToMMSS(stats.readingTime)}</div>)}
            </div>
        </div>

    )
}

export {StatsDisplay};