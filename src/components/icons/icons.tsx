import React from "react";
import PropTypes from "prop-types";
import IconResearchAudience from "@rhiza/nielsen-icons/react-icons/research-audience";
import {
  FaAmazon,
  FaAws,
  FaJava,
  FaSwift,
  FaPython,
  FaCoffee,
  FaDatabase,
  FaEthereum,
} from "@meronex/icons/fa";
import MdcHexagonSlice6 from "@meronex/icons/mdc/MdcHexagonSlice6";
import {
  SiFlutter,
  SiAndroid,
  SiReact,
  SiGatsby,
  SiFirebase,
  SiRedux,
  SiShopify,
  SiGraphql,
  SiTypescript,
} from "@meronex/icons/si";
import { GrStackOverflow } from "@meronex/icons/gr";
import MdcFileDocumentOutline from "@meronex/icons/mdc/MdcFileDocumentOutline";
import { CgWebsite } from "@meronex/icons/cg";
import { Watson } from "@carbon/icons-react";
import UFIcon from "./UFIcon";
import OpenSeaIcon from "./OpenSeaIcon";

const IconName = {
  AMAZON: "AMAZON",
  AWS: "AWS",
  IBM: "IBM",
  NIELSEN: "NIELSEN",
  FLUTTER: "FLUTTER",
  ANDROID: "ANDROID",
  REACT: "REACT",
  FS: "FULL STACK",
  JAVA: "JAVA",
  CATAN: "CATAN",
  UF: "UNIVERSITY OF FLORIDA",
  OPENSEA: "OPENSEA",
  WEBDEV: "WEBDEV",
  SWIFT: "SWIFT",
  PYTHON: "PYTHON",
  COFFEE: "COFFEE",
  GATSBY: "GATSBY",
  FIREBASE: "FIREBASE",
  REDUX: "REDUX",
  SQL: "SQL",
  GRAPHQL: "GRAPHQL",
  NOSQL: "NOSQL",
  SHOPIFY: "SHOPIFY",
  CRYPTO: "CRYPTO",
  TYPESCRIPT: "TYPESCRIPT",
};

export default function IconByName({
  iconName,
  size = "5em",
  color = "#333333",
}: {
  iconName: string;
  size?: string;
  color?: string;
}) {
  switch (iconName.toUpperCase()) {
    case IconName.NIELSEN:
      return <IconResearchAudience accent="#262626" base="#262626" />;
    case IconName.AMAZON:
      return <FaAmazon size={size} color={color} />;
    case IconName.AWS:
      return <FaAws size={size} color={color} />;
    case IconName.SQL:
      return <FaDatabase size={size} color={color} />;
    case IconName.GRAPHQL:
      return <SiGraphql size={size} color={color} />;
    case IconName.IBM:
      return <Watson color="#ffffff" />;
    case IconName.ANDROID:
      return <SiAndroid size={size} color={color} />;
    case IconName.REACT:
      return <SiReact size={size} color={color} />;
    case IconName.GATSBY:
      return <SiGatsby size={size} color={color} />;
    case IconName.FIREBASE:
      return <SiFirebase size={size} color={color} />;
    case IconName.REDUX:
      return <SiRedux size={size} color={color} />;
    case IconName.SHOPIFY:
      return <SiShopify size={size} color={color} />;
    case IconName.NOSQL:
      return <MdcFileDocumentOutline size={size} color={color} />;
    case IconName.JAVA:
      return <FaJava size={size} color={color} />;
    case IconName.CATAN:
      return <MdcHexagonSlice6 size={size} color={color} />;
    case IconName.UF:
      return <UFIcon size={size} color={color} />;
    case IconName.OPENSEA:
      return <OpenSeaIcon size={size} color={color} />;
    case IconName.FS:
      return <GrStackOverflow size={size} color={color} />;
    case IconName.WEBDEV:
      return <CgWebsite size={size} color={color} />;
    case IconName.SWIFT:
      return <FaSwift size={size} color={color} />;
    case IconName.PYTHON:
      return <FaPython size={size} color={color} />;
    case IconName.COFFEE:
      return <FaCoffee size={size} color={color} />;
    case IconName.CRYPTO:
      return <FaEthereum size={size} color={color} />;
    case IconName.TYPESCRIPT:
      return <SiTypescript size={size} color={color} />;
    case IconName.FLUTTER:
    default: {
      return <SiFlutter size={size} color={color} />;
    }
  }
}
