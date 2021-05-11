import { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { StateContext, DispatchContext } from '../../context/AppContext';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ButtonGroup,
  Box,
  Center,
  Container,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  HStack,
  Progress,
  Icon,
} from '@chakra-ui/react';
import { FaCocktail } from 'react-icons/fa';
import { MyInput, AlcoholBaseCheckbox } from './CocktailForm.elements';
import { data } from '../../data';
import Link from 'next/link';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string('')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const CocktailForm = () => {
  const initialFocusRef = useRef();
  const [formData, setFormData] = useState('');
  const [popover, setPopover] = useState(1);
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const router = useRouter();
  return (
    <>
      <Formik
        initialValues={{ firstName: '', alcoholType: [] }}
        onSubmit={(data, actions) => {
          const { setSubmitting, resetForm } = actions;

          setSubmitting(true);
          resetForm();
          // make async call
          setFormData(data);
          dispatch({ type: 'FORM_SUBMIT', payload: data });
          router.push('/results');
          setSubmitting(false);
        }}
        validationSchema={SignupSchema}>
        {({ errors, touched }) => (
          <Form>
            <Container maxW='xl' centerContent>
              <Center>
                <Popover
                  initialFocusRef={initialFocusRef}
                  placement='auto'
                  closeOnBlur={false}>
                  {({ onClose }) => (
                    <>
                      <PopoverTrigger>
                        <Button
                          borderRadius='md'
                          p={6}
                          as='a'
                          variant='solid'
                          colorScheme='gray'
                          display='inline-flex'
                          alignItems='center'
                          justifyContent='center'
                          w={{ base: 'full', sm: 'auto' }}
                          bg='orange.300'
                          size='lg'
                          color='whiteAlpha.900'>
                          Find your next cocktail
                          <Icon ml={2} as={FaCocktail} />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        color='white'
                        bg='orange.300'
                        border='none'
                        shadow='dark-lg'
                        w='full'>
                        <PopoverHeader pt={4} fontWeight='bold' border='0'>
                          {data[popover - 1]}
                        </PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>
                          {popover === 1 ? (
                            <HStack spacing={7} direction='row'>
                              <AlcoholBaseCheckbox
                                name='alcoholType'
                                type='checkbox'
                                value='tequila'
                                inputName='Tequila'
                              />
                              <AlcoholBaseCheckbox
                                name='alcoholType'
                                type='checkbox'
                                value='vodka'
                                inputName='Vodka'
                              />
                              <AlcoholBaseCheckbox
                                name='alcoholType'
                                type='checkbox'
                                value='gin'
                                inputName='Gin'
                              />
                            </HStack>
                          ) : (
                            <HStack spacing={7} direction='column'>
                              <Field
                                name='firstName'
                                type='input'
                                as={MyInput}
                              />
                              {errors.firstName && touched.firstName ? (
                                <div
                                  style={{ color: 'red', fontWeight: '900' }}>
                                  {errors.firstName}
                                </div>
                              ) : null}
                            </HStack>
                          )}
                        </PopoverBody>
                        <PopoverFooter
                          border='0'
                          d='flex'
                          alignItems='center'
                          justifyContent='space-between'
                          pb={4}>
                          <Box fontSize='sm'>Step {popover} of 2</Box>
                          <ButtonGroup size='sm'>
                            {popover === 2 && (
                              <Button
                                colorScheme='orange'
                                onClick={() => setPopover(popover - 1)}>
                                Previous
                              </Button>
                            )}
                            {popover < 2 ? (
                              <Button
                                colorScheme='green'
                                ref={initialFocusRef}
                                onClick={() => setPopover(popover + 1)}>
                                Next
                              </Button>
                            ) : (
                              <Button
                                colorScheme='green'
                                ref={initialFocusRef}
                                onClick={onClose}
                                type='submit'>
                                Submit
                              </Button>
                            )}
                          </ButtonGroup>
                        </PopoverFooter>
                      </PopoverContent>
                    </>
                  )}
                </Popover>
              </Center>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CocktailForm;
