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
  onChangeText?: (...event: any[]) => void;
  value?: string;
  handleFilterResults?: () => void;
}

function SearchInput({
  placeholder,
  onChangeText,
  value,
  handleFilterResults
}: ControlledSearchInputProps) {
  return (
    <Input>
      <InputField
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={handleFilterResults}
        returnKeyType="send"
        autoCapitalize='none'
        autoCorrect={false}
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
  placeholder = "",
  disabled = false,
  name = "",
  handleFilterResults = () => { }
}: ControlledSearchInputProps) {

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <SearchInput
          placeholder={placeholder}
          disabled={disabled}
          onChangeText={onChange}
          value={value}
          name={name}
          handleFilterResults={handleFilterResults}
        />
      )}
      name={name}
    />
  )
}