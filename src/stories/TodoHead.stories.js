import TodoHead from "../components/TodoHead";

export default {
  title: "Global/TodoHead",
  component: TodoHead,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "200px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <TodoHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "TodoHead",
};
