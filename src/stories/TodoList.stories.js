import TodoList from "../components/Main/TodoList";

export default {
  title: "Main/TodoList",
  component: TodoList,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <TodoList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "TodoList",
};
