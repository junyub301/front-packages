import { render } from "@testing-library/react";
import { QueryProviderForTest } from "@/src/shared/components/QueryProvider/QueryProviderForTest";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <QueryProviderForTest>{children}</QueryProviderForTest>;
};

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
