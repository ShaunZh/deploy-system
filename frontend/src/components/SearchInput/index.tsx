/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-21 22:48:03
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-21 22:57:14
 */
import React from 'react';
import { Input } from 'antd';

const { Search } = Input;


interface Props {
  placeholder?: string
  onSearch: (keyword: string) => void
}

export default function SearchInput(props: Props): React.ReactElement {
  const { onSearch, placeholder = '' } = props;

  return (
    <Search
      placeholder={placeholder || '请输入'}
      allowClear
      enterButton
      size="middle"
      onSearch={onSearch}
    />
  );

}