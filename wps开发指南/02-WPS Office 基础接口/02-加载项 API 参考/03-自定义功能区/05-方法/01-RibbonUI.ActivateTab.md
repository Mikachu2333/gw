# RibbonUI.ActivateTab

使 WPS 应用程序激活显示指定的自定义功能区选项卡。该选项卡 Id 为加载项 `ribbon.xml` 中 `tab` 节点定义的 `id`。

## 语法

express.**ActivateTab(ControlID)**

express   一个代表 **RibbonUI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ControlID | 必选 | string | 自定义功能区选项卡的 Id，对应加载项 `ribbon.xml` 中 `tab` 节点定义的 `id`。 |

## 返回值

void

## 示例

```javascript
/*本示例切换到指定的自定义功能区选项卡。*/
function ShowCustomTab() {
	Application.ribbonUI.ActivateTab("WebAddinDemo")
}
```
