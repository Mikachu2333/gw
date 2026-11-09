# View.ViewRotation

获取或设置视图旋转角度（仅旋转显示，不修改文档内容）。有效值为 `0`–`3`，详见 [SetViewRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/SetViewRotation)。 **Long** 类型，可读写。

## 语法

express.**ViewRotation**

express   一个代表 **View** 对象的变量。

## 类型

long

## 说明

| 值 | 含义 |
|----|------|
| 0 | 0°（不旋转） |
| 1 | 顺时针 90° |
| 2 | 180° |
| 3 | 顺时针 270° |

## 示例

```JavaScript
var view = app.ActiveWindow.ActiveView;
view.ViewRotation = 1; // 顺时针旋转 90°
console.log(view.ViewRotation); // 输出 1
```
