enum CacheType { // 什么时候用枚举类型
  Local,
  Session
}

class Cache {
  storage: Storage // storage 的类型是Storage是什么意思
  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value)) // 这里为什么要stingify 和 parse
    }
  }
  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  removeCache(key: string) {
    this.storage.removeItem(key)
  }
  clearCache() {
    this.storage.clear()
  }
}

const sessionCache = new Cache(CacheType.Session)

const localCache = new Cache(CacheType.Local)
export { localCache, sessionCache }
