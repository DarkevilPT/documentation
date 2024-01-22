import React from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "../Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
// import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import styles from "./styles.module.css";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useState, useEffect } from "react";

import TOC from "@theme/TOC";
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */

function getTOC() {
  const toc = [];
  const anchors = document.querySelectorAll(".markdown > .anchor");
  for (let anchor of anchors) {
    let value = anchor.innerText;
    let id = anchor.getAttribute("id");
    let level = Number(anchor.tagName.slice(1));
    toc.push({ value: value, id: id, level: level });
  }
  return toc;
}

function DocItemTOCDesktop() {
  const { frontMatter } = useDoc();
  const [toc, updateTOC] = useState([]);

  useEffect(() => {
    updateTOC(getTOC());
  }, []);

  return (
    <TOC
      toc={toc}
      minHeadingLevel={frontMatter.toc_min_heading_level}
      maxHeadingLevel={frontMatter.toc_max_heading_level}
      className={ThemeClassNames.docs.docTocDesktop}
    />
  );
}

function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const _toc = ExecutionEnvironment.canUseDOM ? getTOC() : toc;
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && _toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
