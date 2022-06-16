import React, { useLayoutEffect, useEffect } from "react";

export const useOnClickOutside = (
  ref: React.RefObject<any>,
  handler: (e: React.MouseEvent<any, MouseEvent>) => void,
  portalRef?: React.RefObject<any>
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      if (
        portalRef !== undefined &&
        (!portalRef?.current || portalRef?.current.contains(event.target))
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, portalRef]);
};
