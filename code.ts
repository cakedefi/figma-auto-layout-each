for (const node of figma.currentPage.selection) {
  if (node.type === "FRAME" || node.type === "COMPONENT" || node.type === "INSTANCE") {
    node.layoutMode = "HORIZONTAL";
  }
}

figma.closePlugin();