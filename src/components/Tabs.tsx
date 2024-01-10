import React, { useState } from 'react';
import Button from './Button';
import TabContext from './TabContext';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState<string>('list-component');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="flex space-x-4">
                <Button
                    onClick={() => handleTabChange('list-component')}
                    className={`px-4 py-2 ${
                        activeTab === 'list-component'
                            ? 'bg-blue-500 text-blue-600 shadow-lg'
                            : 'bg-gray-200 text-gray-600'
                    }`}
                >
                    List Component
                </Button>
                <Button
                    onClick={() => handleTabChange('form-generator-component')}
                    className={`px-4 py-2 ${
                        activeTab === 'form-generator-component'
                            ? 'bg-blue-500 text-blue-600 shadow-lg'
                            : 'bg-gray-200 text-gray-600'
                    }`}
                >
                    Form Generator Component
                </Button>
                <Button
                    onClick={() => handleTabChange('page-generator-component')}
                    className={`px-4 py-2 ${
                        activeTab === 'page-generator-component'
                            ? 'bg-blue-500 text-blue-600 shadow-lg'
                            : 'bg-gray-200 text-gray-600'
                    }`}
                >
                    Page Generator Component
                </Button>
            </div>
            <TabContext activeTab={activeTab} />
        </div>
    );
};

export default Tabs;
