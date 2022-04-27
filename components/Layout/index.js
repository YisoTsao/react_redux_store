import BaseLayout from "./BaseLayout";

const withLayout = (PageComponent) => () => {
  const Component = (props) => (
    <>
      <PageComponent {...props} />
    </>
  );

  return Component;
};

export { withLayout, BaseLayout };
