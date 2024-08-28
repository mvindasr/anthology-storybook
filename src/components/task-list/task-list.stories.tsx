import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';
import { Story } from '@storybook/blocks';
import { TaskListProvider } from './task-list-context';

const meta = {
  title: 'Components/TaskList',
  component: TaskList,
  loaders: [
    async () => {
      const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
        res.json(),
      );
      return { tasks };
    },
  ],
  decorators: [
    (Story, context) => {
      return (
        <TaskListProvider tasks={context.loaded.tasks}>
          <Story {...context} />
        </TaskListProvider>
      );
    },
  ],
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {},
};
