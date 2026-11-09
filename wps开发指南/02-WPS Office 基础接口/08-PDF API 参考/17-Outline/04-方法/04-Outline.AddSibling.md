# Outline.AddSibling

在当前节点后添加同级大纲。

## 语法

express.**AddSibling**

express   一个代表 **Outline** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Title | string | 标题 |
| PageIndex | long | 关联页面索引，**0 起计**（第一页为 `0`）；传 `-1` 时自动定位到当前视图页 |

## 返回值

`Outline` — 新创建的同级大纲节点

## 示例

```JavaScript
// 在 outline 后插入同级节点，关联第 11 页（索引 10）
var sibling = outline.AddSibling("第二章", 10);
```
