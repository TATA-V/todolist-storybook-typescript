import Setting from "../components/Setting";

export default {
  title: "Pages/Setting",
  component: Setting,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Setting {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Setting",
};
