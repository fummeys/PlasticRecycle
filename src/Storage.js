import AsyncStorage from '@react-native-async-storage/async-storage'


class Store {

  test(){
    // console.log('working')
    AsyncStorage.getItem('@storage_Key')
    .then((data)=>{
      return data
    }).catch((err)=>{
      console.log(err)
    })
  }

  async save(value){
    // console.log(value)
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
      console.log(e)
    }
  }

  async load(key){
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        // let data = value
        return value
      }
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }
}

const Storage = new Store()
export default Storage