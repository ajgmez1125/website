import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LoadingScreen({stop})
{
    const nav = useNavigate()

    const[isPlaying, setIsPlaying] = useState(true)

    const introTextCommands = ['cd harpyiscool', 'npm start']
    const [completedCommands, setCompletedCommands] = useState([])
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
    const currentIntervalMultiplier = useRef(100)

    const directories = ["PS C:/Users/harpy/Documents/Projects> ",  "PS C:/Users/harpy/Documents/Projects/harpyiscool> "]

    const INTERVAL_MULTIPLE_HIGH = 2000
    const INTERVAL_MULTIPLE_LOW = 100

    useEffect(() => {
        if(currentCommandIndex < introTextCommands.length)
        {
            var delay = setTimeout(() => {
            setCompletedCommandsAtIndex(currentCommandIndex, introTextCommands[currentCommandIndex].slice(0, currentLetterIndex))
            if(completedCommands[currentCommandIndex] === introTextCommands[currentCommandIndex])
            {
            setCurrentCommandIndex(currentCommandIndex + 1)
            setCurrentLetterIndex(0)
            currentIntervalMultiplier.current = INTERVAL_MULTIPLE_HIGH
            }
            else
            {
            setCurrentLetterIndex(currentLetterIndex + 1)
            currentIntervalMultiplier.current = INTERVAL_MULTIPLE_LOW
            }
        }, intervalGen(currentIntervalMultiplier.current))
        return () => {
            clearTimeout(delay)
        }
        }
        else
        {
            setIsPlaying(false)
        }
    })


    const setCompletedCommandsAtIndex = (index, content) => {
        var newArr = [...completedCommands]
        newArr[index] = content
        setCompletedCommands(newArr)
    }

    const intervalGen = (multiplier) => {
        var delay = (Math.random() * multiplier) + multiplier / 2
        return delay
    }

    const commandLineAnimationGenerate = () => {
        return(
        <div>
            {
            completedCommands.map((command, index) => {
            return <p id = 'introtext'>{directories[index]} {command}</p>
            })}
            <span id = 'commandblinker' style = {{height: '100px', width: '500px', backgroundColor: 'white'}}/>
        </div>
        )
    }

    return (
        <div>
        {
            isPlaying ? commandLineAnimationGenerate() : nav('/home')
        }
        </div>
    );
}

export default LoadingScreen;
