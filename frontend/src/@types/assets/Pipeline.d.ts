/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-29 22:46:49
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-12-02 18:11:29
 */

// ====================== 任务步骤 ====================== 
// 上传(PS: 共用，基本上所有上传都是相同的参数)
interface UploadStep {
  address: string; // 上传的服务器地址
  path: string; // 上传路径
  sourceFolder: string; // 上传的文件夹
}

// java 构建步骤
interface JavaBuildStep {
  name: string; // 步骤名称
  JdkVersionId: string; // jdk版本id
  mavenVersionId: string; // maven版本Id
  buildCommands: string; // 构建命令
}

// Node.js构建步骤
interface NodejsBuildStep {
  name: string; // 名称
  nodeVersionId: string; // 选择的Node版本id  
  buildCommands: string; // 构建命令
}

// 流水线任务步骤
type PipelineTaskStep = JavaBuildStep | NodejsBuildStep | BuildUploadStep;

// ====================== end 任务步骤 ======================

// 流水线成员
interface PipelineMember {
  name: string;
  id: string;
  permission: string;
}

// 流水线代码源
interface PipelineCodeSource {
  address: string; // 流水线地址
  branch: string; // 分支
}

// 流水线任务
interface PipelineTaskConfig {
  type: 'code-scan' | 'test' | 'build' | 'deploy'; // 代码扫描 | 测试 | 构建 | 部署
  // 结合type 和 subType确定任务的类型，如type为code-scan，subType为JavaScript，
  // 则说明该任务为「JavaScript代码扫描」
  subType: string; // 子类型，如: Java | Node.js
  name: string; // 任务配置名称
  taskSteps: PipelineTaskStep[]; // 任务步骤
}

// 流水线阶段配置
interface PipelineStageConfig {
  stageName: string; // 阶段名称
  taskConfigs: Array<PipelineTaskConfig | PipelineTaskConfig[]>; // 任务配置
}

// 流水线详情
interface PipelineDetail {
  name: string; // 流水线名称
  env: string; // 部署环境
  tag: string; // 标签
  members: PipelineMember[]; // 流水线成员
  codeSouce: PipelineCodeSource; // 代码源
  stageConfigs: PipelineStageConfig[]// 流水线流程配置
}


