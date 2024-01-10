import React from 'react';
import UserListTab from './UserListTab';
import FormGeneratorTab from './FormGeneratorTab';
import PageGeneratorTab from './PageGeneratorTab';

type TabContext = {
    activeTab: string;
};

const data = [
    {
        type: 'layoutSection',
        props: { backgroundColor: '#f0f0f0' },
        components: [
            {
                type: 'componentHero',
                props: { title: 'Dynamic Page Example' },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: '#fff' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: { items: ['Item 1', 'Item 2', 'Item 3'] },
            },
            {
                type: 'componentTrustBar',
                props: { trustLevel: 'High' },
            },
        ],
    },
];

const TabContext: React.FC<TabContext> = ({ activeTab }) => (
    <div className="mt-4">
        {activeTab === 'list-component' && <UserListTab />}
        {activeTab === 'form-generator-component' && <FormGeneratorTab />}
        {activeTab === 'page-generator-component' && (
            <PageGeneratorTab data={data} />
        )}
    </div>
);

export default TabContext;
