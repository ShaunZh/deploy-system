CREATE TABLE `deploy_environment`  (
  `id` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL COMMENT '环境名称',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline`  (
  `id` varchar(128) NOT NULL,
  `name` varchar(255) NOT NULL,
  `create_user_id` varchar(128) NOT NULL COMMENT '创建者',
  `create_time` datetime(0) NOT NULL COMMENT '创建时间',
  `environment_id` varchar(128) NULL COMMENT '关联环境',
  `run_user_id` int NULL COMMENT '运行人',
  `run_status_id` int NULL COMMENT '运行状态',
  `code_source` varchar(255) NOT NULL COMMENT '代码源',
  `configs_id` varchar(255) NULL COMMENT '配置id',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline_build`  (
  `id` varchar(128) NOT NULL,
  `type` varchar(255) NOT NULL COMMENT '类型',
  `name` varchar(255) NOT NULL,
  `pipeline_id` varchar(128) NOT NULL COMMENT '关联的流水线',
  `order` varchar(128) NOT NULL COMMENT '顺序',
  `config` varchar(255) NOT NULL COMMENT '配置信息',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline_build_record`  (
  `id` varchar(128) NOT NULL,
  `pipeline_build_id` varchar(128) NOT NULL,
  `start_time` datetime(0) NOT NULL,
  `build_result` varchar(255) NOT NULL,
  `build_status` varchar(255) NOT NULL COMMENT '成功或失败',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline_code_scan`  (
  `id` varchar(128) NOT NULL,
  `type` varchar(10) NULL COMMENT '代码扫描类型，JavaScript、java',
  `name` varchar(255) NOT NULL COMMENT '扫描名称',
  `pipeline_id` varchar(128) NOT NULL COMMENT '关联的流水线',
  `order` varchar(255) NOT NULL COMMENT '顺序',
  `config` varchar(255) NOT NULL COMMENT '配置信息',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline_code_scan_record`  (
  `id` varchar(128) NOT NULL,
  `code_scan_id` varchar(128) NOT NULL COMMENT '代码扫描id',
  `start_time` datetime(0) NOT NULL,
  `scan_result` varchar(255) NOT NULL,
  `scan_status` varchar(255) NOT NULL COMMENT '扫描状态， 成功或失败',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline_permission`  (
  `id` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL COMMENT '权限名称',
  `value` char(10) NOT NULL COMMENT '权限值',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline_run_record`  (
  `id` varchar(128) NOT NULL,
  `pipeline_id` varchar(128) NOT NULL COMMENT '流水线',
  `run_user_id` varchar(128) NULL COMMENT '运行人',
  `run_time` datetime(0) NULL COMMENT '运行时间',
  `run_status_id` int NULL COMMENT '运行状态',
  `run_duration_time` datetime(0) NULL COMMENT '运行持续时间',
  `trigger_method` varchar(128) NULL COMMENT '触发方式',
  `remark` varchar(255) NULL COMMENT '备注',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline_test`  (
  `id` varchar(128) NOT NULL,
  `type` varchar(255) NOT NULL COMMENT '类型，Node.js、Java',
  `name` varchar(255) NOT NULL,
  `pipeline_id` varchar(128) NOT NULL COMMENT '关联的流水线',
  `order` varchar(128) NOT NULL COMMENT '顺序',
  `config` varchar(255) NOT NULL COMMENT '配置信息',
  PRIMARY KEY (`id`)
);

CREATE TABLE `pipeline_test_record`  (
  `id` varchar(128) NOT NULL,
  `pipeline_test_id` varchar(128) NOT NULL,
  `start_time` datetime(0) NOT NULL,
  `test_result` varchar(255) NOT NULL COMMENT '测试结果文字',
  `test_status` varchar(255) NOT NULL COMMENT '成功或失败',
  PRIMARY KEY (`id`)
);

CREATE TABLE `run_status`  (
  `id` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `tag`  (
  `id` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `user`  (
  `id` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `corporation_id` varchar(128) NULL COMMENT '所属企业',
  `department_id` varchar(128) NULL COMMENT '企业部门',
  PRIMARY KEY (`id`)
);

CREATE TABLE `user_pipeline`  (
  `id` varchar(128) NOT NULL,
  `user_id` varchar(128) NOT NULL COMMENT '用户id',
  `pipeline_permission_id` varchar(128) NOT NULL COMMENT '流水线权限id',
  `pipeline_id` varchar(128) NOT NULL COMMENT '流水线id',
  `tag_id` varchar(128) NOT NULL COMMENT '流水线所属标签id',
  PRIMARY KEY (`id`)
);

ALTER TABLE `pipeline` ADD CONSTRAINT `fk_pipeline_pipeline_2` FOREIGN KEY (`environment_id`) REFERENCES `deploy_environment` (`id`);
ALTER TABLE `pipeline` ADD CONSTRAINT `fk_pipeline_pipeline_4` FOREIGN KEY (`create_user_id`) REFERENCES `user` (`id`);
ALTER TABLE `pipeline` ADD CONSTRAINT `fk_pipeline_pipeline_1` FOREIGN KEY (`run_status_id`) REFERENCES `run_status` (`id`);
ALTER TABLE `pipeline` ADD CONSTRAINT `fk_pipeline_pipeline_3` FOREIGN KEY (`run_user_id`) REFERENCES `user` (`id`);
ALTER TABLE `pipeline_build` ADD CONSTRAINT `fk_pipeline_build_pipeline_build_1` FOREIGN KEY (`pipeline_id`) REFERENCES `pipeline` (`id`);
ALTER TABLE `pipeline_build_record` ADD CONSTRAINT `fk_pipeline_build_record_pipeline_build_record_1` FOREIGN KEY (`pipeline_build_id`) REFERENCES `pipeline_build` (`id`);
ALTER TABLE `pipeline_code_scan` ADD CONSTRAINT `fk_pipeline_code_scan_pipeline_code_scan_1` FOREIGN KEY (`pipeline_id`) REFERENCES `pipeline` (`id`);
ALTER TABLE `pipeline_code_scan_record` ADD CONSTRAINT `fk_pipeline_code_scan_record_pipeline_code_scan_record_1` FOREIGN KEY (`code_scan_id`) REFERENCES `pipeline_code_scan` (`id`);
ALTER TABLE `pipeline_run_record` ADD CONSTRAINT `fk_pipeline_run_record_pipeline_run_record_1` FOREIGN KEY (`pipeline_id`) REFERENCES `pipeline` (`id`);
ALTER TABLE `pipeline_run_record` ADD CONSTRAINT `fk_pipeline_run_record_pipeline_run_record_2` FOREIGN KEY (`run_user_id`) REFERENCES `user` (`id`);
ALTER TABLE `pipeline_run_record` ADD CONSTRAINT `fk_pipeline_run_record_pipeline_run_record_3` FOREIGN KEY (`run_status_id`) REFERENCES `run_status` (`id`);
ALTER TABLE `pipeline_test` ADD CONSTRAINT `fk_pipeline_test_pipeline_test_1` FOREIGN KEY (`pipeline_id`) REFERENCES `pipeline` (`id`);
ALTER TABLE `pipeline_test_record` ADD CONSTRAINT `fk_pipeline_test_record_pipeline_test_record_1` FOREIGN KEY (`pipeline_test_id`) REFERENCES `pipeline_test` (`id`);
ALTER TABLE `user_pipeline` ADD CONSTRAINT `fk_user_pipeline_user_pipeline_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `user_pipeline` ADD CONSTRAINT `fk_user_pipeline_user_pipeline_2` FOREIGN KEY (`pipeline_permission_id`) REFERENCES `pipeline_permission` (`id`);
ALTER TABLE `user_pipeline` ADD CONSTRAINT `fk_user_pipeline_user_pipeline_3` FOREIGN KEY (`pipeline_id`) REFERENCES `pipeline` (`id`);
ALTER TABLE `user_pipeline` ADD CONSTRAINT `fk_user_pipeline_user_pipeline_4` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`);

