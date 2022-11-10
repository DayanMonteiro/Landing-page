import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, hic! Placeat, ad enim. Reprehenderit deleniti qui aperiam magnam harum enim corporis, odio, ullam ab tempora officia aut repellendus, itaque ex!`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
