// We can destructure the props object directly in the arguments to clean up code
function ProfileCard({ title, handle, image, description }) {
  //   const { title, handle } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="title is-6">{handle}</p>
        </div>

        <br></br>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
