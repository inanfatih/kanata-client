import React, { useContext } from 'react';

import axios from 'axios';

//MUI stuff
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { styles } from '../util/theme';
import '../App.css';
import { ContentContext } from '../contexts/ContentContext';
import IsAuthenticated from '../util/IsAuthenticated';

const useStyles = makeStyles(styles);

const PostContentData = () => {
  IsAuthenticated();

  // const {
  //   // description,
  //   // subtitle,
  //   // title,
  //   // type,
  //   // videoUrl,
  //   // thumbnail,
  //   // mainImage,
  //   // orderNo,
  //   // imageList,
  //   root,
  // } = useContext(ContentContext);

  // console.log('root', root);

  const classes = useStyles();

  const [title, setTitle] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');
  const [type, setType] = React.useState(1);
  const [description, setDescription] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [thumbnail, setThumbnail] = React.useState('');
  const [mainImage, setMainImage] = React.useState('');
  const [imageList, setImageList] = React.useState(['']);
  const [videoUrl, setVideoUrl] = React.useState('');
  const [orderNo, setOrderNo] = React.useState(0);
  const [contentId, setContentId] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [isSuccessfull, setIsSuccessfull] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);

  let contentData = {
    title: title,
    subtitle: subtitle,
    type: type,
    description: description,
    thumbnail: thumbnail,
    mainImage: mainImage,
    imageList: [],
    videoUrl: videoUrl,
    orderNo: orderNo,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('handleSubmit', event);

    setLoading(true);
    if (IsAuthenticated()) {
      if (type === 1) {
        await axios
          .post('/content', contentData)
          .then((res) => {
            console.log(res.data);
            console.log('res', res);
            console.log('res.data', res.data);
            setContentId(res.data.content.contentId);
            return res.data.content.contentId;
          })
          .then(async (contentIdReturned) => {
            //Upload thumbnail
            await axios
              .post(`/image/${contentIdReturned}/thumbnail`, thumbnailFormData)
              .then(() => {
                console.log('thumbnail uploaded successfully');
              })
              .catch(async (err) => {
                setIsFailed(true);

                await axios.delete(`/content/${contentId}`).catch((err) => {
                  console.log(err);
                });
                console.log('error', err);
              });
            return contentIdReturned;
          })
          .then(async (contentIdReturned) => {
            //upload mainImage
            await axios
              .post(`/image/${contentIdReturned}/mainImage`, mainImageFormData)
              .then(() => {
                console.log('mainImage uploaded successfully');
              })
              .catch(async (err) => {
                setIsFailed(true);

                await axios.delete(`/content/${contentId}`).catch((err) => {
                  console.log(err);
                });
                console.log('error', err);
              });
            return contentIdReturned;
          })
          .then(async (contentIdReturned) => {
            imageListFormDataArray.forEach(async (formData, index) => {
              await axios
                .post(
                  `/image/${contentIdReturned}/imageList/${index}`,
                  formData,
                )
                .then(() => {
                  console.log(
                    'imagelist item at index ' +
                      index +
                      ' uploaded successfully',
                  );
                  setIsSuccessfull(true);
                })
                .catch(async (err) => {
                  setIsFailed(true);

                  await axios.delete(`/content/${contentId}`).catch((err) => {
                    console.log(err);
                  });
                  console.log('error', err);
                });
            });
          })
          // .then(() => {
          //   //Empty the form
          //   setTitle('');
          //   setSubtitle('');
          //   setType(1);
          //   setDescription('');
          //   setThumbnail('');
          //   setMainImage('');
          //   setImageList(['']);
          //   setVideoUrl('');
          //   setOrderNo(0);
          //   setErrors({});
          // })
          .catch((err) => {
            console.log('contentId', contentId);

            setLoading(false);
            setErrors(err);
            console.log('err', err);
            setIsSuccessfull(false);
            setIsFailed(true);
          });
      } else if (type === 2) {
        await axios
          .post('/content', contentData)
          .then((res) => {
            console.log(res.data);
            console.log('res', res);
            console.log('res.data', res.data);
            setContentId(res.data.content.contentId);
            return res.data.content.contentId;
          })
          .then(async (contentIdReturned) => {
            //Upload thumbnail
            await axios
              .post(`/image/${contentIdReturned}/thumbnail`, thumbnailFormData)
              .then(() => {
                console.log('thumbnail uploaded successfully');
              })
              .catch(async (err) => {
                setIsFailed(true);

                await axios.delete(`/content/${contentId}`).catch((err) => {
                  console.log(err);
                });
                console.log('error', err);
              });
            return contentIdReturned;
          })
          .then(async (contentIdReturned) => {
            //upload mainImage
            await axios
              .post(`/image/${contentIdReturned}/mainImage`, mainImageFormData)
              .then(() => {
                console.log('mainImage uploaded successfully');
                setIsSuccessfull(true);
              })
              .catch(async (err) => {
                setIsFailed(true);

                await axios.delete(`/content/${contentId}`).catch((err) => {
                  console.log(err);
                });
                console.log('error', err);
              });
            return contentIdReturned;
          })
          // .then(() => {
          //Empty the form
          // setTitle('');
          // setSubtitle('');
          // setType(1);
          // setDescription('');
          // setThumbnail('');
          // setMainImage('');
          // setImageList(['']);
          // setVideoUrl('');
          // setOrderNo(0);
          // setErrors({});
          // setIsSuccessfull(true);
          // })
          .catch((err) => {
            setLoading(false);
            setErrors(err);
            console.log('err', err);
            setIsSuccessfull(false);
            setIsFailed(true);
          });
      } else if (type === 3) {
        await axios
          .post('/content', contentData)
          .then((res) => {
            console.log(res.data);
            console.log('res', res);
            console.log('res.data', res.data);
            setContentId(res.data.content.contentId);
            return res.data.content.contentId;
          })
          .then(async (contentIdReturned) => {
            //Upload thumbnail
            await axios
              .post(`/image/${contentIdReturned}/thumbnail`, thumbnailFormData)
              .then(() => {
                setIsSuccessfull(true);
                console.log('thumbnail uploaded successfully');
              })
              .catch(async (err) => {
                setIsFailed(true);

                await axios.delete(`/content/${contentId}`).catch((err) => {
                  console.log(err);
                });
                console.log('error', err);
              });
            return contentIdReturned;
          })
          // .then(() => {
          //Empty the form
          // setTitle('');
          // setSubtitle('');
          // setType(1);
          // setDescription('');
          // setThumbnail('');
          // setMainImage('');
          // setImageList(['']);
          // setVideoUrl('');
          // setOrderNo(0);
          // setErrors({});
          // setIsSuccessfull(true);
          // })
          .catch((err) => {
            setLoading(false);
            setErrors(err);
            console.log('err', err);
            setIsSuccessfull(false);
            setIsFailed(true);
          });
      }
    } else {
      //TODO: display that token has expired. Login again
    }
  };
  React.useEffect(() => {
    console.log('contentData', contentData);
  }, [imageList, type, contentData, loading]);

  const thumbnailFormData = new FormData();

  const uploadThumbnail = (event) => {
    const image = event.target.files[0];
    if (image) {
      thumbnailFormData.append('image', image, image.name);
    }
  };

  const mainImageFormData = new FormData();

  const uploadMainImage = (event) => {
    const image = event.target.files[0];
    if (image) {
      mainImageFormData.append('image', image, image.name);
    }
  };

  const imageListFormData = new FormData();
  const imageListFormDataArray = [];

  const uploadImageList = (event, index) => {
    const image = event.target.files[0];
    if (image) {
      imageListFormData.append('image', image, image.name);
      imageListFormDataArray.push(imageListFormData);
    }
  };

  return (
    <div>
      <Grow in timeout={500}>
        <div className={classes.contactContentBox}>
          <Paper className={classes.contactContent} elevation={10}>
            <Card elevation={5}>
              <CardContent style={{ justifyContent: 'center' }}>
                <form onSubmit={handleSubmit} className={classes.contactForm}>
                  <Typography
                    variant='h4'
                    component='h2'
                    style={{
                      marginBottom: '1%',
                      marginLeft: '2%',
                      width: '95%',
                    }}>
                    Create Content
                  </Typography>

                  <TextField
                    id='title'
                    name='title'
                    label='Title'
                    variant='outlined'
                    helperText={errors.title}
                    error={errors.title ? true : false}
                    value={title}
                    required
                    onInput={(event) => setTitle(event.target.value)}
                    fullWidth
                  />

                  <TextField
                    id='subtitle'
                    name='subtitle'
                    label='Subtitle'
                    variant='outlined'
                    required
                    helperText={errors.subtitle}
                    error={errors.subtitle ? true : false}
                    value={subtitle}
                    onChange={(event) => setSubtitle(event.target.value)}
                    fullWidth
                  />

                  <TextField
                    id='outlined-multiline-static'
                    name='description'
                    label='Description'
                    variant='outlined'
                    required
                    multiline
                    rows={4}
                    helperText={errors.description}
                    error={errors.description ? true : false}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    fullWidth
                  />

                  <TextField
                    id='orderNo'
                    name='orderNo'
                    label='Display Priority'
                    type='number'
                    required
                    variant='outlined'
                    error={errors.orderNo ? true : false}
                    helperText="Content will be sorted by the Displaying priority. Higher number means higher priority. When the priority matches another content's priority, the content created later will have higher priority."
                    value={orderNo}
                    onChange={(event) => setOrderNo(Number(event.target.value))}
                    fullWidth
                  />

                  <div
                    style={{
                      marginBottom: '2%',
                      marginLeft: '2%',
                      marginTop: '2%',
                      width: '95%',
                      border: '1px solid #C4C4C4',
                      borderRadius: '4px',
                    }}>
                    <FormControl
                      component='fieldset'
                      style={{
                        marginBottom: '2%',
                        marginLeft: '2%',
                        marginTop: '2%',
                        width: '95%',
                      }}>
                      <FormLabel component='legend'>Content Type</FormLabel>
                      <RadioGroup
                        aria-label='contentType'
                        name='contentType'
                        value={type}
                        onChange={(event) =>
                          setType(Number(event.target.value))
                        }>
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label='Social Media'
                        />
                        <FormControlLabel
                          value={2}
                          control={<Radio />}
                          label='2D & 3D'
                        />
                        <FormControlLabel
                          value={3}
                          control={<Radio />}
                          label='Video'
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  {type === 3 && (
                    <TextField
                      id='videoUrl'
                      name='videoUrl'
                      label='Video Url'
                      variant='outlined'
                      helperText={errors.videoUrl}
                      error={errors.videoUrl ? true : false}
                      value={videoUrl}
                      onChange={(event) => setVideoUrl(event.target.value)}
                      fullWidth
                      required
                    />
                  )}

                  <div
                    style={{
                      margin: '3% 2%',
                      width: '91%',
                      border: '1px solid #C4C4C4',
                      borderRadius: '4px',
                      padding: '2%',
                      color: 'grey',
                    }}>
                    <div style={{ marginBottom: '1%' }}>
                      Upload Thumbnail Image to be used in the home page
                    </div>

                    <div style={{ marginBottom: '1%' }}>
                      <Button variant='contained' component='label'>
                        <input
                          type='file'
                          accept='image/*'
                          required
                          onChange={uploadThumbnail}
                        />
                      </Button>
                    </div>
                  </div>

                  {type !== 3 && (
                    <div
                      style={{
                        margin: '3% 2%',
                        width: '91%',
                        border: '1px solid #C4C4C4',
                        borderRadius: '4px',
                        padding: '2%',
                        color: 'grey',
                      }}>
                      <div style={{ marginBottom: '1%' }}>
                        Upload Main Image (The image to be displayed on the top
                        in the content page) for 2D & 3D or Social Media
                      </div>

                      <div style={{ marginBottom: '1%' }}>
                        <Button variant='contained' component='label'>
                          <input
                            type='file'
                            accept='image/*'
                            required
                            onChange={uploadMainImage}
                          />
                        </Button>
                      </div>
                    </div>
                  )}

                  {type === 1 && (
                    <div
                      style={{
                        margin: '3% 2%',
                        width: '91%',
                        border: '1px solid #C4C4C4',
                        borderRadius: '4px',
                        padding: '2%',
                        color: 'grey',
                      }}>
                      <div style={{ marginBottom: '1%' }}>
                        Upload additional images for Social Media (These will be
                        displayed after the main image)
                      </div>
                      {imageList.map((item, index) => (
                        <div style={{ marginBottom: '1%' }} key={index}>
                          <Button variant='contained' component='label'>
                            <input
                              type='file'
                              accept='image/*'
                              onChange={(event, index) => {
                                uploadImageList(event, index);
                                console.log('uploadImageList', index);
                              }}
                            />
                          </Button>
                          <Button
                            onClick={() => {
                              console.log('imageList Before', imageList);
                              setImageList(imageList.splice(index, 1));
                              console.log('imageList After', imageList);
                            }}>
                            <RemoveCircleIcon />
                          </Button>
                        </div>
                      ))}

                      <Button
                        onClick={() => {
                          setImageList([...imageList, '']);
                        }}>
                        Add more images <AddCircleIcon />
                      </Button>
                    </div>
                  )}

                  <Button
                    size='large'
                    type='submit'
                    variant='contained'
                    color='primary'
                    style={{ margin: '2%', width: '95%', padding: '1%' }}
                    disabled={!loading && !errors}>
                    Create Content
                    {loading && (
                      <CircularProgress
                        className='classes.progress'
                        size='30'></CircularProgress>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Paper>
        </div>
      </Grow>

      {(loading || isSuccessfull || isFailed) && (
        <Dialog
          open={loading || isSuccessfull || isFailed}
          keepMounted
          onClose={() => {
            setIsSuccessfull(false);
            setIsFailed(false);
            setLoading(false);
          }}
          aria-labelledby='alert-dialog-slide-title'
          aria-describedby='alert-dialog-slide-description'>
          <DialogTitle id='alert-dialog-slide-title'>
            {!isSuccessfull && !isFailed
              ? 'Creating the content'
              : isFailed
              ? 'Failed'
              : ' Successful'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description'>
              {!isSuccessfull && !isFailed
                ? 'Please Wait'
                : isFailed
                ? `Failed - Try again ${contentId}`
                : `Good job!!! Content is created with Content ID:  ${contentId}`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setIsSuccessfull(false);
                setLoading(false);
                setIsFailed(false);
              }}
              color='primary'>
              Dismiss
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default PostContentData;
