function Image({ src, alt }) {
  return (
    <>
      <div className="image w-full rounded-md  ">
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-tl-md rounded-tr-md "
        />
      </div>
    </>
  );
}
export default Image;
