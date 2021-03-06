import { Dimensions } from "react-native";
const { width, height } =  Dimensions.get("window");

export const COLORS = {
    //suuri ongo
    primary : "#a6c13c",
    secondary: "#454c5d",

    //colors
    black: "#1e1f20",
    white: "#FFFFFF",
    lightGray: "#ABAFB8",
    lightGray2: "#EFEFF0",
    lightGray3: "#D4D5D6",
    gray: "#BEC1D2",
    blue: "#42B0FF",
    darkGreen: "#59990f",
    darkGray: "#898C95",
    tranparentLightGray: "#CCD4D5D6",
    tranparentLightGray1:  "rgba(255, 255, 255, 0.7)",
};

export const SIZES = {
    base: 6,
    font: 14,   
    radius: 12,
    padding: 24,

    largeTitle: 50,
    h1: 30, 
    h2: 22, 
    h3: 16, 
    h4: 14,
    body1: 30, 
    body2: 20,
    body3: 16,
    body4: 14,

    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily:"Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1:{ fontFamily:"Roboto-Black", fontSize:SIZES.h1, lineHeight: 36 },
    h2:{ fontFamily:"Roboto-Bold", fontSize:SIZES.h2, lineHeight: 30 },
    h3:{ fontFamily:"Roboto-Bold", fontSize:SIZES.h3, lineHeight: 22 },
    h4:{ fontFamily:"Roboto-Bold", fontSize:SIZES.h4, lineHeight: 22 },
    body1:{ fontFamily:"Roboto-Regular", fontSize:SIZES.body1, lineHeight: 36 },
    body2:{ fontFamily:"Roboto-Regular", fontSize:SIZES.body2, lineHeight: 30 },
    body3:{ fontFamily:"Roboto-Regular", fontSize:SIZES.body3, lineHeight: 22 },
    body4:{ fontFamily:"Roboto-Regular", fontSize:SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS};
export default appTheme;