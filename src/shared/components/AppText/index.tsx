import React from "react";
import {
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
  Text as RNText,

} from "react-native";
import { RF } from "@theme";
import { useTheme } from "@react-navigation/native";

interface Props extends TextProps {
  bold?: any;
  size?: any;
  title?: any;
  right?: any;
  center?: any;
  bolder?: any;
  medium?: any;
  boldest?: any;
  regular?: any;
  semiBold?: any;
  colorText?: any;
  numberOfLines?: any;
  onPress?: () => void;
  defaultTextColor?: any;
  textStyle?: StyleProp<TextStyle>;
}
const AppText = (props: Partial<Props>) => {
  const myTheme: any = useTheme();
  const {
    bold,
    size,
    right,
    center,
    medium,
    bolder,
    boldest,
    regular,
    semiBold,
    colorText,
    defaultTextColor,
  } = props;
  return (
    <RNText
      {...props}
      style={[
        styles.text,
        bold && styles.bold,
        right && styles.right,
        bolder && styles.bolder,
        center && styles.center,
        medium && styles.medium,
        regular && styles.regular,
        boldest && styles.boldest,
        semiBold && styles.semiBold,
        size && { fontSize: RF(size) },
        { color: defaultTextColor ? myTheme.colors.text : colorText },
        props.textStyle,
      ]}
    >
      {props.title}
    </RNText>
  );
};
export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: RF(12.5),
    fontFamily: "Plus Jakarta Sans",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  regular: {
    fontFamily: "PlusJakartaSans-Regular",
  },
  medium: {
    fontFamily: "PlusJakartaSans-Medium",
  },
  semiBold: {
    fontFamily: "PlusJakartaSans-SemiBold",
  },
  bold: {
    fontFamily: "PlusJakartaSans-Bold",
  },
  bolder: {
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
  boldest: {
    fontFamily: "PlusJakartaSans-ExtraBoldItalic",
  },
});
