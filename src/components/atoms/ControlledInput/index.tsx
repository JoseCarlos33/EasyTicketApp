import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import { theme } from 'src/utils/theme';

import {
  Input,
  InputLabel,
  InputPassword,
  ContentLabel,
  InputContent,
  ErrorText
} from './styles';

interface InputBaseProps {
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  label: string;
  onChangeText?: any;
  value?: any;
  animatedStyle?: any;
  hasError?: any;
  secureTextEntry?: boolean;
}

function InputBase({
  placeholder,
  label,
  onChangeText,
  value,
  animatedStyle,
  hasError,
  secureTextEntry
}: InputBaseProps) {
  return (
    <InputContent style={[animatedStyle]}>
      <Input
        placeholder={placeholder}
        autoCapitalize={"none"}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        style={{
          borderColor: hasError 
            ? theme.color.red 
            : !!value
              ? theme.color.dark_blue
              : theme.color.gray_medium,
        }}
      />
      <ContentLabel>
        <InputLabel
        style={{
          color: hasError 
            ? theme.color.red 
            : !!value
              ? theme.color.dark_blue 
              : theme.color.gray_medium
        }}
        >{label}</InputLabel>
      </ContentLabel>
    </InputContent>

  );
}

export default function ControlledInput({
  defaultValue,
  placeholder,
  label,
  name = "",
  animatedStyle,
  secureTextEntry = false
}: InputBaseProps) {

  const { control, formState: { errors } } = useFormContext();
  const hasError = errors?.[name]?.message;

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputBase
            defaultValue={defaultValue}
            placeholder={placeholder}
            label={label}
            onChangeText={onChange}
            value={value}
            animatedStyle={animatedStyle}
            name={name}
            hasError={hasError}
            secureTextEntry={secureTextEntry}
          />
        )}
        name={name}
      />
      <View style={{
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 4
      }}>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) =>
            <ErrorText style={{ color: "#f60000" }}>
              {message}
            </ErrorText>
          }
        />
      </View>
    </>
  )
};