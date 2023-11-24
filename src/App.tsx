import './App.css'

import ChordSheetJS from 'chordsheetjs';
import reactLogo from './assets/react.svg'
import text from './songs/have-you-ever-seen-the-rain.txt?raw';
import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  const parser = new ChordSheetJS.ChordProParser();
  const song = parser.parse(text);
  const formatter = new ChordSheetJS.HtmlTableFormatter();
  const disp = formatter.format(song);

  console.log(disp)

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: disp }}></div>
    </>
  )
}

export default App
