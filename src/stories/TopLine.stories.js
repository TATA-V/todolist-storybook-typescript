import TopLine from "../components/Main/TopLine";

export default {
  title: "Main/TopLine",
  component: TopLine,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "120px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <TopLine {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "TopLine",
  backgroundColor: "#2a313b",
};
