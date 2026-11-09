# Debug.GC

手动触发 V8 引擎的垃圾回收。

## 语法

```typescript
function GC(): void
```

express   一个代表 **Debug** 对象的变量。

## 说明

强制 V8 引擎立即执行一次完整的垃圾回收。正常情况下垃圾回收由引擎自动调度，此方法用于调试内存问题时主动触发回收——例如在调用 [Debug.ShowWeak](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Debug/member/ShowWeak) 之前先调用 `Debug.GC()`，确保可回收对象已被清理，从而更准确地观察仍然存活的句柄。

## 示例

```javascript
/* 配合 ShowWeak 诊断内存 */
function test() {
  Debug.GC()
  Debug.ShowWeak()
}
```

```javascript
/* 在循环测试中观察内存变化 */
function test() {
  for (let i = 0; i < 1000; i++) {
    let arr = new Array(10000)
  }
  Debug.GC()
  Debug.Print("GC 已完成")
}
```
