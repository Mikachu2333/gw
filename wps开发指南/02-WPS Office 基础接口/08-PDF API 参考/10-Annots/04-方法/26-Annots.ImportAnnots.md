# Annots.ImportAnnots

从 FDF 文件导入注释。

## 语法

express.**ImportAnnots**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| FileName | string (可选) | FDF 文件的本地绝对路径（扩展名必须为 `.fdf`）；**省略时弹出文件选择对话框** |

> **支持的文件格式**：仅支持 `.fdf` 格式。传入其他扩展名的文件路径将被忽略（无效果）。

## 返回值

无

## 示例

```JavaScript
// 直接指定路径导入（静默，不弹对话框）
page.Annots.ImportAnnots("C:\\data\\annotations.fdf");

// 省略参数：弹出文件选择对话框让用户选择 FDF 文件
page.Annots.ImportAnnots();
```
