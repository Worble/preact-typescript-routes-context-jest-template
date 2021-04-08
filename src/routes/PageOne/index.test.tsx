import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/preact";
import PageOne from ".";

describe("Page One", () => {
	test("should say Page One", () => {
		const { getByText } = render(<PageOne />);
		expect(getByText("Page One")).toBeInTheDocument();
	});
});
