import {TextInput, TextInputProps} from 'react-native';

interface ITextField extends TextInputProps {}

const TextField = (props: ITextField) => {
  return <TextInput {...props} />;
};

export default TextField;
