import AdcButton from "../components/Main/AdcButton";

export default {
  title: "Main/AdcButton",
  component: AdcButton,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "200px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <AdcButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "AdcButton",
};
