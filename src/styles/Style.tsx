import React from "react"
import { CSSProperties } from "react"
import { StyleSheet } from "react-native"
import { Div, WINDOW_WIDTH } from "react-native-magnus"
import Colors from "./Colors"

export default Object.freeze({
  headerText: {
    fontSize: "h1",
    fontWeight: "600" as FontWeight,
  },
  subTitleText: {
    fontSize: "h3",
    fontWeight: "600",
    title: {},
  },
  graySubtitle: {
    fontSize: "h5",
    fontWeight: "500" as FontWeight,
    color: Colors.text.grayDark,
  },
})

type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"

export const scale = (val: number) => Math.floor((WINDOW_WIDTH / 375) * val)
