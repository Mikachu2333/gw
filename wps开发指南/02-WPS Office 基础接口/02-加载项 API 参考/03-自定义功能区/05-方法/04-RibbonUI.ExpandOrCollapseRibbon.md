# RibbonUI.ExpandOrCollapseRibbon

设置功能区为展开或折叠状态。

## 语法

express.**ExpandOrCollapseRibbon(state)**

express   一个代表 **RibbonUI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| state | 必选 | boolean | `true` 表示展开功能区，`false` 表示折叠功能区。 |

## 返回值

void

## 示例

```javascript
/*本示例展开功能区。*/
function ExpandRibbon() {
	Application.ribbonUI.ExpandOrCollapseRibbon(true)
}
```