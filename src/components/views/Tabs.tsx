import { useState } from 'react';


type TABS = [
    {
        label: string;
        content: React.ReactNode;
        key: string;
    },
];
interface TABS_PROPS {
    tabs: TABS;
}
const Tabs: React.FC<TABS_PROPS> = ({tabs}) => {
    const [activeTab, setActiveTab] = useState('tab1');
    const activeContent = tabs.find((tab) => tab.key === activeTab)?.content;
    
    return (
        <div className=''>
            <div className='flex gap-2 border-b-2 mb-2 overflow-x-auto'>
                {tabs.map((tab) => (
                    <div key={tab.key}
                        className={`${
                            activeTab === tab.key ? '-bg--color-brand-500  text-white' : 'hover:-bg--color-grey-200 '
                        } cursor-pointer py-3 px-7 rounded-tl-md rounded-tr-md transition-all`}
                        onClick={() => setActiveTab(tab.key)}>
                        {tab.label}
                    </div>
                ))}
            </div>
            <section className='p-2'>{activeContent}</section>
        </div>
    );
};

export default Tabs;
