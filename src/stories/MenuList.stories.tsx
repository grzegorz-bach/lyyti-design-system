import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MenuList, { MenuListProps } from '../components/MenuList';
import Paper from '../components/Paper';
import ThemeSelector from "../themes/ThemeSelector";
import MenuItem from '../components/MenuItem';

export default {
  title: 'Components/MenuList',
  component: MenuList,
} as Meta;

const Template: Story<MenuListProps> = (args) => 
  <ThemeSelector>
    <Paper>
      <MenuList {...args}>
        <MenuItem>Menu text</MenuItem>
        <MenuItem>Menu text</MenuItem>
      </MenuList>
    </Paper>
    </ThemeSelector>;

export const TextOnly = Template.bind({});
TextOnly.args = {
};