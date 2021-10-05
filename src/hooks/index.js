import React from 'react';
import { EditorProvider } from './editor';

const AppProvider = ({ children }) => {
  return (
    <EditorProvider>
        {children}
    </EditorProvider>
  )
}

export default AppProvider;
