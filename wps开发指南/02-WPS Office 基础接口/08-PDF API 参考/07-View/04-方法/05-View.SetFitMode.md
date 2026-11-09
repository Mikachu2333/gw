# View.SetFitMode

设置适应模式。

## 语法

express.**SetFitMode**

express   一个代表 **View** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| FitMode | long | 适应模式值，枚举值同 [FitMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/FitMode) |
| AddHistory | boolean (可选) | 是否添加到视图导航历史 |

## 返回值

无

## 示例

```JavaScript
app.ActiveWindow.ActiveView.SetFitMode(2, true);
```
