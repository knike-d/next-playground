import { Pagination } from "@/components/molecules/Pagination";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

export default {
  title: "Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <MemoryRouterProvider url="/articles">
    <Pagination {...args} />
  </MemoryRouterProvider>
);

export const ArticlePagination = Template.bind({});
ArticlePagination.args = {
  per: 1,
  totalCount: 5,
};
