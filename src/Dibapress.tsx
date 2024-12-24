import React, { CSSProperties } from "react";
import { useConfig } from "./stores/useConfig";
import { PuffLoader } from "react-spinners";
import { Box, Button, HStack, Span, VStack, Input } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import { LucideCheck, LucidePlusCircle } from "lucide-react";
import { useColorMode } from "./components/ui/color-mode";
import ThemeContext, { useTheme } from "./contexts/ThemeContext";
import { passwordStrength } from "check-password-strength";
import { Checkbox } from "./components/ui/checkbox";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "./components/ui/password-input";
import Logo from './assets/react.png'

export interface DibapressApp {
  name: string;
  title: string;
  collections?: any[];
}

export interface DibapressConfig {
  baseUrl: string;
  style?: CSSProperties;
  apps: DibapressApp[];
}

interface DibapressProps {
  config: DibapressConfig;
}

const swatches = [
  { id: "blue", value: "#00aeff" },
  { id: "cyan", value: "#1cc7d0" },
  { id: "green", value: "#2dde98" },
  { id: "orange", value: "#ffc168" },
  { id: "red", value: "#ff6c5f" },
  { id: "pink", value: "#ff4f81" },
  { id: "purple", value: "#8e43e7" },
];

export default ({ config }: DibapressProps) => {
  const conf = useConfig();
  const [loaded, setLoaded] = React.useState(false);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setLoaded(conf.setConfig(config));
    }, 100);
  }, []);

  return (
    <ThemeContext>
      <Provider>
        <Root loaded={loaded} />
      </Provider>
    </ThemeContext>
  );
};

interface RootProps {
  loaded: boolean;
}

const Root = ({ loaded }: RootProps) => {
  const theme = useTheme();
  const { config } = useConfig();
  const colorMode = useColorMode();
  const [password, setPassword] = React.useState("");

  if (!loaded) {
    return (
      <div
        style={{
          fontFamily: "system-ui",
          fontWeight: 500,
          width: "100%",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <PuffLoader
          size={40}
          color={colorMode.colorMode === "light" ? "black" : "white"}
        />
        <div style={{ fontSize: 12 }}>Syncing, please wait...</div>
      </div>
    );
  }

  return (
    <VStack
      h={"100dvh"}
      w={"100dvw"}
      fontSize={"80%"}
      fontFamily={"system-ui"}
      bg={colorMode.colorMode === "light" ? "white" : "black"}
      color={colorMode.colorMode === "light" ? "white" : "black"}
      overflow={"auto"}
      gap={5}
      p={20}
    >
      <Button size={"xs"} colorPalette={theme.color} rounded={"lg"}>
        <HStack gap={1}>
          <LucidePlusCircle />
          <Span>Create New Project</Span>
        </HStack>
      </Button>
      <HStack>
        {swatches.map((item) => (
          <Button
            rounded={"full"}
            colorPalette={item.id}
            h={6}
            ringColor={"bg"}
            transition={"all 0.2s ease"}
            _hover={{
              scale: 1.1,
            }}
            onClick={() => theme.setColor(item.id)}
            key={item.id}
            value={item.value}
            fontSize={10}
          >
            {item.id === theme.color && <LucideCheck />}
          </Button>
        ))}
      </HStack>
      <Span color={"fg"}>Hello World</Span>
      <VStack alignItems={"start"} paddingBlock={2}>
        <PasswordInput
          variant={"subtle"}
          color={"fg"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          focusRingColor={"fg.muted"}
          rounded={"lg"}
        />
        <PasswordStrengthMeter
          alignSelf={"stretch"}
          value={password ? passwordStrength(password).id + 1 : 0}
        />
      </VStack>
      <Checkbox
        colorPalette={theme.color}
        defaultChecked
        gap="4"
        alignItems="flex-start"
      >
        <Box color={"fg"} lineHeight="1">
          I agree to the terms and conditions
        </Box>
        <Box fontWeight="normal" fontSize={10} color="fg.muted" mt="1">
          By clicking this, you agree to our Terms and Privacy Policy.
        </Box>
      </Checkbox>
    </VStack>
  );
};
