/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80300 (8.3.0)
 Source Host           : localhost:3306
 Source Schema         : na

 Target Server Type    : MySQL
 Target Server Version : 80300 (8.3.0)
 File Encoding         : 65001

 Date: 22/03/2024 15:38:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_role_api
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_api`;
CREATE TABLE `sys_role_api` (
  `role_id` int NOT NULL,
  `api_id` int NOT NULL,
  PRIMARY KEY (`role_id`,`api_id`),
  KEY `IDX_29540ce5c1eb9aa158ee924dc8` (`role_id`),
  KEY `IDX_56cc6b48cbbea1759d7ae2fed8` (`api_id`),
  CONSTRAINT `FK_29540ce5c1eb9aa158ee924dc89` FOREIGN KEY (`role_id`) REFERENCES `system_role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_56cc6b48cbbea1759d7ae2fed8d` FOREIGN KEY (`api_id`) REFERENCES `system_api` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of sys_role_api
-- ----------------------------
BEGIN;
INSERT INTO `sys_role_api` (`role_id`, `api_id`) VALUES (1, 1);
INSERT INTO `sys_role_api` (`role_id`, `api_id`) VALUES (2, 1);
COMMIT;

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu` (
  `role_id` int NOT NULL,
  `menu_id` int NOT NULL,
  PRIMARY KEY (`role_id`,`menu_id`),
  KEY `IDX_b65fa84413c357d7282153b4a8` (`role_id`),
  KEY `IDX_543ffcaa38d767909d9022f252` (`menu_id`),
  CONSTRAINT `FK_543ffcaa38d767909d9022f2522` FOREIGN KEY (`menu_id`) REFERENCES `system_menu` (`id`),
  CONSTRAINT `FK_b65fa84413c357d7282153b4a88` FOREIGN KEY (`role_id`) REFERENCES `system_role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------
BEGIN;
INSERT INTO `sys_role_menu` (`role_id`, `menu_id`) VALUES (1, 1);
INSERT INTO `sys_role_menu` (`role_id`, `menu_id`) VALUES (2, 1);
COMMIT;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `email` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL COMMENT '手机号',
  `avatar` varchar(255) NOT NULL DEFAULT 'https://2.gravatar.com/userimage/246052877/856be483cd4f4b6df01060abef5ff896?size=256' COMMENT '头像',
  `status` int NOT NULL DEFAULT '0' COMMENT '0: 正常, 1: 禁用',
  `roleId` int NOT NULL COMMENT '当前角色id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_9e7164b2f1ea1348bc0eb0a7da` (`username`),
  UNIQUE KEY `IDX_a78066266d5da92bbaf1f70cf8` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
BEGIN;
INSERT INTO `sys_user` (`id`, `createdAt`, `updatedAt`, `deletedAt`, `username`, `password`, `email`, `mobile`, `avatar`, `status`, `roleId`) VALUES (1, '2024-03-21 22:44:32.294277', '2024-03-22 15:37:12.001241', NULL, 'admin', '3b93320c717f4e564067ae6fbc79a3d3:baba4c32a563dffe4f48e95f1eb4b7e56991e5d9256df1caa8e67ee084f6a5a443c5e3926973942a0f3bc078f8b10215', '882@mail.com', '18888888888', 'https://2.gravatar.com/userimage/246052877/856be483cd4f4b6df01060abef5ff896?size=256', 0, 1);
COMMIT;

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `role_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`role_id`,`user_id`),
  KEY `IDX_e8300bfcf561ed417f5f02c677` (`role_id`),
  KEY `IDX_71b4edf9aedbd3e5707156e80a` (`user_id`),
  CONSTRAINT `FK_71b4edf9aedbd3e5707156e80a2` FOREIGN KEY (`user_id`) REFERENCES `sys_user` (`id`),
  CONSTRAINT `FK_e8300bfcf561ed417f5f02c6776` FOREIGN KEY (`role_id`) REFERENCES `system_role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
BEGIN;
INSERT INTO `sys_user_role` (`role_id`, `user_id`) VALUES (1, 1);
INSERT INTO `sys_user_role` (`role_id`, `user_id`) VALUES (2, 1);
COMMIT;

-- ----------------------------
-- Table structure for system_api
-- ----------------------------
DROP TABLE IF EXISTS `system_api`;
CREATE TABLE `system_api` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `path` varchar(255) NOT NULL COMMENT 'api名称',
  `description` varchar(255) NOT NULL COMMENT 'api描述',
  `api_group` varchar(255) NOT NULL COMMENT 'api组',
  `method` varchar(255) NOT NULL COMMENT '方法',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of system_api
-- ----------------------------
BEGIN;
INSERT INTO `system_api` (`id`, `createdAt`, `updatedAt`, `deletedAt`, `path`, `description`, `api_group`, `method`) VALUES (1, '2024-03-22 15:34:42.048846', '2024-03-22 15:34:42.048846', NULL, '/api/user/getUserInfo', '获取用户信息', '系统用户', 'GET');
COMMIT;

-- ----------------------------
-- Table structure for system_menu
-- ----------------------------
DROP TABLE IF EXISTS `system_menu`;
CREATE TABLE `system_menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL COMMENT '菜单名称',
  `path` varchar(255) NOT NULL COMMENT '菜单路径',
  `icon` varchar(255) NOT NULL COMMENT '菜单图标',
  `parentId` int NOT NULL COMMENT '父级菜单id',
  `sort` int NOT NULL COMMENT '菜单排序',
  `type` int NOT NULL COMMENT '菜单类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of system_menu
-- ----------------------------
BEGIN;
INSERT INTO `system_menu` (`id`, `createdAt`, `updatedAt`, `deletedAt`, `name`, `path`, `icon`, `parentId`, `sort`, `type`) VALUES (1, '2024-03-22 15:33:22.557953', '2024-03-22 15:33:22.557953', NULL, '控制台', '/home/dashboard', 'dashboard', 0, 0, 1);
COMMIT;

-- ----------------------------
-- Table structure for system_role
-- ----------------------------
DROP TABLE IF EXISTS `system_role`;
CREATE TABLE `system_role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL COMMENT '角色名称',
  `description` varchar(255) NOT NULL COMMENT '角色描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of system_role
-- ----------------------------
BEGIN;
INSERT INTO `system_role` (`id`, `createdAt`, `updatedAt`, `deletedAt`, `name`, `description`) VALUES (1, '2024-03-21 22:46:17.000000', '2024-03-21 22:46:20.000000', NULL, '管理员', '系统管理员');
INSERT INTO `system_role` (`id`, `createdAt`, `updatedAt`, `deletedAt`, `name`, `description`) VALUES (2, '2024-03-22 15:35:22.135578', '2024-03-22 15:35:22.135578', NULL, '普通用户', '基础用户');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
