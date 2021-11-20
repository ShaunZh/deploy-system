/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-20 22:05:24
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-20 22:34:26
 */
import React, { ErrorInfo } from 'react';
import { Result, Button } from 'antd';



interface Props {
  children: React.ReactElement
}

export default class ErrorBoundary extends React.Component<Props> {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(): { hasError: boolean } {
    console.log('eeeee');
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // 可在此处将错误信息上传到错误监控平台
    console.log('Error', error, errorInfo);
  }

  handleRefresh = (): void => {
    location.reload();
  };

  render(): React.ReactElement {
    if (this.state.hasError) {
      return <Result
        status="404"
        title="Error"
        subTitle="糟糕！页面跑到外星了"
        extra={
          <Button type="primary" onClick={this.handleRefresh}>刷新</Button>
        }
      />;
    }
    return this.props.children;
  }



}
