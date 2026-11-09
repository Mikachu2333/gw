# View.SetViewRotation

设置视图旋转角度（仅旋转显示，不修改文档内容）。与 `ViewRotation` 属性读写等效，额外支持 `addHistory` 参数。

## 语法

express.**SetViewRotation**

express   一个代表 **View** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| ViewRotation | long | 旋转枚举值（见下表） |
| AddHistory | boolean (可选) | 是否添加到导航历史，默认 `true` |

**`viewRotation` 有效值**：

| 值 | 旋转角度 | 说明 |
|----|---------|------|
| 0 | 0° | 不旋转（默认） |
| 1 | 90° | 顺时针旋转 90° |
| 2 | 180° | 旋转 180° |
| 3 | 270° | 顺时针旋转 270°（即逆时针 90°） |

## 返回值

无

## 示例

```JavaScript
var view = app.ActiveWindow.ActiveView;

// 旋转 90°
view.SetViewRotation(1, true);

// 恢复 0°
view.SetViewRotation(0);

// 通过属性方式读写（值相同）
view.ViewRotation = 2; // 旋转 180°
console.log(view.ViewRotation); // 输出 2
```
