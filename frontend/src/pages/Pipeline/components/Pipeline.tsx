/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-20 15:45:22
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-24 22:51:01
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Table, Space, Tag, Popover, Row, Col } from 'antd';
// import { useHistory } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';
import SearchInput from '@/components/SearchInput';
import { PlusOutlined } from '@ant-design/icons';
import PipelineTemplateModal from '@/components/PipelineTemplateModal';
// import history from '@/libs/history';


interface ITableColumnProps {
  name: string,
  lastStatus: number,
  environment: string,
  runTime: string,
  runUser: string
}

interface Props {
  type: 'all' | 'my'
}

export default function Pipeline(props: Props): React.ReactElement {
  const { type } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [visiblePipelineTemplateModal, setVisiblePipelineTemplateModal] = useState(false);
  // const history = useHistory();

  const data = [
    {
      key: '1',
      name: 'John Brown',
      lastStatus: 0,
      environment: '开发环境',
      runTime: '2021-11-20 08:00',
      runUser: 'hexon'
    },
    {
      key: '2',
      name: 'John Brown',
      lastStatus: 1,
      environment: '开发环境',
      runTime: '2021-11-20 08:00',
      runUser: 'hexon'
    },
    {
      key: '3',
      name: 'John Brown',
      lastStatus: 2,
      environment: '开发环境',
      runTime: '2021-11-20 08:00',
      runUser: 'hexon'
    },
  ];


  const columns: ColumnsType<ITableColumnProps> = [
    {
      title: '流水线名称',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '最近运行状态',
      dataIndex: 'lastStatus',
      key: 'lastStatus',
      align: 'center',
      render(_: number) {
        switch (_) {
          case 0: return <Tag>---</Tag>;
          case 1: return <Tag color="green">成功</Tag>;
          case 2: return <Tag color="red">失败</Tag>;
        }
      }
    },
    {
      title: '环境',
      dataIndex: 'environment',
      key: 'environment',
      align: 'center',
    },
    {
      title: '运行时间',
      dataIndex: 'runTime',
      key: 'runTime',
      align: 'center',
    },
    {
      title: '运行人',
      dataIndex: 'runUser',
      key: 'runUser',
      align: 'center',
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render(_: unknown, r: ITableColumnProps, index: number) {
        return <Space size="middle">
          <Button type="link" onClick={() => handleLike(index)}>收藏</Button>
          <Button type="link" onClick={() => handleRun(index)}>运行</Button>
          <Popover
            placement="bottom"
            trigger="hover"
            content={
              <div>
                <p><Button type="link" onClick={() => handleDelete(index)}>删除</Button></p>
              </div>
            } >
            <Button type="link">...</Button>
          </Popover>
        </Space>;
      }
    },
  ];

  const fetchData = useCallback(() => {
    console.log('fetchData: ', type);
  }, [type]);

  const handleLike = (index: number) => {
    console.log('handleLike: ', data[index]);
  };
  const handleRun = (index: number) => {
    console.log('handleRun: ', data[index]);
  };

  const handleSelectChange = (selectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const hanldeSearch = (keyword: string) => {
    console.log('handleSearch: ', keyword);
  };

  const handleDelete = (index: number) => {
    console.log('handleDelete: ', data[index]);
  };

  const handleCreate = () => {
    console.log('handleCreate');
    setVisiblePipelineTemplateModal(true);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  };

  const handleCancelPipelinTemplateModal = () => {
    setVisiblePipelineTemplateModal(false);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="page page-pipeline-my">
      <div className="table-toolbar">
        <Row justify="space-between">
          <Col><h3 className="page-title">{`${type === 'my' ? '我的' : '全部'}流水线`}</h3></Col>
          <Col>
            <Row gutter={10}>
              <Col> <SearchInput placeholder="请输入流水线名称" onSearch={hanldeSearch}></SearchInput> </Col>
              <Col> <Button type="primary" onClick={handleCreate}><PlusOutlined></PlusOutlined>新建流水线</Button> </Col>

            </Row>
          </Col>
        </Row>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      {
        visiblePipelineTemplateModal && <PipelineTemplateModal onCancel={handleCancelPipelinTemplateModal}></PipelineTemplateModal>
      }
    </div>
  );
}