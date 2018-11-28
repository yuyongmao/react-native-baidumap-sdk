import * as React from "react";
import * as PropTypes from "prop-types";
import { requireNativeComponent, ViewProps, ViewPropTypes } from "react-native";
import {
  LatLngPropType,
  LocationPropType,
  mapEventsPropType
} from "../prop-types";
import { LatLng, Location, MapStatus, Point, Region } from "../types";
import Component from "../component";
import Marker from "./marker";
import Callout from "./callout";
import Cluster from "./cluster";
import Polyline from "./polyline";
import Polygon from "./polygon";
import Circle from "./circle";
import HeatMap from "./heat-map";

type Status = {
  center?: LatLng;
  point?: Point;
  region?: Region;
  overlook?: number;
  rotation?: number;
  zoomLevel?: number;
};

type Props = {
  satellite?: boolean;
  trafficEnabled?: boolean;
  baiduHeatMapEnabled?: boolean;
  indoorEnabled?: boolean;
  buildingsDisabled?: boolean;
  minZoomLevel?: number;
  maxZoomLevel?: number;
  compassDisabled?: boolean;
  zoomControlsDisabled?: boolean;
  scaleBarDisabled?: boolean;
  scrollDisabled?: boolean;
  overlookDisabled?: boolean;
  rotateDisabled?: boolean;
  zoomDisalbed?: boolean;
  center?: LatLng;
  zoomLevel?: number;
  rotation?: number;
  overlook?: number;
  paused?: boolean;
  locationEnabled?: boolean;
  location?: Location;
  locationMode?: "normal" | "follow" | "compass";
  campassMode?: true;
  onLoad?: () => void;
  onClick?: (coordinate: LatLng) => void;
  onLongClick?: (coordinate: LatLng) => void;
  onDoubleClick?: (coordinate: LatLng) => void;
  onStatusChange?: (mapStatus: MapStatus) => void;
} & ViewProps;

const events = [
  "onLoad",
  "onClick",
  "onLongClick",
  "onDoubleClick",
  "onStatusChange"
];

export default class MapView extends Component<Props> {
  static propTypes = {
    ...ViewPropTypes,
    ...mapEventsPropType(events),
    satellite: PropTypes.bool,
    trafficEnabled: PropTypes.bool,
    baiduHeatMapEnabled: PropTypes.bool,
    indoorEnabled: PropTypes.bool,
    buildingsDisabled: PropTypes.bool,
    minZoomLevel: PropTypes.number,
    maxZoomLevel: PropTypes.number,
    compassDisabled: PropTypes.bool,
    zoomControlsDisabled: PropTypes.bool,
    scaleBarDisabled: PropTypes.bool,
    scrollDisabled: PropTypes.bool,
    overlookDisabled: PropTypes.bool,
    rotateDisabled: PropTypes.bool,
    zoomDisabled: PropTypes.bool,
    center: LatLngPropType,
    zoomLevel: PropTypes.number,
    rotation: PropTypes.number,
    overlook: PropTypes.number,
    locationEnabled: PropTypes.bool,
    location: LocationPropType,
    locationMode: PropTypes.string,
    paused: PropTypes.bool
  };

  setStatus(status: Status, duration: number = 0) {
    this.call("setStatus", [status, duration]);
  }

  nativeComponentName = "BaiduMapView";

  render() {
    const props = {
      ...this.props,
      ...this.handlers(events)
    };
    return <BaiduMapView {...props} />;
  }

  static Marker = Marker;
  static Callout = Callout;
  static Cluster = Cluster;
  static Polyline = Polyline;
  static Polygon = Polygon;
  static Circle = Circle;
  static HeatMap = HeatMap;
}

const BaiduMapView = requireNativeComponent("BaiduMapView", MapView);
