import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "@/components/atoms/ThumnailCard.stories";

const { Primary } = composeStories(stories);

describe("Primary Card", () => {
  it("snapshotテスト", () => {
    const { asFragment } = render(<Primary />);
    expect(asFragment()).toMatchSnapshot();
  });
});
