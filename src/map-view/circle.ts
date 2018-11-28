import {
  ColorPropType,
  requireNativeComponent,
  ViewPropTypes
} from "react-native";
import * as PropTypes from "prop-types";
import { LatLngPropType } from "../prop-types";

export default requireNativeComponent("BaiduMapCircle", {
  propTypes: {
    ...ViewPropTypes,
    center: LatLngPropType.isRequired,
    radius: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeColor: ColorPropType,
    fillColor: ColorPropType
  }
});
