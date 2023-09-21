import { logRoles, render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("Should render RestaurantCard component with props data", () => {
  const view = render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  //? To log the roles available in the rendered component
  //   logRoles(view.container);

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard Component with promoted label", () => {
  // Higher Order Component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const label = screen.getByText("Promoted");

  expect(label).toBeInTheDocument();
});
