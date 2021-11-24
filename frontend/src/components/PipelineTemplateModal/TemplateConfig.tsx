/*
 * @Description: 根据传入的流水线模板参数，展示流水线模板步骤
 * @Author: Hexon
 * @Date: 2021-11-24 23:34:10
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-25 00:26:24
 */

import React, { useState } from 'react';
import { PipelineConfig } from './index';
import './TemplateConfig.less';

interface Props {
  templates: PipelineConfig[];
  onSelect: (id: string) => void
}

// const configName = {
//   'code-scan': '代码扫描',
//   test: '测试',
//   build: '构建',
//   'build-upload': '构建上传',
//   deploy: '部署'
// };

export default function TemplateConfig(props: Props): React.ReactElement {
  const { templates, onSelect } = props;
  const [activeId, setActiveId] = useState('');

  const handleSelect = (id: string) => {
    setActiveId(id);
    onSelect(id);
  };

  const getConfig = () => {
    return templates.map(temp => {
      return (
        <div
          key={temp.id}
          className={`template-item ${activeId === temp.id && 'active'} `}
          onClick={() => handleSelect(temp.id)}>
          <p>{temp.title}</p>
        </div>
      );
    });
  };
  return (
    <div className="template-view">
      {getConfig()}
    </div>
  );
}



