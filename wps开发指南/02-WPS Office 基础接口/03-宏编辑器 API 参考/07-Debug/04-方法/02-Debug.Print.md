# Debug.Print

在宏编辑器的"立即窗口"中输出文本。

## 语法

```typescript
function Print(...PrintText: any[]): void
```

express   一个代表 **Debug** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ...PrintText | 可选 | any[] | 要输出的内容，可以是任意类型，支持多个参数。 |

## 说明

接受任意数量的参数，将每个参数转为字符串后拼接输出。
传入多个参数时，除最后一个参数外，每个参数的输出宽度会按 14 列对齐——类似 VBA 的制表位效果，使多参数输出呈表格状排列。
布尔值会被转换为小写的 `"true"` 或 `"false"`。

## 示例

```javascript
/* 输出调试信息 */
function test() {
  Debug.Print("计算结果：" + 42)
  Debug.Print("状态：", true)
}
```

```javascript
/* 利用列对齐输出表格 */
function test() {
  Debug.Print("名称", "年龄", "城市")
  Debug.Print("张三", 25, "北京")
  Debug.Print("李四", 30, "上海")
}
```
