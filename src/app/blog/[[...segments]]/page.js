const SingleBlogPage = ({ params }) => {
  const [year, id] = params.segments || [];

  return (
    <div>
      <h3>
        Single Blog Page No: {year || new Date().getFullYear()}/
        {id || "No data found"}
      </h3>
    </div>
  );
};

export default SingleBlogPage;
