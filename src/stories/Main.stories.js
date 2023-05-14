import Main from "../components/Main";

export default {
  title: "Pages/Main",
  component: Main,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Main {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Main",
};
