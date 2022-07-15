import {useState} from 'react'

const Editor = ({text, onChange}) => {

  return(
    <textarea 
      id="editor"
      value = {text}
      onChange={(e)=>onChange(e)}
    />
  )
}

export default Editor