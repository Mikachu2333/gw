# Application.CreateTaskPane

创建一个自定义任务面板。

## 语法

```typescript
function CreateTaskPane(url: string, title?: string): any
```

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| url | 必选 | string | 任务面板中加载的网页 URL。 |
| title | 可选 | string | 任务面板标题。省略时无标题。 |

## 返回值

创建成功返回 TaskPane 对象，失败或 URL 安全检查不通过时返回 `undefined`。

## 说明

在 WPS 窗口侧边创建一个嵌入式浏览器面板，加载指定 URL 的网页内容。任务面板常用于提供与文档并排显示的交互界面，如属性编辑器、工具栏扩展等。

创建前会对 URL 进行安全检查，不通过时返回 `undefined`。创建失败时同样返回 `undefined`。

## 示例

```javascript
/* 创建一个任务面板 */
function test() {
  var taskpane = Application.CreateTaskPane("https://example.com/panel.html", "我的面板")
  if (taskpane) {
    taskpane.Visible = true
  }
}
```
