import css from './CamperGallery.module.css'

const CamperGallery = ({ gallery }) => {
  return (
    <>
      {gallery && (
              <ul className={css.gallery}>
          {gallery.map((photo, idx) => (
            <li key={idx}><img src={photo.thumb} alt={`Camper photo #${idx}`} /></li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CamperGallery;
