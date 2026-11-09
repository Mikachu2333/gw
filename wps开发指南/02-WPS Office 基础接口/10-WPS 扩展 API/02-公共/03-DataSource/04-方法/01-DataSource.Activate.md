# DataSource.Activate

激活数据源，跨进程表现为激活ET文档。

## 语法

express.Activate()

express   一个代表 DataSource 对象的变量。

## 返回值

Boolean


## 示例

```javascript
//以下示例为WPP激活数据源对象，调起ET文档
Application.ActivePresentation.Slides(1).Shapes.Item(3).WebShape.DataSource.Activate()
```
