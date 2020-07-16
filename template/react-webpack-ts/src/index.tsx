import './public.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import store from "./store/store";
import routes from "./routes/routes";
import RouteView from "./routes/routeView";


function App() {
    // App组件为全局唯一组件，全局根组件

    // useEffect(function () {
    //     // 预渲染配置项
    //     document.dispatchEvent(new Event('pre-render'));
    // }, []);


    return (
        <React.StrictMode>
            <RouteView routes={routes}/>
        </React.StrictMode>
    );
}

ReactDOM.render(
    // render中尽量不要放置其它组件或page，render中主要放置全局元组件
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </ConfigProvider>
    , document.getElementById('main')
);

export {}
