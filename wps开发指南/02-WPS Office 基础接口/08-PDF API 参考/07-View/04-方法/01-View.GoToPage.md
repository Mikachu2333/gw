# View.GoToPage

跳转到指定页面。

## 语法

express.**GoToPage**

express   一个代表 **View** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| PageIndex | long | 页码索引（从 1 开始） |

## 返回值

无

## 示例

```JavaScript
app.ActiveWindow.ActiveView.GoToPage(1);
```
