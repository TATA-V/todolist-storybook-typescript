import TodoFootSetting from "../components/Setting/TodoFootSetting";

export default {
  title: "Setting/TodoFootSetting",
  component: TodoFootSetting,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", marginTop: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <TodoFootSetting {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "TodoFootSetting",
};
