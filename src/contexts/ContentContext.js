import React, { createContext, useState } from 'react';

export const ContentContext = createContext();

const ContentContextProvider = (props) => {
  const [content, setContent] = useState({
    description: '',
    subtitle: '',
    title: '',
    type: 1,
    videoUrl: '',
    thumbnail: '',
    mainImage: '',
    orderNo: 1,
    imageList: [''],
  });
  return (
    <ContentContext.Provider value={{ content }}>
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;
