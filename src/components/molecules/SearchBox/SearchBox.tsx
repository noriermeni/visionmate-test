import {TextStyle, StyleProp} from 'react-native';
import {TextField} from '@components/atoms';
import {useDebounce} from '@src/hooks';
import {colors} from '@src/utils';

interface ISearchBox {
  placeholder?: string;
  fieldStyle?: Partial<StyleProp<TextStyle>>;

  onSearch(text: string): void;
}

const SearchBox = (props: ISearchBox) => {
  const {onSearch, placeholder, fieldStyle} = props;

  const debouncedFunction = useDebounce(onSearch, 100);

  return (
    <TextField
      style={{
        ...fieldStyle,
        color: colors.text,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 4,
      }}
      placeholder={placeholder}
      onChangeText={debouncedFunction}
    />
  );
};

export default SearchBox;
