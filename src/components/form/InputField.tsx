import { PropsWithChildren } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import {
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { UseFormRegisterReturn } from 'react-hook-form';
import If from 'common/If';
import { useIntl } from 'react-intl';
import Switcher from 'common/Switcher';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  defaultValue?: any;
  type?: string;
  inputLeftAddon?: any;
  placeholder?: string;
  outlet?: any;
  wrapperStyles?: any;
  [rest: string]: any;
};

const InputField = ({
  registration,
  error,
  label,
  defaultValue,
  placeholder = '',
  type = 'text',
  inputStyle = {},
  inputLeftAddon = null,
  children,
  wrapperStyles = {},
  ...rest
}: PropsWithChildren<InputFieldProps>) => {
  const { isOpen: isShowPasswrd, onToggle: toogleShowPassword } =
    useDisclosure();
  const int1 = useIntl();
  return (
    <FieldWrapper wrapperStyles={wrapperStyles} error={error} label={label}>
      <InputGroup {...inputStyle}>
        <If condition={inputLeftAddon}>
          <InputLeftAddon children={inputLeftAddon?.children ?? ''} />
        </If>
        <If condition={type === 'password'}>
          <Switcher Right={InputLeftElement} Left={InputRightElement}>
            <Icon
              cursor="pointer"
              onClick={toogleShowPassword}
              fontSize={'sm'}
              as={isShowPasswrd ? FiEyeOff : FiEye}
            />
          </Switcher>
          {/* <InputRightElement 
            cursor={"pointer"}
            onClick={OnToogleShowPassword}
          >
          
          </InputRightElement> */}
        </If>

        {children}

        <Input
          {...registration}
          defaultValue={defaultValue ?? ''}
          type={isShowPasswrd ? 'text' : type}
          placeholder={
            placeholder ? int1.formatMessage({ id: placeholder }) : ''
          }
          py={2}
          fontSize="sm"
          {...rest}
        />
      </InputGroup>
    </FieldWrapper>
  );
};

InputField.propTypes = {};

export default InputField;
