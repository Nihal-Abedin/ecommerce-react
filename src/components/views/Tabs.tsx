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
            <div className='flex gap-2 border-b-2 mb-2 overflow-x-auto '>
                {tabs.map((tab, i) => (
                    <div
                        key={tab.key}
                        className={`${
                            activeTab === tab.key
                                ? `  text-white after:translate-x-0  after:opacity-100  `
                                : `hover:-bg--color-grey-200  ${
                                      activeTabindex < i ? 'after:-translate-x-[110%]' : 'after:translate-x-[110%]'
                                  }  after:opacity-0   `
                        } cursor-pointer py-3 px-7 rounded-tl-md rounded-tr-md  transition-colors delay-[85ms] overflow-hidden after:transition  after:delay-75 after:duration-300 relative after:-bg--color-brand-500 after:w-full after:h-full after:absolute after:left-0  after:-z-20 after:top-0`}
                        onClick={() => {
                            setActiveTabIndex(i);
                            setTimeout(() => {
                                setActiveTab(tab.key);
                            }, 100);
                        }}>
                        <p className='z-50'>{tab.label}</p>
                    </div>
                ))}
            </div>
            <section className='p-2'>{activeContent}</section>
        </div>
    );
};

export default Tabs;
