import { PropsWithChildren } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import { Box } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Editor from 'components/Editor/Editor';
import { defaultFn } from 'utils/functions';

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
  [rest: string]: any;
};

const TextEditorfield = ({
  registration,
  error,
  label,
  setValue = defaultFn,
  ...rest
}: PropsWithChildren<TextEditorfieldProps>) => {
  const handleChangeEditorContent = (content: any) => {
    if (registration?.name) {
      setValue(registration.name, JSON.stringify(content));
    }
  };
  return (
    <FieldWrapper error={error} label={label}>
      <Box
        border="1px solid"
        borderColor="gray.300"
        bg="white"
        overflowY="scroll"
        {...rest}
        borderRadius="30px"
        px="30px"
        py="10px"
      >
        {/* <ReactScrollbar 
            speed={0.8}
            horizontal={false}
            style={{
                height:"100%",
            }}
          > */}
        <Editor
          data={undefined}
          onChange={handleChangeEditorContent}
          holder="editorjs-container"
        />
        {/* </ReactScrollbar> */}
      </Box>
    </FieldWrapper>
  );
};

export default TextEditorfield;
