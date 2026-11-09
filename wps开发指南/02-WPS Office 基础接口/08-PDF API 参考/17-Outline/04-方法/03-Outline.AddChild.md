# Outline.AddChild

在当前节点下添加子大纲。注意：当前版本实现中 `pageIndex` 与 `index` 参数未生效，仅标题有效，节点始终追加到末尾。

## 语法

express.**AddChild**

express   一个代表 **Outline** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Title | string | 标题 |
| PageIndex | long | 关联页码索引（当前未使用） |
| Index | long (可选, 默认 -1) | 插入位置，-1 表示末尾（当前未使用） |

## 返回值

`Outline` — 新创建的子大纲节点

## 示例

```JavaScript
var newChild = root.AddChild("第一章", 0);
var newChild2 = root.AddChild("1.1 小节", 2, 0); // 插入到第一个位置
```
