import TodoFootNotice from "../components/Notice/TodoFootNotice";

export default {
  title: "Notice/TodoFootNotice",
  component: TodoFootNotice,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", marginTop: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <TodoFootNotice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "TodoFootNotice",
};
