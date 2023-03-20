import React from "react";
import { cross } from "@assets";
import AppText from "../AppText";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { moderateScale, RF, Typography } from "@theme";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

interface Props {
  source?: any;
  title?: string;
  textStyle?: any;
  showLeftIcon?: any;
  showRightIcon?: any;
  onPressRightIcon?: any;
  rightIcon?:any;
  backAction?: () => void;
  onPressLogo?: () => void;
}

const AppHeader = (props: Props) => {
  const {
    title,
    source,
    textStyle,
    backAction,
    showLeftIcon,
    showRightIcon,
    onPressRightIcon,
    rightIcon
  } = props;
  const myTheme: any = useTheme();
  const navigation = useNavigation();
  const styles = useStyles(myTheme.colors);

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: myTheme?.colors?.white,
          },
        ]}
      >
        <View style={styles.left}>
          {showLeftIcon && (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.backView}
              onPress={backAction ? backAction : navigation.goBack}
            >
              <Image source={source} style={styles.img} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.txt}>
          <AppText
            medium
            title={title}
            defaultTextColor
            textStyle={textStyle}
            size={Typography.FONTS.SIZE.XXLARGE}
          />
        </View>

        <View style={styles.right}>
          {showRightIcon && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={onPressRightIcon}
              style={styles.rightButton}
            >
              <Image source={rightIcon} style={styles.rightIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    rightIcon: { width: RF(32), height: RF(32) },
    txt: {
      alignItems: "center",
      width: "85%",
    },
    img: {
      width: RF(30),
      height: RF(30),
      tintColor: "#000",
      resizeMode: "contain",
    },
    container: {
      width: "100%",
      flexDirection: "row",
    },
    rightButton: {
      alignItems: "center",
      marginRight: Typography.MARGIN.LOW,
    },
    right: {
      width: "10%",
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      width: RF(22),
      height: RF(25),
    },
    logo: {
      height: RF(25),
      width: RF(40),
    },
    title: {
      width: RF(200),
      color: colors.psp_text,
      fontSize: RF(20),
    },
    backView: {
      alignItems: "center",
    },
    left: {
      width: "10%",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default AppHeader;
