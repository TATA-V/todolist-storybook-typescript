import TodoFootMain from "../components/Main/TodoFootMain";

export default {
  title: "Main/TodoFootMain",
  component: TodoFootMain,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", marginTop: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <TodoFootMain {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "TodoFootMain",
  textColor: "blue",
};
