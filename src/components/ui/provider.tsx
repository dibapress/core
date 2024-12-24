"use client";

import React from "react";
import {
  ChakraProvider,
  defaultSystem,
  SystemConfig,
  SystemContext,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { useTheme } from "../../contexts/ThemeContext";

export function Provider(props: ColorModeProviderProps) {
  const theme = useTheme();

  return (
    <ChakraProvider value={theme.theme as SystemContext}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
