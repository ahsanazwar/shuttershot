import {useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import globals from '@styles/globals.css';
// import { wrapper, store } from "store";
// import { Provider } from "react-redux";

import {Provider} from 'react-redux'
import store from '@redux/store'

import Layout from "@components/Layout";




function MyApp({ Component, pageProps }) {
  const [scrollEvent, setScroll] = useState('notscroll');
     const handleScrollFrame=(values)=>{
        const { top } = values;
        if(top>0){
          setScroll('scrollactive')
        }else{
          setScroll('notscroll')
        }
    }    
  
  return(

    <Scrollbars renderThumbVertical={pageProps => <div {...pageProps} className="thumb-vertical"/>} autoHide universal={true} {...pageProps}

        onScrollFrame={handleScrollFrame}>
        <Provider store={store}>
          <div className="page-wrapper font-medium font-sans">
            <Layout>
                <Component {...pageProps} scrollEvent={scrollEvent}/>
            </Layout>
          </div>
        </Provider>
    </Scrollbars>
  )
}

// export default wrapper.withRedux(MyApp);
export default MyApp;