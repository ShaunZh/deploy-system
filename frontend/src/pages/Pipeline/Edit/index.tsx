/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-28 20:23:49
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-12-03 09:44:56
 */
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import BaseInfo from './BaseInfo';

import PipelineFetch from '@/services/pipeline';
import { getUrlParam } from '@/utils/tool';


interface Props {
  type: 'edit' | 'create';
  pipelineName: string;
}

interface Action {
  type: 'update',
  payload: PipelineDetail
}




const reducer = (state: Partial<PipelineDetail>, action: Action) => {
  switch (action.type) {
    case 'update': return {
      ...state,
      ...action.payload
    };
  }
};

const initState = {
  name: '', // 流水线名称
  env: '', // 部署环境
  tag: '', // 标签
  members: [], // 流水线成员
  codeSouce: {
    address: '',
    branch: ''
  }, // 代码源
  stageConfigs: []// 流水线流程配置
};

export default function Edit(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initState);
  const [loading, setLoading] = useState(false);
  const { pipelineName } = props;
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState('process');

  const onSave = () => {
    console.log('保存');
  };

  const onSaveAndRun = () => {
    console.log('保存并运行');
  };

  const onChangeTab = (tab: string) => {
    setCurrentTab(tab);
  };

  const tabClass = (type: string) => classNames(
    {
      'tab-item': true,
      'active': type === currentTab
    }
  );
  const tabButtonType = (type: string) => (
    currentTab === type ? 'link' : 'text'
  );

  const fetchPipeline = useCallback(async () => {
    setLoading(true);
    const id = getUrlParam('id') as string;
    const { data, success } = await PipelineFetch.pipeline_detail({ id });
    if (success) {
      dispatch({
        type: 'update',
        payload: { ...data }
      });
    }

  }, []);

  useEffect(() => {
    fetchPipeline();
  }, [fetchPipeline]);

  const renderContent = () => {
    switch (currentTab) {
      case 'base': return <BaseInfo></BaseInfo>;
      case 'process': return <div>process</div>;
    }
  };



  return (
    <div className="page-pipeline-edit page">
      <Row className="header" align="middle">
        <Col className="left d-flex align-self-center" span={4} >
          <Button type="text" className="back" onClick={() => history.goBack()}>
            <LeftOutlined />
            <span className="ml-16">返回</span>
          </Button>
          <span className="pl-16 title">{pipelineName}</span>
        </Col>
        <Col className="center" flex="1 1 auto" span={16}>
          <Button type={tabButtonType('base')} className={tabClass('base')} onClick={() => onChangeTab('base')}>基本信息</Button>
          <Button type={tabButtonType('process')} className={tabClass('process')} onClick={() => onChangeTab('process')}>流程配置</Button>
        </Col>
        <Col className="right" span={4}>
          <Button onClick={onSave}>仅保存</Button>
          <Button className="ml-8" onClick={onSaveAndRun}>保存且运行</Button>
        </Col>
      </Row>
      <div className="content bc-fff h-100">
        {renderContent()}
      </div>
    </div>

  );

}