export default {
  index: {
    title: "Introduction",
    type: "page",
    display: "hidden",
    theme: {
      layout: "raw",
      footer: null,
    },
  },
  build: {
    type: "menu",
    title: "Build",
    items: {
      // "quick-start": {
      //   title: "Quick Start",
      // },
      // "smart-contracts": {
      //   title: "Smart Contracts",
      // },
      // apis: {
      //   title: "APIs",
      // },
      // sdks: {
      //   title: "SDKs",
      // },
      // indexer: {
      //   title: "Indexer",
      // },
      cli: {
        title: "CLI",
      },
      // "advanced-guides": {
      //   title: "Advanced Guides",
      // },
    },
  },
  network: {
    type: "menu",
    title: "Network",
    items: {
      nodes: {
        title: "Nodes",
      },
    },
  },
};
