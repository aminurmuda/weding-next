interface PageProps {
  page: any;
  children: any;
}
function Page(props: PageProps) {
  const { page, children } = props;
  return (
    <div id={`page-${page.value}`}>
      <div className="center">
        <div className="page">{children}</div>
      </div>
    </div>
  );
}

export default Page;
