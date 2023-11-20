import React from "react";

import { Watson } from "@carbon/icons-react";
import { CgWebsite } from "@meronex/icons/cg";
import {
  FaAmazon,
  FaAws,
  FaCoffee,
  FaDatabase,
  FaEthereum,
  FaJava,
  FaPython,
  FaServer,
  FaSwift,
} from "@meronex/icons/fa";
import { GrStackOverflow } from "@meronex/icons/gr";
import MdcFileDocumentOutline from "@meronex/icons/mdc/MdcFileDocumentOutline";
import MdcHexagonSlice6 from "@meronex/icons/mdc/MdcHexagonSlice6";
import MdcTelevisionClassic from "@meronex/icons/mdc/MdcTelevisionClassic";
import {
  SiAndroid,
  SiDjango,
  SiFirebase,
  SiFlutter,
  SiGatsby,
  SiGraphql,
  SiNextDotJs,
  SiReact,
  SiRedux,
  SiShopify,
  SiTypescript,
} from "@meronex/icons/si";

import OpenSeaIcon from "./OpenSeaIcon";
import UFIcon from "./UFIcon";

const IconName = {
  AMAZON: "AMAZON",
  AWS: "AWS",
  IBM: "IBM",
  NIELSEN: "NIELSEN",
  FLUTTER: "FLUTTER",
  ANDROID: "ANDROID",
  REACT: "REACT",
  FS: "FULL STACK",
  DS: "DISTRIBUTED SYSTEMS",
  JAVA: "JAVA",
  CATAN: "CATAN",
  UF: "UNIVERSITY OF FLORIDA",
  OPENSEA: "OPENSEA",
  WEBDEV: "WEBDEV",
  SWIFT: "SWIFT",
  PYTHON: "PYTHON",
  COFFEE: "COFFEE",
  GATSBY: "GATSBY",
  NEXTJS: "NEXTJS",
  FIREBASE: "FIREBASE",
  DJANGO: "DJANGO",
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
  className = "",
}: {
  iconName: string;
  size?: string;
  color?: string;
  className?: string;
}) {
  switch (iconName.toUpperCase()) {
    case IconName.NIELSEN:
      return (
        <MdcTelevisionClassic size={size} color={color} className={className} />
      );
    case IconName.AMAZON:
      return <FaAmazon size={size} color={color} className={className} />;
    case IconName.AWS:
      return <FaAws size={size} color={color} className={className} />;
    case IconName.SQL:
      return <FaDatabase size={size} color={color} className={className} />;
    case IconName.GRAPHQL:
      return <SiGraphql size={size} color={color} className={className} />;
    case IconName.IBM:
      return <Watson color="#ffffff" />;
    case IconName.ANDROID:
      return <SiAndroid size={size} color={color} className={className} />;
    case IconName.REACT:
      return <SiReact size={size} color={color} className={className} />;
    case IconName.GATSBY:
      return <SiGatsby size={size} color={color} className={className} />;
    case IconName.FIREBASE:
      return <SiFirebase size={size} color={color} className={className} />;
    case IconName.REDUX:
      return <SiRedux size={size} color={color} className={className} />;
    case IconName.SHOPIFY:
      return <SiShopify size={size} color={color} className={className} />;
    case IconName.DJANGO:
      return <SiDjango size={size} color={color} className={className} />;
    case IconName.NEXTJS:
      return <SiNextDotJs size={size} color={color} className={className} />;
    case IconName.NOSQL:
      return (
        <MdcFileDocumentOutline
          size={size}
          color={color}
          className={className}
        />
      );
    case IconName.JAVA:
      return <FaJava size={size} color={color} className={className} />;
    case IconName.CATAN:
      return (
        <MdcHexagonSlice6 size={size} color={color} className={className} />
      );
    case IconName.UF:
      return <UFIcon />;
    case IconName.OPENSEA:
      return <OpenSeaIcon />;
    case IconName.FS:
      return <GrStackOverflow size={size} color={color} />;
    case IconName.DS:
      return <FaServer size={size} color={color} className={className} />;
    case IconName.WEBDEV:
      return <CgWebsite size={size} color={color} className={className} />;
    case IconName.SWIFT:
      return <FaSwift size={size} color={color} className={className} />;
    case IconName.PYTHON:
      return <FaPython size={size} color={color} className={className} />;
    case IconName.COFFEE:
      return <FaCoffee size={size} color={color} className={className} />;
    case IconName.CRYPTO:
      return <FaEthereum size={size} color={color} className={className} />;
    case IconName.TYPESCRIPT:
      return <SiTypescript size={size} color={color} className={className} />;
    case IconName.FLUTTER:
    default: {
      return <SiFlutter size={size} color={color} className={className} />;
    }
  }
}
