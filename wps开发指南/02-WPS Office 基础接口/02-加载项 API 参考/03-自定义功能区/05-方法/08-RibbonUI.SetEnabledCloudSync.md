# RibbonUI.SetEnabledCloudSync

控制文档窗口右上角同步、协作、分享按钮的可用状态，并返回设置结果。

## 语法

express.**SetEnabledCloudSync(enable)**

express   一个代表 **RibbonUI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| enable | 必选 | boolean | `true` 表示将同步、协作、分享按钮设置为可用，`false` 表示将这些按钮设置为置灰。 |

## 返回值

Boolean

## 说明

- 该接口用于控制文档窗口右上角的同步按钮、协作按钮、分享按钮的可用状态。
- 存在多个组件进程时，调用该接口仅会改变当前进程中的按钮状态，不会同步影响其他组件进程。
- 该能力来自企业定制场景，用于按需控制相关云端入口按钮是否可交互。

## 示例

```javascript
/*本示例将当前文档窗口右上角的同步、协作、分享按钮置灰。*/
function DisableCloudButtons() {
	let result = Application.ribbonUI.SetEnabledCloudSync(false)
	return result
}
```