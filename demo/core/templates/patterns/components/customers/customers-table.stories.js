import React from 'react';

import { Pattern } from '../../../../../../src/storybook-django';

import './customers-table.html';
import config from './customers-table.yaml';

const Table = (props) => <Pattern filename={__filename} {...props} />;

export default {
    component: Table,
    title: 'Customers / Table',
};

const stubProgrammes = [
    {
        client: {
            user: { get_full_name: 'Anthony Richardson' },
            url: '#',
            user_id: '655992',
        },
        user_id_display: '655992',
        get_state_display: 'Pending',
    },
    {
        client: {
            user: { get_full_name: 'Benjamin Cole-Hawkins' },
            url: '#',
            user_id: '708993',
        },
        user_id_display: '708993',
        get_state_display: 'Open',
    },
    {
        client: {
            user: { get_full_name: 'Charlie Nicholls' },
            url: '#',
            user_id: '183',
        },
        user_id_display: '000183',
        get_state_display: 'Closed',
    },
];

export const emptyTable = () => <Table programme_list={[]} />;

export const fullTable = () => <Table programme_list={stubProgrammes} />;

export const fromYAML = () => (
    <Table programme_list={config.context.customers} />
);
