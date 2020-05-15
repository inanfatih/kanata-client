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
import DeleteIcon from '@material-ui/icons/Delete';

import { styles } from '../util/theme';
import '../App.css';
import { ContentContext } from '../contexts/ContentContext';

const useStyles = makeStyles(styles);

const PostContentData = () => {
  const {
    // description,
    // subtitle,
    // title,
    // type,
    // videoUrl,
    // thumbnail,
    // mainImage,
    // orderNo,
    // imageList,
    root,
  } = useContext(ContentContext);

  console.log('root', root);

  const classes = useStyles();

  const [title, setTitle] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');
  const [type, setType] = React.useState();
  const [description, setDescription] = React.useState('');
  const [errors, setErrors] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState('');
  const [mainImage, setMainImage] = React.useState('');
  const [imageList, setImageList] = React.useState(['']);
  const [videoUrl, setVideoUrl] = React.useState('');
  const [orderNo, setOrderNo] = React.useState('');
  const [setLoading, loading] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let contentData = {
      title: title,
      subtitle: subtitle,
      type: type,
      description: description,
      thumbnail: thumbnail,
      mainImage: mainImage,
      imageList: imageList,
      videoUrl: videoUrl,
      orderNo: orderNo,
    };
    console.log('handleSubmit', event);

    setLoading(true);

    axios
      .post('/content', contentData)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem(
          'KanataProductionToken',
          `Bearer ${res.data.token}`,
        );
        setLoading(false);
        //TODO:  CLEAR FORM HERE
      })
      .catch((err) => {
        // this.setState({
        //   errors: err.response.data,
        // });
      });
  };

  React.useEffect(() => {
    console.log('imageListssss', imageList);
  }, [imageList, type]);

  const handleTypeChange = (event) => {
    setType(event.target.value);
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
                    helperText={errors.email}
                    error={errors.email ? true : false}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    fullWidth
                  />

                  <TextField
                    id='subtitle'
                    name='subtitle'
                    label='Subtitle'
                    variant='outlined'
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
                    label='Displaying Priority'
                    type='number'
                    variant='outlined'
                    error={errors.orderNo ? true : false}
                    value={orderNo}
                    onChange={(event) => setOrderNo(event.target.value)}
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
                        onChange={handleTypeChange}>
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
                  />

                  <div
                    style={{
                      marginBottom: '2%',
                      marginLeft: '2%',
                      marginTop: '2%',
                      width: '95%',
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
                        <input type='file' accept='image/*' />
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      marginBottom: '2%',
                      marginLeft: '2%',
                      marginTop: '2%',
                      width: '95%',
                      border: '1px solid #C4C4C4',
                      borderRadius: '4px',
                      padding: '2%',
                      color: 'grey',
                    }}>
                    <div style={{ marginBottom: '1%' }}>
                      Upload Main Image for 2D & 3D or Social Media
                    </div>

                    <div style={{ marginBottom: '1%' }}>
                      <Button variant='contained' component='label'>
                        <input type='file' accept='image/*' />
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      marginBottom: '2%',
                      marginLeft: '2%',
                      marginTop: '2%',
                      width: '95%',
                      border: '1px solid #C4C4C4',
                      borderRadius: '4px',
                      padding: '2%',
                      color: 'grey',
                    }}>
                    <div style={{ marginBottom: '1%' }}>
                      Upload images for Social Media
                    </div>
                    {imageList.map((item, index) => (
                      <div style={{ marginBottom: '1%' }}>
                        <Button variant='contained' component='label'>
                          <input type='file' accept='image/*' />
                        </Button>
                        <Button
                          onClick={() => {
                            setImageList(imageList.splice(index, 1));
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
    </div>
  );
};

export default PostContentData;

/* SAMPLE DATA
{
    "description": "Coşar Producer: Murat Erdağı 3D Supervisor: Berkay Bentürküm",
    "subtitle": " star subtitle",
    "title": "Dream star",
    "type": 2,
    "videoUrl": "https://vimeo.com/383209692",
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/1.png?alt=media",
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/6.png?alt=media",
    "orderNo": 1,
    "imageList": [
        "https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/9.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/kanata-production.appspot.com/o/4.png?alt=media"
    ]
}
*/
