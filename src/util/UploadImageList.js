import axios from 'axios';
import DeleteContentData from './DeleteContentData';

const UploadMainImage = async (contentIdReturned, imageListFormDataArray) => {
  let axiosArray = [];

  //Upload thumbnail
  for (let x = 0; x < imageListFormDataArray.length; x++) {
    let newPromise = axios
      .post(
        `/image/${contentIdReturned}/imageList/${x}`,
        imageListFormDataArray[x],
      )
      .then(() => {
        console.log('imagelist at index is completed: ', x);
        return true;
      })
      .catch(() => {
        console.log('imagelist at this index is failed: ', x);
        DeleteContentData(contentIdReturned);
      });
    axiosArray.push(newPromise);
  }

  axios
    .all(axiosArray)
    .then(
      axios.spread((...responses) => {
        responses.forEach((res) => console.log('Success', res));
        console.log('submitted all axios calls');
        return true;
      }),
    )
    .catch((error) => {
      DeleteContentData(contentIdReturned);
      console.log('axios all failed. error: ', error);
      return false;
    });
};

export default UploadMainImage;
