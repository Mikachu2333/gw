# BrowserWindow.SetCaptionRect

设置窗口的标题栏拖拽区域。

## 语法

```typescript
SetCaptionRect(x: number, y: number, w: number, h: number): void
```

express   一个代表 **BrowserWindow** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| x | 必选 | number | 矩形左上角 X 坐标（像素）。 |
| y | 必选 | number | 矩形左上角 Y 坐标（像素）。 |
| w | 必选 | number | 矩形宽度（像素）。 |
| h | 必选 | number | 矩形高度（像素）。 |

## 说明

在加载项浏览器窗口内定义一个矩形区域作为标题栏拖拽区——用户在此区域内按住鼠标拖动即可移动整个窗口。参数为整数坐标，系统按窗口客户区坐标判定命中。如需取消拖拽区域，调用 [ClearCaptionRect](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/ClearCaptionRect)。

## 示例

```javascript
/* 在窗口顶部设置拖拽条 */
function test() {
  var bw = Application.BrowserWindow
  bw.SetCaptionRect(0, 0, 800, 30)
}
```
