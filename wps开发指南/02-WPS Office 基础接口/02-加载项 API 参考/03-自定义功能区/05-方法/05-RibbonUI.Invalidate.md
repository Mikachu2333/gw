# RibbonUI.Invalidate

将自定义功能区的数据缓存置为无效，WPS 应用程序会在下一次显示时再次获取更新。

## 语法

express.**Invalidate()**

express   一个代表 **RibbonUI** 对象的变量。

## 返回值

void

## 示例

```javascript
/*本示例刷新整个自定义功能区，使所有动态回调重新获取数据。*/
function RefreshRibbon() {
	let ribbon = Application.ribbonUI
	ribbon.Invalidate()
}
```