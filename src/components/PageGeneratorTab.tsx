import React from 'react';
import Hero from './Hero';
import ItemsShowcase from './ItemsShowcase';
import TrustBar from './TrustBar';
import Cards from './Cards';
import Button from './Button';
import Layout from './Layout';
import PanelShowcase from './PanelShowcase';

type ComponentProps = {
    type: string;
    props: { [key: string]: any };
};

type SectionProps = {
    type: string;
    props: { [key: string]: any };
    components: ComponentProps[];
};

type PageGeneratorTabProps = {
    data: SectionProps[];
};

const componentMap: { [key: string]: React.ComponentType<any> } = {
    componentButton: Button,
    componentCards: Cards,
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentLayout: Layout,
    componentPanelShowcase: PanelShowcase,
    componentTrustBar: TrustBar,
};

const PageGeneratorTab: React.FC<PageGeneratorTabProps> = ({ data }) => {
    return (
        <div>
            {data.map((section, index) => (
                <div key={index} style={section.props}>
                    {section.components.map((component, componentIndex) => {
                        const Component = componentMap[component.type];
                        return (
                            <Component
                                key={componentIndex}
                                {...component.props}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default PageGeneratorTab;
