# RibbonUI.InvalidateControl

指定更新一个自定义控件，参数为控件 Id。该 Id 为加载项 `ribbon.xml` 中定义的控件 `id`。

## 语法

express.**InvalidateControl(ControlID)**

express   一个代表 **RibbonUI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ControlID | 必选 | string | 要刷新的自定义功能区控件 Id，对应加载项 `ribbon.xml` 中定义的控件 `id`。 |

## 返回值

void

## 示例

```javascript
/*本示例仅刷新指定按钮的状态。*/
function RefreshButton() {
	Application.ribbonUI.InvalidateControl("btnSync")
}
```
