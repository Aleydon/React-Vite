import type { Meta, StoryObj } from '@storybook/react';

import Text, { type TextProps } from '.';

const text: Meta<typeof Text> = {
	component: Text,
	title: 'Components/Text',
	args: {
		size: 'small',
		children: 'Default Text'
	}
};

export default text;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'medium',
		children: 'Small Text'
	}
};
export const Large: StoryObj<TextProps> = {
	args: {
		size: 'large',
		children: 'Large Text'
	}
};
