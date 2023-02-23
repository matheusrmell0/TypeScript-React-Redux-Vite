const Error = ({ error }: { error: string }) => {
  return (
    <section>
      <h1 style={{ textDecoration: 'underline' }} className="title">
        {error}
      </h1>
    </section>
  );
};

export default Error;
