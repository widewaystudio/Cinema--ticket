export default async function(path, opt){
  const url = "https://www.easy-mock.com/mock/5a964cffdd997801d1e291fe/movie"+ path;
  const options = Object.assign({
    method:'GET',
  },opt);

  try{
    const response = await fetch(url, options);
    const {data, status} = await response.json();
    if(status === 0){
      return data;
    }else{
      console.log("获取数据错误");
    }

  } catch(e){
    // 错误处理
    console.log("获取数据错误"+e);
  }
}

