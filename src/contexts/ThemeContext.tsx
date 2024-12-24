import {
  createSystem,
  defaultConfig,
  defaultSystem,
  SystemContext,
} from "@chakra-ui/react";
import React from "react";

interface ContextProps {
  color: string;
  theme: SystemContext;
  setColor: (value: string) => void;
}

const Context = React.createContext<ContextProps>({
  color: "green",
  theme: defaultSystem,
  setColor: () => {},
});

type Props = React.PropsWithChildren<{}>;

export default ({ children }: Props) => {
  const [color, setColor] = React.useState("green");

  const theme = React.useMemo(() => {
    return createSystem(defaultConfig, {
      disableLayers: true,
      utilities: {
        accentColor: { property: "color", values: ["red"] },
      },
      theme: {
        tokens: {
          colors: {
            blue: {
              50: { value: "#00aeff" },
              100: { value: "#00aeff" },
              200: { value: "#00aeff" },
              300: { value: "#00aeff" },
              400: { value: "#00aeff" },
              500: { value: "#00aeff" },
              600: { value: "#00aeff" },
              700: { value: "#00aeff" },
              800: { value: "#00aeff" },
              900: { value: "#00aeff" },
              950: { value: "#00aeff" },
            },
            green: {
              50: { value: "#2dde98" },
              100: { value: "#2dde98" },
              200: { value: "#2dde98" },
              300: { value: "#2dde98" },
              400: { value: "#2dde98" },
              500: { value: "#2dde98" },
              600: { value: "#2dde98" },
              700: { value: "#2dde98" },
              800: { value: "#2dde98" },
              900: { value: "#2dde98" },
              950: { value: "#2dde98" },
            },
            cyan: {
              50: { value: "#1cc7d0" },
              100: { value: "#1cc7d0" },
              200: { value: "#1cc7d0" },
              300: { value: "#1cc7d0" },
              400: { value: "#1cc7d0" },
              500: { value: "#1cc7d0" },
              600: { value: "#1cc7d0" },
              700: { value: "#1cc7d0" },
              800: { value: "#1cc7d0" },
              900: { value: "#1cc7d0" },
              950: { value: "#1cc7d0" },
            },
            orange: {
              50: { value: "#ffc168" },
              100: { value: "#ffc168" },
              200: { value: "#ffc168" },
              300: { value: "#ffc168" },
              400: { value: "#ffc168" },
              500: { value: "#ffc168" },
              600: { value: "#ffc168" },
              700: { value: "#ffc168" },
              800: { value: "#ffc168" },
              900: { value: "#ffc168" },
              950: { value: "#ffc168" },
            },
            red: {
              50: { value: "#ff6c5f" },
              100: { value: "#ff6c5f" },
              200: { value: "#ff6c5f" },
              300: { value: "#ff6c5f" },
              400: { value: "#ff6c5f" },
              500: { value: "#ff6c5f" },
              600: { value: "#ff6c5f" },
              700: { value: "#ff6c5f" },
              800: { value: "#ff6c5f" },
              900: { value: "#ff6c5f" },
              950: { value: "#ff6c5f" },
            },
            pink: {
              50: { value: "#ff4f81" },
              100: { value: "#ff4f81" },
              200: { value: "#ff4f81" },
              300: { value: "#ff4f81" },
              400: { value: "#ff4f81" },
              500: { value: "#ff4f81" },
              600: { value: "#ff4f81" },
              700: { value: "#ff4f81" },
              800: { value: "#ff4f81" },
              900: { value: "#ff4f81" },
              950: { value: "#ff4f81" },
            },
            purple: {
              50: { value: "#8e43e7" },
              100: { value: "#8e43e7" },
              200: { value: "#8e43e7" },
              300: { value: "#8e43e7" },
              400: { value: "#8e43e7" },
              500: { value: "#8e43e7" },
              600: { value: "#8e43e7" },
              700: { value: "#8e43e7" },
              800: { value: "#8e43e7" },
              900: { value: "#8e43e7" },
              950: { value: "#8e43e7" },
            },
            accent: {
              value: color,
            },
          },
        },
      },
    });
  }, [color]);

  return <Context value={{ color, theme, setColor }}>{children}</Context>;
};

export const useTheme = () => React.useContext(Context);
