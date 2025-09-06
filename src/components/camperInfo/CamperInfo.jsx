import CamperGallery from "../camperGallery/CamperGallery";
const CamperInfo = ({ camper }) => {
  return (
    <div>
      {camper && (
        <div>
          <p>CamperInfo</p>
          <h3>{camper.name}</h3>
          <p>{camper.location}</p>
          <p>{camper.price}</p>
          <CamperGallery gallery={camper.gallery} />
          <p>{camper.description}</p>
        </div>
      )}
    </div>
  );
};

export default CamperInfo;
