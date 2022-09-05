interface PageProps {
  currentPage: string;
  page: any;
  index: number;
  content: any;
}
function Page(props: PageProps) {
  const { currentPage, page, index, content } = props;
  const isActive = currentPage !== page.value;
  return (
    <div
      id={`page-${page.value}`}
      className="bg-soft-pink"
      aria-hidden={isActive}
    >
      <div className="center">
        <div className="page">{content}</div>
      </div>
    </div>
  );
}

export default Page;
