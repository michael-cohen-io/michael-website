import React from "react";
import { RemoveScroll } from "react-remove-scroll";

import { createContext } from "@radix-ui/react-context";
import { Slot } from "@radix-ui/react-slot";
import { Box, Portal, Theme } from "@radix-ui/themes";

const [MenuProvider, useMenuContext] = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>("MobileMenu");

export const MobileMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Match @media (--md)
    const mediaQueryList = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setOpen((open) => (open ? !mediaQueryList.matches : false));
    };

    handleChange();
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  return (
    <MenuProvider open={open} setOpen={setOpen}>
      {children}
    </MenuProvider>
  );
};

export const useMobileMenuContext = () => useMenuContext("MobileMenu");

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  const mobileMenu = useMobileMenuContext();

  if (!mobileMenu.open) {
    return null;
  }

  return (
    <Portal>
      <Theme accentColor="pink" panelBackground="solid" scaling="100%">
        <RemoveScroll as={Slot} enabled>
          <Box
            position="fixed"
            inset="0"
            style={{
              zIndex: 1,
              display: "grid",
              gridTemplateRows: "auto minmax(0, 1fr)",
              backgroundColor: "var(--color-background)",
            }}
          >
            {children}
          </Box>
        </RemoveScroll>
      </Theme>
    </Portal>
  );
};
