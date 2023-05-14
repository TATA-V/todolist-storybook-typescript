import TodoCreate from "../components/Main/TodoCreate";

export default {
  title: "Main/TodoCreate",
  component: TodoCreate,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "150px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <TodoCreate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "TodoCreate",
};
