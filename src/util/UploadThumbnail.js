import axios from 'axios';

const UploadThumbnail = async (contentIdReturned, thumbnailFormData) => {
  //Upload thumbnail
  await axios
    .post(`/image/${contentIdReturned}/thumbnail`, thumbnailFormData)
    .then(async () => {
      console.log('thumbnail uploaded successfully');
      return true;
    })
    .catch(async (err) => {
      await axios.delete(`/content/${contentIdReturned}`).catch((err) => {
        console.log(err);
      });
      console.log('error', err);
      return false;
    });
};

export default UploadThumbnail;
