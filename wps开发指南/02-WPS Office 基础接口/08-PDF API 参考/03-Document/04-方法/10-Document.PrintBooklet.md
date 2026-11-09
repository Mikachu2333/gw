# Document.PrintBooklet

小册子打印（按装订顺序重排页面）。

## 语法

express.**PrintBooklet**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 | 默认值 |
|-----|------|------|--------|
| First | long | 起始页码 | 必填 |
| Last | long | 结束页码 | 必填 |
| Fit | long | 页面适应模式（位标志，可按位 OR 组合，取值见下表） | 0x1 |
| PageWidth | long | 纸张宽度（毫米） | 0 |
| PageHeight | long | 纸张高度（毫米） | 0 |
| OddEvenType | long | 页面范围类型 | 0 |
| Portrait | boolean | 是否纵向 | FALSE |
| ContentType | long | 打印内容类型：`0`=文档内容+注释+表单（全部），`1`=仅文档内容（不含注释），`2`=仅表单字段 | 0 |
| BookRange | long | 小册子范围（0=双面，1=仅正面，2=仅背面） | 0 |
| BookOrder | long | 装订方向（0=左装订，1=右装订） | 1 |
| Copies | long | 打印份数 | 1 |
| Reverse | boolean | 是否逆序 | FALSE |
| AutoCenter | boolean | 是否自动居中 | TRUE |
| AutoRotate | boolean | 是否自动旋转 | TRUE |
| Collect | boolean | 是否逐份 | TRUE |
| Silent | boolean | 是否静默 | TRUE |

**适应模式 (fit) 位标志值**（可按位 OR 组合）：

| 十六进制 | 说明 |
|----------|------|
| `0x1` | 原始大小（rawSize） |
| `0x10` | 适应页面大小（fitItemSize） |
| `0x100` | 自动缩小大页面（autoScaleBigPage） |
| `0x1000` | 特殊缩放比例（specialScale） |
| `0x10000` | 自动旋转（autoRotate） |
| `0x100000` | 旋转 90°（rotate90） |
| `0x1000000` | 旋转 180°（rotate180） |
| `0x10000000` | 旋转 270°（rotate270） |

## 返回值

无

## 示例

```JavaScript
var doc = app.ActiveDocument;
doc.PrintBooklet(1, doc.PageCount, 0x10, 210, 297, 0, true,
    0, 0, 0, 1, false, true, true, true, false);
```
