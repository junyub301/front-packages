import React, { useEffect, useRef, useState } from "react";
import { AccordionPanelProps } from "./types";
import { clsx } from "clsx";
import { accordionPanelStyle, panelHeight } from "./style.css";
import { useAccordionContext } from "./AccordionContext";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const AccordionPanel = (props: AccordionPanelProps, ref: React.Ref<HTMLDivElement>) => {
  const { itemName = "", children, className, style, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>(null);

  const { activeItems } = useAccordionContext();

  const isActive = activeItems.includes(itemName);

  const [currentPanelHeight, setCurrentPanelHeight] = useState<string>();
  useEffect(() => {
    const handleResize = () => {
      if (!innerRef.current) return;
      setCurrentPanelHeight(`${innerRef.current.clientHeight}px`);
    };
    if (!innerRef.current) return;
    if (isActive) {
      handleResize();
      const observer = new MutationObserver(handleResize);
      observer.observe(innerRef.current, {
        childList: true,
        subtree: true,
      });
      return () => {
        observer.disconnect();
      };
    } else {
      setCurrentPanelHeight("0");
    }
  }, [isActive, activeItems]);

  return (
    <div
      {...rest}
      ref={ref}
      className={clsx([accordionPanelStyle, className])}
      data-action-item={isActive}
      style={{
        ...assignInlineVars({
          [panelHeight]: currentPanelHeight ?? `${innerRef?.current?.clientHeight}px`,
        }),
        ...style,
      }}
    >
      <div ref={innerRef} data-name="panel-inner">
        {children}
      </div>
    </div>
  );
};

const _AccordionPanel = React.forwardRef(AccordionPanel);

export { _AccordionPanel as AccordionPanel };
