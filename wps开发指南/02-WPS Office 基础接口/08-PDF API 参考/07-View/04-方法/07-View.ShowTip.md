# View.ShowTip

在视图中显示提示信息。

## 语法

express.**ShowTip**

express   一个代表 **View** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| TipContent | string | 提示文本内容 |
| Duration | long (可选) | 显示时长（毫秒） |
| Wait | boolean (可选) | 是否等待提示消失 |
| Pos | long (可选) | 显示位置，取值见下表，默认为 `0`（居中） |

### pos 取值

| 值 | 说明 |
|----|------|
| `0x0000` | 居中（默认） |
| `0x0001` | 左侧 |
| `0x0002` | 右侧 |
| `0x0004` | 顶部 |
| `0x0008` | 底部 |
| `0x0010` | 左上角 |
| `0x0020` | 右上角 |
| `0x0040` | 左下角 |
| `0x0080` | 右下角 |

## 返回值

无

## 示例

```JavaScript
app.ActiveWindow.ActiveView.ShowTip("操作完成", 3000, false, 0);
```
