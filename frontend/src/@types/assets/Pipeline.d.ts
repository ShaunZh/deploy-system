/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-29 22:46:49
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-30 21:52:51
 */

interface PipelineMember {
  name: string;
  id: string;
  permission: string;
}

interface CodeScanJavascript {
  name: string;
  useLocalEslint: boolean; // 是否使用本地ESLint
}

interface PipelineConfig {
  type: 'test' | 'build' | 'code-scan';
  subType: | 'unit-test';
  name: string;


}

interface PipelineCodeSource {
  address: string; // 流水线地址
  branch: string; // 分支
}
interface PipelineDetail {
  name: string; // 流水线名称
  env: string; // 部署环境
  tag: string; // 标签
  members: PipelineMember[]; // 流水线成员
  codeSouce: PipelineCodeSource; // 代码源
  configs: 
}