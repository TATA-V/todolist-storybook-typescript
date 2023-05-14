import Notice from "../components/Notice";

export default {
  title: "Pages/Notice",
  component: Notice,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Notice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Notice",
};
