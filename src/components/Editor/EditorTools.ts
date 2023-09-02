//./components/EditorTools.js
import Code from '@editorjs/code';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Embed from '@editorjs/embed';
import Marker from '@editorjs/marker';
import SimpleImage from '@editorjs/simple-image';
import List from '@editorjs/list';
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
export const EDITOR_TOOLS = {
  marker: Marker,
  code: Code,
  header: {
    class: Header,
    tunes: ['anyTuneName'],
  },
  embed: Embed,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    tunes: ['anyTuneName'],
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  image: SimpleImage,
  anyTuneName: {
    class: AlignmentTuneTool,
    config: {
      default: 'right',
      blocks: {
        header: 'right',
        list: 'right',
      },
    },
  },
};
