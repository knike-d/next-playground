import { ThumbnailCard } from "@/components/atoms/ThumnailCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

export default {
  title: "ThumbnailCard",
  component: ThumbnailCard,
} as ComponentMeta<typeof ThumbnailCard>;

const Template: ComponentStory<typeof ThumbnailCard> = (args) => (
  <MemoryRouterProvider url="/articles">
    <ThumbnailCard {...args} />
  </MemoryRouterProvider>
);

export const Primary = Template.bind({});
Primary.args = { card: { id: "id1", title: "タイトル", userName: "ユーザー名" } };

export const LongTitle = Template.bind({});
LongTitle.args = {
  card: {
    id: "id2",
    title: "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
    userName: "ユーザー名",
  },
};
