
import {useQuill} from 'react-quilljs'

import 'quill/dist/quill.snow.css'
import Header from '../../components/Header';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { useEffect } from 'react';

function TextEditor() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const {quill, quillRef} = useQuill();

    useEffect(() => {
        if(quill) {
            quill.clipboard.dangerouslyPasteHTML('<h2>Enter your Text</h2>')
        }
    })
  return (
    <Box m={'20px'} height={'500px'} borderColor={'transparent'}>
        <Header title={'Text Editor'} subtitle={'Quill Editor'} />
        <div style={{backgroundColor: 'transparent', height: "400px"}}>
            <div ref={quillRef} />
        </div>
    </Box>

  )
}

export default TextEditor