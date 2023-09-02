import { PropsWithChildren } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { Box } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Editor from 'components/Editor/Editor';
import { defaultFn } from 'utils/functions';
import uuid from 'react-uuid';
import { OutputData } from '@editorjs/editorjs';
import { safingEditorOutput } from 'utils/editor';

// // import ReactScrollbar from "react-scrollbar"
// const ScrollArea = lazy(() => import('react-scrollbar'));

type TextEditorfieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  defaultValue?: any;
  type?: string;
  inputLeftAddon?: any;
  placeholder?: string;
  outlet?: any;
  setValue?: any;
  defaultData?: OutputData;
  holder?: string;
  [rest: string]: any;
};

const TextEditorfield = ({
  registration,
  error,
  label,
  setValue = defaultFn,
  holder = uuid(),
  defaultData = {
    blocks: [],
  },
  ...rest
}: PropsWithChildren<TextEditorfieldProps>) => {
  const handleChangeEditorContent = (content: any) => {
    if (registration?.name) {
      setValue(registration.name, content);
    }
  };
  return (
    <FieldWrapper error={error} label={label}>
      <Box
        border="1px solid"
        borderColor="gray.300"
        bg="white"
        overflowY="scroll"
        px="30px"
        py="10px"
        borderRadius="30px"
        // id={holder}
        {...rest}
      >
        <Editor
          data={safingEditorOutput(defaultData)}
          onChange={handleChangeEditorContent}
          holder={holder}
        />
        {/* </ReactScrollbar> */}
      </Box>
    </FieldWrapper>
  );
};

export default TextEditorfield;
