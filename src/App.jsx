import { useState,useEffect } from "react";
function App(){
  const [text, setText] = useState('')
  const charCount=text.length
  const wordCount= text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const readTime= Math.ceil(wordCount / 200)

     useEffect(() => {
  console.log('Word count:', wordCount)
}, [wordCount])

  return (

    <div>
      <h1>Word counter</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Start Typing..."/>
        <p>Characters : {charCount}</p>
        <p>wordCount: {wordCount}</p>
        <p>Reading Time: {readTime}</p> 
        {wordCount > 100 && (
  <p style={{ color: 'red' }}>Too long!</p>
)}
        <button onClick={() => setText('')}>
  Clear
</button>
    </div>
  )
  
}

export default App 