# HeaderFooter.AddHeaderFooter

添加页眉页脚。JSON 顶层字段控制全局样式与页面范围；每个位置（`header_left`/`header_center`/`header_right`/`footer_left`/`footer_center`/`footer_right`）的值为数组，数组元素为内容项对象（文本、页码或日期）。

## 语法

express.**AddHeaderFooter**

express   一个代表 **HeaderFooter** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonConfig | string | JSON 格式的页眉页脚配置 |

**JSON 顶层字段说明**：

| 字段 | 类型 | 说明 |
|-----|------|------|
| header_left / header_center / header_right | Array | 页眉左/中/右内容项数组 |
| footer_left / footer_center / footer_right | Array | 页脚左/中/右内容项数组 |
| start | number | 应用起始页（1 起计，默认 1） |
| end | number | 应用结束页（1 起计，默认末页） |
| offset | number | 页码偏移量（默认 1） |
| fontName | string | 字体名称 |
| fontSize | number | 字体大小（默认 12） |
| red / green / blue | number | 字体颜色分量（0-255） |
| fontUnderline | bool | 是否下划线 |
| margin_left / margin_right | number | 左右边距（cm，默认 2.54） |
| margin_top / margin_bottom | number | 上下边距（cm，默认 1.27） |

**内容项对象格式**（数组元素三选一）：

| 形式 | 示例 | 说明 |
|-----|------|------|
| 文本 | `{"Text": "文档标题"}` | 固定文本 |
| 页码 | `{"Page": N}` | 自动页码，N 为下表的枚举值（0-14） |
| 日期 | `{"Date": N}` | 自动日期，N 为下表的枚举值（0-22） |

**Page 页码样式（`{"Page": N}`）**：

| N | 格式 | N | 格式 |
|---|------|----|------|
| 0 | X | 1 | 第X/Y页 |
| 2 | X/Y | 3 | 第1页 |
| 4 | 第1页,共x页 | 5 | -X- |
| 6 | 1/X | 7 | ①②③ |
| 8 | 壹贰叁 | 9 | I,II,III |
| 10 | i,ii,iii | 11 | A,B,C |
| 12 | a,b,c | 13 | 第一页 |
| 14 | 第一页,共x页 | | |

**Date 日期样式（`{"Date": N}`）**：

| N | 格式 | N | 格式 |
|---|------|----|------|
| 0 | m/d | 1 | m/d/yy |
| 2 | m/d/yyyy | 3 | mm/dd/yy |
| 4 | mm/dd/yyyy | 5 | d/m/yy |
| 6 | d/m/yyyy | 7 | dd/mm/yy |
| 8 | dd/mm/yyyy | 9 | mm/yy |
| 10 | mm/yyyy | 11 | m.d.yy |
| 12 | m.d.yyyy | 13 | mm.dd.yy |
| 14 | mm.dd.yyyy | 15 | mm.yy |
| 16 | mm.yyyy | 17 | d.m.yy |
| 18 | d.m.yyyy | 19 | dd.mm.yy |
| 20 | dd.mm.yyyy | 21 | yy-mm-dd |
| 22 | yyyy-mm-dd | | |

## 返回值

无

## 示例

```JavaScript
var hf = app.ActiveDocument.HeaderFooter;
hf.AddHeaderFooter(JSON.stringify({
    header_center: [{"Text": "文档标题"}],
    footer_right: [{"Page": 0}],
    start: 1,
    fontSize: 10
}));
```
