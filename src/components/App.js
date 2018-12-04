import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styled from 'styled-components'

const StyledEditor = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid black;
  margin: 0 auto;
`

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h3>Draft WYSIWYG!</h3>
        </header>
        <StyledEditor>
          <Editor
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
            onEditorStateChange={this.onEditorStateChange}
          />
        </StyledEditor>
      </div>
    )
  }
}

export default App
