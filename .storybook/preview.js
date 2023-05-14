import { GlobalStyle } from "../src/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../src/Store";
import "!style-loader!css-loader!../src/iconFont.css";

/** @type { import('@storybook/react').Preview } */
export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story, context) => (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Story {...context} />
      </Provider>
    </BrowserRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "gray",
    values: [
      {
        name: "gray",
        value: "#e9ecef",
      },
      {
        name: "dark-blue",
        value: "#2a313b",
      },
    ],
  },
};
