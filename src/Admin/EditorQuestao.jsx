import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class EditorQuestao extends React.Component {
    constructor(props) {
      super(props)
      this.state = { text: '',
                     theme: 'snow'
                 }
      this.handleChange = this.handleChange.bind(this)
      this.modules = {
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
           {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }
      this.formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]
      
    }
  
    handleChange(value) {
      this.setState({ text: value, theme: 'snow' })
      console.log(this.state.text);
    }
  
    render() {
      return (
        <ReactQuill 
            theme={this.state.theme}
            value={this.state.text}
            modules={this.modules}
            formats={this.formats}
            onChange={this.handleChange} />
      )
    }
  }

  export default (EditorQuestao);