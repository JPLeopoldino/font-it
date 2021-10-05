/* eslint-disable no-console */
import React, {
  useState,
  useMemo,
  createContext,
  useContext,
  useCallback
} from 'react'
import {
  Transforms,
  Editor,
  Text,
  Range,
  createEditor,
  Element as SlateElement
} from 'slate';
import isUrl from 'is-url'
import { Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

const EditorContext = createContext();

const EditorProvider = ({ children }) => {

  const [openModal, setOpenModal] = useState(false);

  const [linkValue, setLinkValue] = useState('');

  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    }
  ]);

  const withLinks = editor => {
    const { insertData, insertText, isInline } = editor
  
    editor.isInline = element => {
      return element.type === 'link' ? true : isInline(element)
    }
  
    editor.insertText = text => {
      if (text && isUrl(text)) {
        wrapLink(editor, text)
      } else {
        insertText(text)
      }
    }
  
    editor.insertData = data => {
      const text = data.getData('text/plain')
  
      if (text && isUrl(text)) {
        wrapLink(editor, text)
      } else {
        insertData(data)
      }
    }
  
    return editor
  }

  const editor = useMemo(() => withLinks(withHistory(withReact(createEditor()))), [])

  const handleOpenModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [setOpenModal, openModal]);

  const unwrapLink = useCallback((editor) => {
    Transforms.unwrapNodes(editor, {
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
    })
  }, [])

  const isLinkActive = useCallback((editor) => {
    const [link] = Editor.nodes(editor, {
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
    })
    return !!link
  },[])

  const wrapLink = useCallback((editor, url) => {
    if (isLinkActive(editor)) {
      unwrapLink(editor)
    }
  
    const { selection } = editor
    const isCollapsed = selection && Range.isCollapsed(selection)
    const link = {
      type: 'link',
      url,
      children: isCollapsed ? [{ text: url }] : [],
    }
  
    if (isCollapsed) {
      Transforms.insertNodes(editor, link)
    } else {
      Transforms.wrapNodes(editor, link, { split: true })
      Transforms.collapse(editor, { edge: 'end' })
    }
  }, [unwrapLink, isLinkActive])

  const insertLink = useCallback((editor, url) => {
    if (editor.selection) {
      wrapLink(editor, url)
    }
  }, [wrapLink])

  const handleAddLink = useCallback((event) => {
    try {
      event.preventDefault()
      isLinkActive(editor)
      const url = window.prompt('Enter the URL of the link:')
      if (!url) return
      insertLink(editor, url)
    } catch (error) {
      console.log(error)
    }
  }, [editor, insertLink, isLinkActive])

  const handleRemoveLink = useCallback((event) => {
    try {
      isLinkActive(editor)
      if (isLinkActive(editor)) {
        unwrapLink(editor)
      }  
    } catch (error) {
      console.log(error)
    }
  }, [isLinkActive, unwrapLink, editor])

    const CustomEditor = {

        // ------------ Conditionals

        isLinkMarkActive(editor) {
            const [match] = Editor.nodes(editor, {
                match: n => n.link === true,
                universal: true,
            })

            return !!match
        },

        isBoldMarkActive(editor) {
            const [match] = Editor.nodes(editor, {
                match: n => n.bold === true,
                universal: true,
            })

            return !!match
        },

        isItalicActive(editor) {
          const [match] = Editor.nodes(editor, {
              match: n => n.italic === true,
              universal: true,
            })
          
            return !!match
        },
  
        isUnderlineActive(editor) {
            const [match] = Editor.nodes(editor, {
                match: n => n.underline === true,
                universal: true,
            })
          
            return !!match
        },
        isHeaderActive(editor) {
            const [match] = Editor.nodes(editor, {
                match: n => n.header === true,
                universal: true,
            })
          
            return !!match
        },

        isCodeBlockActive(editor) {
            const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
            })

            return !!match
        },

        isListBlockActive(editor) {
          const [match] = Editor.nodes(editor, {
              match: n => n.type === 'list',
          })
  
          return !!match
        },

        isQuoteBlockActive(editor) {
          const [match] = Editor.nodes(editor, {
              match: n => n.type === 'quote',
          })
  
          return !!match
        },

        // ------------ Togglers

        toggleLinkMark(editor) {
            const isActive = CustomEditor.isLinkMarkActive(editor)
            Transforms.setNodes(
                editor,
                { link: isActive ? null : true },
                { match: n => Text.isText(n), split: true }
            )
        },

        toggleBoldMark(editor) {
            const isActive = CustomEditor.isBoldMarkActive(editor)
            Transforms.setNodes(
                editor,
                { bold: isActive ? null : true },
                { match: n => Text.isText(n), split: true }
            )
        },

        toggleItalicMark(editor) {
            const isActive = CustomEditor.isItalicActive(editor)
            Transforms.setNodes(
                editor,
                { italic: isActive ? null : true },
                { match: n => Text.isText(n), split: true }
            )
        },
    
        toggleUnderlineMark(editor) {
            const isActive = CustomEditor.isUnderlineActive(editor)
            Transforms.setNodes(
                editor,
                { underline: isActive ? null : true },
                { match: n => Text.isText(n), split: true }
            )
        },

        toggleHeaderMark(editor) {
            const isActive = CustomEditor.isHeaderActive(editor)
            Transforms.setNodes(
                editor,
                { header: isActive ? null : true },
                { match: n => Text.isText(n), split: true }
            )
        },

        toggleCodeBlock(editor) {
            const isActive = CustomEditor.isCodeBlockActive(editor)
            Transforms.setNodes(
                editor,
                { type: isActive ? null : 'code' },
                { match: n => Editor.isBlock(editor, n) }
            )
        },

        toggleListBlock(editor) {
            const isActive = CustomEditor.isListBlockActive(editor)
            Transforms.setNodes(
                editor,
                { type: isActive ? null : 'list' },
                { match: n => Editor.isBlock(editor, n) }
            )
        },

        toggleQuoteBlock(editor) {
          const isActive = CustomEditor.isQuoteBlockActive(editor)
          Transforms.setNodes(
              editor,
              { type: isActive ? null : 'quote' },
              { match: n => Editor.isBlock(editor, n) }
          )
      },
    }

  return (
    <EditorContext.Provider
      value={{
        customEditor: CustomEditor,
        editor: editor,
        linkValue: linkValue,
        setLinkValue: setLinkValue,
        openModal: openModal,
        handleOpenModal: handleOpenModal,
        handleAddLink: handleAddLink,
        handleRemoveLink: handleRemoveLink,
        isLinkActive: isLinkActive,
      }}
    >
      <Slate
        editor={editor}
        value={value}
        onChange={value => setValue(value)}
      >
        {children}
      </Slate>
    </EditorContext.Provider>
  )
}

const useEditor = () => {
  const context = useContext(EditorContext)

  if (!context) {
    throw new Error(
      'useEditor must be used within an EditorProvider'
    )
  }

  return context
}

export { useEditor, EditorProvider }
