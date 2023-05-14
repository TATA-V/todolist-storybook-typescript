import TodoItem from "../components/Main/TodoItem";

export default {
  title: "Main/TodoItem",
  component: TodoItem,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "200px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <TodoItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "TodoItem",
  text: "오늘의 할 일을 적어보자!",
  done: true,
};
