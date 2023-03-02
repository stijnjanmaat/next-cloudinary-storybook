import type { Meta, StoryObj } from '@storybook/react';

import { Img } from './Img';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Img> = {
  title: 'Example/Img',
  component: Img,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Img',
  },
};