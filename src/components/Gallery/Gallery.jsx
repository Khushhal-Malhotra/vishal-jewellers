import * as React from "react";
import styles from "./Gallery.module.css";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({slides}) {
  const [index, setIndex] = React.useState(-1);
  const [value, setValue] = React.useState("All");
  const [photos, setPhotos] = React.useState(slides);

  React.useEffect(() => {
    if (value != "All") {
      setPhotos(
        slides.filter((i) => {
          return i.category == value;
        })
      );
    } else {
      setPhotos(slides);
    }
  }, [value]);

  const handleClick = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div id="Gallery" className={styles.container}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles.btnContainer}>
          <input
            type="button"
            className={styles.btn}
            style={
              value == "All"
                ? { backgroundColor: "black", color: "white" }
                : null
            }
            value="All"
            onClick={handleClick}
          />
          <input
            type="button"
            className={styles.btn}
            style={
              value == "Bracelets"
                ? { backgroundColor: "black", color: "white" }
                : null
            }
            value="Bracelets"
            onClick={handleClick}
          />
          <input
            type="button"
            className={styles.btn}
            style={
              value == "Rings"
                ? { backgroundColor: "black", color: "white" }
                : null
            }
            value="Rings"
            onClick={handleClick}
          />
          <input
            type="button"
            className={styles.btn}
            style={
              value == "Earrings"
                ? { backgroundColor: "black", color: "white" }
                : null
            }
            value="Earrings"
            onClick={handleClick}
          />
          <input
            type="button"
            className={styles.btn}
            style={
              value == "Necklaces"
                ? { backgroundColor: "black", color: "white" }
                : null
            }
            value="Necklaces"
            onClick={handleClick}
          />
        </div>
        <PhotoAlbum
          defaultContainerWidth={"50%"}
          layout="rows"
          photos={photos}
          targetRowHeight={200}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          index={index}
          slides={slides}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  );
}
