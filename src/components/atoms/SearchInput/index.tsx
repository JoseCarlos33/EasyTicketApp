import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {
  Input,
  InputField,
  InputButton
} from './styles';

IconMaterial.loadFont();

interface ControlledSearchInputProps {
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  isFocused?: boolean;
  onChangeText?: (...event: any[]) => void;
  value?: string;
  handleFilterResults?: () => void;
  onFocus?: () => void;
  inputRef?: any;
}

function SearchInput({
  placeholder,
  onChangeText,
  value,
  handleFilterResults,
  onFocus,
  inputRef,
  isFocused
}: ControlledSearchInputProps) {
  
  if(isFocused){
    inputRef?.current?.focus()
  }

  return (
    <Input>
      <InputField
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={handleFilterResults}
        returnKeyType="send"
        autoCapitalize='none'
        autoCorrect={false}
        onFocus={onFocus}
      />
      <InputButton
        testID="input-button"
        onPress={handleFilterResults}
        disabled={value === ''}
      >
        <IconMaterial name="search" size={20} />
      </InputButton>
    </Input>
  );
}

export default function ControlledSearchInput({
  inputRef,
  placeholder = "",
  disabled = false,
  isFocused = false,
  name = "",
  handleFilterResults = () => { },
  onFocus = () => { },
}: ControlledSearchInputProps) {

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      name={name}
      render={({ field: { onChange, onBlur, value} }) => (
        <SearchInput
          inputRef={inputRef}
          placeholder={placeholder}
          disabled={disabled}
          onChangeText={onChange}
          value={value}
          name={name}
          handleFilterResults={handleFilterResults}
          onFocus={onFocus}
          isFocused={isFocused}
        />
      )}
    />
  )
}