# Annots.ExportAnnots

导出当前文档所有注释。

## 语法

express.**ExportAnnots**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| FileName | string (可选) | **当前实现中该参数未生效**，调用后始终弹出另存为对话框让用户选择保存路径和格式 |

> **说明**：`fileName` 参数在当前版本中被忽略，导出路径由用户在弹出对话框中选择。支持导出为 `.fdf`、`.pdf`（带注释的 PDF 副本）、`.docx`（导出为 Word 文档）格式。

## 返回值

无

## 示例

```JavaScript
// 弹出另存为对话框，由用户选择导出路径和格式
page.Annots.ExportAnnots();
```
