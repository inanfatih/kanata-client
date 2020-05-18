import axios from 'axios';
import DeleteContentData from './DeleteContentData';
const UploadMainImage = async (contentIdReturned, mainImageFormData) => {
  //Upload thumbnail
  await axios
    .post(`/image/${contentIdReturned}/mainImage`, mainImageFormData)
    .then(() => {
      console.log('mainImage uploaded successfully');
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

export default UploadMainImage;
