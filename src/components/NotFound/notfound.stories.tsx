import type { Meta } from '@storybook/react';
import { NotFound } from '.';

const text: Meta<typeof NotFound> = {
	component: NotFound,
	title: 'Components/NotFound'
};

export const Default = () => <NotFound />;

export default text;
