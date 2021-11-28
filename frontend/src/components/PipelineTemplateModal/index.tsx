/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-24 22:25:21
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-28 20:19:26
 */
import React, { useState } from 'react';
import { Modal, Row, Col, Menu, message } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as NodejsSvg } from '@/assets/images/nodejs.svg';
import { ReactComponent as JavaSvg } from '@/assets/images/java.svg';
import TemplateConfig from './TemplateConfig';
import { useHistory } from 'react-router-dom';

// import Fetch from '@/services/pipeline';

import './index.less';

interface Props {
  onCancel: () => void
}

export interface PipelineConfig {
  type: 'Node.js' | 'Java';
  title: string;
  config: Array<string | string[]>;
  id: string;
}

const configs = new Map<string, PipelineConfig[]>([
  [
    'Node.js', [
      { id: 'default-1', type: 'Node.js', title: '测试和构建', config: [['code-scan', 'test'], 'build'] },
      { id: 'default-2', type: 'Node.js', title: 'React构建和上传', config: [['code-scan', 'test'], 'build-upload'] }
    ],
  ],
  [
    'Java', [
      { id: 'default-1', type: 'Java', title: '构建和部署到自由主机', config: ['build', 'deploy'] }
    ]
  ]
]);

export default function PipelineTemplateModal(props: Props): React.ReactElement {
  const history = useHistory();
  const [currentType, setCurrentType] = useState('');
  const [currentTemplate, setCurrentTemplate] = useState<PipelineConfig | null>();

  const { onCancel } = props;

  const handleSelectType = (type: 'Node.js' | 'Java') => {
    setCurrentType(type);
  };
  const handleSelectTemplate = (id: string) => {
    const typeConfig = configs.get(currentType);
    const templateConfig = typeConfig?.find(c => c.id === id);
    setCurrentTemplate(templateConfig);
    console.log('templateConfig', templateConfig);
  };

  // 获取流水线模板列表
  // const fetchPipelineTemplatesList = () => {
  //   Fetch.pipeline_template_list().then(res => {
  //   })
  // }

  const onOk = () => {
    if (currentTemplate?.id) {
      history.push('/pipeline/edit?id=' + currentTemplate.id);
      return;
    }
    message.info('请选择模板');
  };
  return (
    <Modal title="选择流水线模板"
      visible
      onCancel={onCancel}
      onOk={onOk}
    >
      <Row>
        <Col span={6} className="left template">
          <Menu>
            <Menu.Item className="item" key='Node.js' onClick={() => handleSelectType('Node.js')}>
              <Icon component={NodejsSvg}></Icon>
              <span>Node.js</span>
            </Menu.Item>
            <Menu.Item className="item" key="Java" onClick={() => handleSelectType('Java')}>
              <Icon component={JavaSvg}></Icon>
              <span>Java</span>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={18} className="right">
          <TemplateConfig
            templates={configs.get(currentType) || []}
            onSelect={handleSelectTemplate}
          ></TemplateConfig>
        </Col>
      </Row>
    </Modal >
  );
}
