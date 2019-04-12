# loading
简单易用，无依赖，炫酷
# 使用方式
  1.引入自行less文件
  2. import loading. from 'loading'
  3. loading.show()//显示  loading.close()//关闭  loading.forceClose()//强制关闭
# 注意 loading.show() 内部$loadingNum会自增1  loading.close()内部$loadingNum会自减1  直到$loadingNum===0 loading才会关闭
# 执行loading.forceClose() 会强制关闭
