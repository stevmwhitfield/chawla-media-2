import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "../styles/ImageGallery.module.scss";

const ImageGallery = ({ props }) => {
  const images = props.data.strapiImageGalleries.Images.map(image => {
    return {
      name: image.name,
      alt: image.alternativeText,
      img: image.localFile.childImageSharp.gatsbyImageData,
    };
  });

  const getImageColumns = images => {
    let columns = [];
    const n = images.length / 3;
    for (let i = 0; i < 3; i++) {
      columns.push(images.splice(0, n));
    }
    return columns;
  };
  const columns = getImageColumns(images);

  return (
    <section className={styles.imageGallery}>
      {columns.map(column => {
        return (
          <div className={styles.column}>
            {column.map(image => {
              return (
                <GatsbyImage
                  image={image.img}
                  alt={image.alt}
                  title={image.name}
                ></GatsbyImage>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default ImageGallery;
