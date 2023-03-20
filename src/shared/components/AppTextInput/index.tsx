import {
  StyleProp,
  TextInput,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacityProps,
  TextInputProps
} from "react-native";
import * as React from "react";
import AppText from "../AppText";
import { useTheme } from "@react-navigation/native";
import { horizontalScale, verticalScale, RF, Typography } from "@theme";

interface Props extends TouchableOpacityProps {
  style?: any;
  title?: string;
  autoFocus?: any;
  placeholder?: any;
  letterSpacing?: any;
  onSubmitEditing?: any;
  secureTextEntry?: any;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  inputBackgroundColor?: boolean | undefined;
  placehldrTextColor?: boolean | undefined | string;
  defaultValue?: any;
  value?: any;
  editable?: any;
  onChangeText?: any;
  keyboardType?: any;
}

const AppTextInput = (props: Props) => {
  const myTheme: any = useTheme();
  const {
    title,
    style,
    value,
    letterSpacing,
  } = props;

  return (
    <>
      <AppText
        bold
        title={title}
        defaultTextColor
        size={Typography.FONTS.SIZE.LARGE}
        textStyle={[{ paddingLeft: RF(10) }, style]}
      />
      <TextInput
        {...props}
        value={value}
        placeholderTextColor={myTheme?.colors?.border}
        style={[
          styles.inputContainer,
          {
            backgroundColor: myTheme?.colors?.background,
            letterSpacing: letterSpacing,
          },
          props.viewStyle,
          props.textStyle,
        ]}
      />
    </>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: RF(50),
    width: horizontalScale(300),
    alignSelf: "center",
    borderRadius: RF(50),
    marginTop: verticalScale(10),
    paddingHorizontal: Typography?.PADDING.HIGH,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "800",
    fontSize: RF(16),
  },
  text: {
    fontSize: RF(15),
  },
});
