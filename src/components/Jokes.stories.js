import React from 'react';
import Jokes from './Jokes';

export default {
  title: 'Jokes',
  component: Jokes,
};

const Template = (args) => <Jokes {...args} />;

export const Default = Template.bind({});
Default.args = {
  jokes: [
    { id: 1, text: "Why don’t scientists trust atoms? Because they make up everything!" },
  ],
};