# Application.GetTaskPane

根据 ID 获取已创建的任务面板。

## 语法

```typescript
function GetTaskPane(id: number): any
```

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| id | 必选 | number | 任务面板的 ID。 |

## 返回值

找到返回 TaskPane 对象，未找到返回 `undefined`。

## 说明

通过 [CreateTaskPane](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateTaskPane) 创建的任务面板会分配一个唯一 ID，后续可用此方法获取该面板的引用。未找到对应 ID 的面板时返回 `undefined`。

## 示例

```javascript
/* 获取已创建的任务面板 */
function test() {
  var taskpane = Application.GetTaskPane(1)
  if (taskpane) {
    taskpane.Visible = true
  }
}
```
