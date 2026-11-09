# Annots.CreateAffix

创建图章（图片印章）注释，通过 Base64 编码的图片数据在指定位置添加图片图章。

## 语法

express.**CreateAffix**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数，支持字段见下表 |

**jsonParam 字段说明**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| base64 | string | 是 | 图片的 Base64 编码字符串（含格式前缀，如 `data:image/png;base64,...`） |
| position | array | 是 | 图片中心点坐标，格式 `[x, y]`，单位 pt（**PDF 坐标系**，原点在页面左下角） |
| width | number | 否 | 图片宽度，单位 pt；缺省时使用图片原始尺寸 |
| height | number | 否 | 图片高度，单位 pt；缺省时使用图片原始尺寸 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var base64Str = "data:image/png;base64,iVBORw0KGgo...";
var annot = page.Annots.CreateAffix(JSON.stringify({base64: base64Str, position: [100, 100]}));
```
