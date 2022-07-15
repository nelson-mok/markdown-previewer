import {useState} from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import {marked } from 'marked'


function App() {

  const [text,setText]= useState(`
  # Welcome to my Markdown Preview
  ## A little about myself:
  [Link](https://www.linkedin.com/in/nelsonmok/)
  \`to my LinkedIn\`
  \`\`\`
{
  "firstName": "Nelson",
  "lastName": "Mok",
  "age": 25
}
\`\`\`

1. First item
2. Second item
3. Third item

> blockquote

![cat picture](https://bit.ly/3RzRCGA)

**LOOK AT THIS CAT**
`)

marked.setOptions({
  breaks:true
})
  
  return (
    <div className="App">
      {/* <Editor text={text} onChange={textInput}/> */}
      <textarea 
      id="editor"
      value = {text}
      onChange={(e)=>setText(e.target.value)}
    />
      <h1></h1>
      {/* <Preview addText={marked.parse(text)}></Preview> */}
      <div 
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
      >
      </div>
    </div>
  );
}

export default App;
