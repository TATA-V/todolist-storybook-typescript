import Profile from "../components/Setting/Profile";

export default {
  title: "Setting/Profile",
  component: Profile,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "120px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Profile",
};
