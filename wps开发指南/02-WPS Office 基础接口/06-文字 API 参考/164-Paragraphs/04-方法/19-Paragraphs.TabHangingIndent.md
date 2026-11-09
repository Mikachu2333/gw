# Paragraphs.TabHangingIndent

将悬挂缩进量设置为指定的制表位数。



## 语法

express.**TabHangingIndent(Count)**

express   一个代表 **Paragraphs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Count | 必选 | number（short 精度） | 如果为正，则表示要缩进的制表位数；如果为负，则表示要删除的缩进制表位数。 |

## 返回值

void

## 说明


如果 Count 的值为负数，您还可以使用此方法删除悬挂缩进的制表位。



## 示例


```JavaScript
/*本示例为活动文档中的所有段落设置悬挂缩进。*/
function test() {
    ActiveDocument.Paragraphs.TabHangingIndent(2)
}
```


```JavaScript
/*本示例将活动文档中所有段落的悬挂缩进量减少一个制表位。*/
function test() {
    ActiveDocument.Paragraphs.TabHangingIndent(-1)
}
```
