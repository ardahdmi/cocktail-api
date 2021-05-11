import { Checkbox, Input } from '@chakra-ui/react';
import { useField } from 'formik';

export const MyInput = (props) => {
  const [field] = useField(props);

  return (
    <Input
      focusBorderColor='orange.400'
      placeholder='tomato'
      _placeholder={{ color: 'white', fontWeight: '700' }}
      size='lg'
      color='white'
      {...field}
    />
  );
};

export const AlcoholBaseCheckbox = (props) => {
  const [field] = useField(props);

  return (
    <Checkbox size='lg' colorScheme='orange' spacing='.6rem' {...field}>
      {props.inputName}
    </Checkbox>
  );
};
