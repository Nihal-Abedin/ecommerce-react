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
const Tabs: React.FC<TABS_PROPS> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeTabindex, setActiveTabIndex] = useState(0);
    const activeContent = tabs.find((tab) => tab.key === activeTab)?.content;

    return (
        <div className=''>
            <div className='flex gap-2  mb-2 overflow-x-auto border-b border-darkfox-gray-border '>
                {tabs.map((tab, i) => (
                    <div
                        key={tab.key}
                        className={`${
                            activeTab === tab.key
                                ? `  text-white after:translate-x-0  after:opacity-100  `
                                : `hover:bg-primary-button-10  ${
                                      activeTabindex < i ? 'after:-translate-x-[110%]' : 'after:translate-x-[110%]'
                                  }  after:opacity-0   `
                        } cursor-pointer py-3 px-7  rounded-tl-md rounded-tr-md  transition-colors delay-[85ms] overflow-hidden after:transition  after:delay-75 after:duration-300 relative after:bg-primary-button after:w-full after:h-full after:absolute after:left-0  after:-z-20 after:top-0`}
                        onClick={() => {
                            setActiveTabIndex(i);
                                setActiveTab(tab.key);
                        }}>
                        <p className='z-50 text-title-medium-16-600'>{tab.label}</p>
                    </div>
                ))}
            </div>
            <section className='p-2'>{activeContent}</section>
        </div>
    );
};

export default Tabs;
