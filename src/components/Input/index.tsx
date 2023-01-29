import {Input as InputNativeBase, IInputProps, FormControl} from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}
export function Input({ errorMessage = null, isInvalid, ...rest}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return(
    <FormControl>
      <InputNativeBase
      fontSize="md"
      h={16}
      bg="gray.200"
      isInvalid={invalid}
      placeholderTextColor="gray.500"
      _focus={{
        bg: "gray.400",
        borderWidth: 2,
        borderColor: "green.500"
      }}
      _invalid={{
        borderWidth: 2,
        borderColor: "red.500"
      }}
      {...rest}
      />

      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
